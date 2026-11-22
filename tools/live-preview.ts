import type { ServerResponse } from 'node:http';
import { type Plugin, type PreviewServer, preview, type ResolvedConfig } from 'vite';

const RELOAD_ENDPOINT = '/__live-reload';

const clientScript = `new EventSource('${RELOAD_ENDPOINT}').addEventListener('reload', () => location.reload());`;

/**
 * Serves the build output with `vite preview` while `vite build --watch` is
 * running, and reloads open pages after every rebuild.
 * Does nothing outside of watch mode, so production builds stay untouched.
 */
export const livePreview = (): Plugin => {
  const clients = new Set<ServerResponse>();
  let config: ResolvedConfig;
  let server: PreviewServer | undefined;

  return {
    name: 'live-preview',
    apply: 'build',

    configResolved(resolved) {
      config = resolved;
    },

    transformIndexHtml() {
      if (!config.build.watch) return;
      return [{ tag: 'script', children: clientScript, injectTo: 'head' }];
    },

    async closeBundle() {
      if (!config.build.watch) return;

      if (server) {
        for (const client of clients) client.write('event: reload\ndata: \n\n');
        return;
      }

      server = await preview({
        configFile: false,
        clearScreen: false,
        root: config.root,
        base: config.base,
        build: { outDir: config.build.outDir },
        preview: config.preview,
        plugins: [
          {
            name: 'live-preview-reload',
            configurePreviewServer({ middlewares }) {
              middlewares.use(RELOAD_ENDPOINT, (req, res) => {
                res.writeHead(200, {
                  'Content-Type': 'text/event-stream',
                  'Cache-Control': 'no-cache',
                  Connection: 'keep-alive',
                });
                res.write(':connected\n\n');
                clients.add(res);
                req.on('close', () => clients.delete(res));
              });
            },
          },
        ],
      });
      server.printUrls();
    },
  };
};