/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    backgroundColor: {
      transparent: "var(--transparent)",
      white: "hsl(var(--white))",
      black: "hsl(var(--black))",
      grey: "hsl(var(--grey))",
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
      "default-input": "hsl(var(--bgcolor-default-input))",
      "pressed-input": "hsl(var(--bgcolor-pressed-input))",
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
      white: "hsl(var(--white))",
      black: "hsl(var(--black))",
      grey: "hsl(var(--grey))",
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
    fontFamily: {
      sans: ["SF Pro Display", "sans"],
    },
    fontSize: {
      xs: [
        12,
        {
          lineHeight: "14.32px",
          fontWeight: "500",
        },
      ],
      sm: [
        16,
        {
          lineHeight: "19.09px",
          fontWeight: "400",
        },
      ],
      md: [
        26,
        {
          lineHeight: "31.03px",
          fontWeight: "700",
        },
      ],
      lg: [
        32,
        {
          lineHeight: "38.19px",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
