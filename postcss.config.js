module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};

// minify tailwindcss for production:
// command => `npx tailwindcss -o build.css --minify`
