import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    darkMode: {
      dark: themes.dark,
      light: themes.light,
      current: 'dark',
    },
  },

  tags: ["autodocs", "autodocs", "autodocs"]
};

export default preview;
