/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    backgroundColor: {
      transparent: "var(--transparent)",
      white: "hsl(var(--white))",
      black: "hsl(var(--black))",

      bug: "hsl(var(--bgcolor-bug))",
      dark: "hsl(var(--bgcolor-dark))",
      dragon: "hsl(var(--bgcolor-dragon))",
      electric: "hsl(var(--bgcolor-electric))",
      fairy: "hsl(var(--bgcolor-fairy))",
      fighting: "hsl(var(--bgcolor-fighting))",
      fire: "hsl(var(--bgcolor-fire))",
      flying: "hsl(var(--bgcolor-flying))",
      ghost: "hsl(var(--bgcolor-ghost))",
      grass: "hsl(var(--bgcolor-grass))",
      ground: "hsl(var(--bgcolor-ground))",
      ice: "hsl(var(--bgcolor-ice))",
      normal: "hsl(var(--bgcolor-normal))",
      poison: "hsl(var(--bgcolor-poison))",
      psychic: "hsl(var(--bgcolor-psychic))",
      rock: "var(--bgcolor-rock)",
      steel: "var(--bgcolor-steel)",
      water: "var(--bgcolor-water)",

      defaultInput: "hsl(var(--bgcolor-default-input))",
      pressedInput: "hsl(var(--bgcolor-pressed-input))",
      modal: "hsl(var(--bgcolor-modal))",

      heightShort: "hsl(var(--color-height-short))",
      heightMedium: "hsl(var(--color-height-medium))",
      heightTall: "hsl(var(--color-height-tall))",

      weightLight: "hsl(var(--color-height-short))",
      weightNormal: "hsl(var(--color-height-normal))",
      weightHeavy: "hsl(var(--color-height-heavy))",
    },
    colors: {
      transparent: "var(--transparent)",
      white: "var(--white)",
      black: "var(--color-black)",
      number: "var(--color-number)",

      bug: "hsl(var(--color-bug))",
      dark: "hsl(var(--color-dark))",
      dragon: "hsl(var(--color-dragon))",
      electric: "hsl(var(--color-electric))",
      fairy: "hsl(var(--color-fairy))",
      fighting: "hsl(var(--color-fighting))",
      fire: "hsl(var(--color-fire))",
      flying: "hsl(var(--color-flying))",
      ghost: "hsl(var(--color-ghost))",
      grass: "hsl(var(--color-grass))",
      ground: "hsl(var(--color-ground))",
      ice: "hsl(var(--color-ice))",
      normal: "hsl(var(--color-normal))",
      poison: "hsl(var(--color-poison))",
      psychic: "hsl(var(--color-psychic))",
      rock: "var(--color-rock)",
      steel: "var(--color-steel)",
      water: "var(--color-water)",

      heightShort: "hsl(var(--color-height-short))",
      heightMedium: "hsl(var(--color-height-medium))",
      heightTall: "hsl(var(--color-height-tall))",

      weightLight: "hsl(var(--color-height-short))",
      weightNormal: "hsl(var(--color-height-normal))",
      weightHeavy: "hsl(var(--color-height-heavy))",
    },
    backgroundImage: {
      "gradient-vector":
        "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
      "gradient-pokeball": "linear-gradient(180deg, #F5F5F5 50%, #FFFFFF 94.81%)",
      "gradient-vector-grey": "linear-gradient(100.59deg, #E5E5E5 0%, rgba(245, 245, 245, 0) 100%)",
      "gradient-pokeball-grey": "linear-gradient(135deg, #ECECEC 0%, #F5F5F5 100%)",
      "gradient-vector-white":
        "linear-gradient(100.84deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
      "gradient-pokeball-white":
        "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
      "gradient-pokemon-name":
        "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 76.04%)",
      "gradient-pokemon-circle":
        "linear-gradient(334.58deg, rgba(255, 255, 255, 0.35) 16.24%, rgba(255, 255, 255, 0) 44.6%)",
    },
    fontFamily: {
      sans: ["SF Pro display", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
