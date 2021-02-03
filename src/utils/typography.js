import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography({
  ...fairyGateTheme,
  googleFonts: [
    {
      name: "Karla",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Lato",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Karla", "sans-serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
  overrideThemeStyles: () => ({
    a: {
      textShadow: null,
      color: "inherit",
      background: "none",
    },
  }),
})

export const { scale, rhythm, options } = typography
export default typography
