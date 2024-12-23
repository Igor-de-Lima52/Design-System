import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],

  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@storybook/addon-a11y"),
    "@chromatic-com/storybook",
    "storybook-dark-mode"
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  viteFinal: (config, { configType }) => {
    if(configType === "PRODUCTION"){
      config.base = '/Design-System/'
    }
    return config
  }
};
export default config;


// "dev": "vite",
    // "build": "tsc -b && vite build",
    // "lint": "eslint .",
    // "preview": "vite preview",