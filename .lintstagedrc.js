export default {
  "**/*.ts?(x)": () => "tsc --noEmit",
  "*.{js,jsx,ts,tsx}": ["prettier --write"],
};
