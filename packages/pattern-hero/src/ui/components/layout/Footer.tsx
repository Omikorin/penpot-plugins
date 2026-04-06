import type { Component } from 'solid-js';

export const Footer: Component = () => {
  return (
    <footer class="content-footer">
      <a
        href="https://omikor.in"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
      >
        Made with ❤️ by <span class="footer-accent">Omikorin</span>
      </a>
    </footer>
  );
};
