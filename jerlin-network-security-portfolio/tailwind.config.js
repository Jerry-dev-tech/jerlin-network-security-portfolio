/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d1b2a",      // deep navy, dark background
        panel: "#13263a",    // raised surface in dark mode
        paper: "#f3f6f5",    // light background
        line: "#d5dedb",     // light-mode borders
        signal: "#2f6fed",   // link / link-up blue
        amber: "#e8a317",    // alert accent (used sparingly)
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "Liberation Mono", "monospace"],
      },
      keyframes: {
        packet: { "0%": { offsetDistance: "0%", opacity: "0" }, "10%": { opacity: "1" }, "90%": { opacity: "1" }, "100%": { offsetDistance: "100%", opacity: "0" } },
        rise: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: { rise: "rise .6s ease-out both" },
    },
  },
  plugins: [],
};
