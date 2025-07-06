export default {
  // https://getbootstrap.com/docs/5.3/getting-started/vite/#configure-vite
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
};
