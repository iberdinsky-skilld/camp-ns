import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../components/**/*.component.yml"],
  addons: [
    {
      name: "storybook-addon-sdc",
      options: {
        sdcStorybookOptions: {
          namespace: "umami"
        },
      }
    },
    "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
