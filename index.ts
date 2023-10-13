const withAmpt = (config: any) => ({
  ...config,
  nitro: {
    ...config.nitro,
    preset: "node",
    serveStatic: false,
  },
});

export default withAmpt;
