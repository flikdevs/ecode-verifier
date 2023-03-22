// Type
import type { Config } from "tailwindcss";

// Plugins
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

// Others
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.slate,
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms, typography],
};
