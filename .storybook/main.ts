import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../app/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: { experimentalRSC: true },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
