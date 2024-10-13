import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../components/**/*.component.yml"],
  addons: [
    {
      name: "storybook-addon-sdc",
      options: {
        sdcStorybookOptions: {
          namespace: "sdc_session"
        },
      }
    },
    "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css">
  `,
};
export default config;
