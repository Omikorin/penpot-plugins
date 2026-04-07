# Penpot Plugins

Some nice Penpot plugins.

## Monorepo structure

This project is a monorepo managed with Bun workspaces. It contains the following packages:

| Package                                          | slug      | Description                 |
| ------------------------------------------------ | --------- | --------------------------- |
| [pattern-hero](./packages/pattern-hero/)         | `pattern` | Creates repeatable patterns |
| [beautiful-qrcode](./packages/beautiful-qrcode/) | `qrcode`  | Generates vibrant QR codes  |
| [waves-generator](./packages/waves-generator/)   | `waves`   | Generates randomized waves  |

## Development

Want to contribute or run locally? Here's how:

```bash
# Install dependencies
bun install

# Start development server with live preview
bun run dev:waves

# Build for production
bun run build:waves
```

Next, install the plugin using this link:

```
http://localhost:4400/manifest.local.json
```

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Acknowledgments

Thanks to Feather Icons for their beautiful open source icons.

## License

This project is licensed under the [AGPL 3.0 license](./LICENSE).

---

<p align="center">Made with ❤️ by Michał Korczak</p>

---
