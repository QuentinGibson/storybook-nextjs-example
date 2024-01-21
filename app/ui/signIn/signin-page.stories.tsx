import { Meta, StoryObj } from "@storybook/react";

import SignInPage from "./signin-page";

const meta = {
  title: "Page/SignIn",
  component: SignInPage,
  decorators: [
    (Story: any) => (
      <div className="flex items-center justify-center my-10 md:w-screen">
        <Story />
      </div>
    ),
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof SignInPage>;

const socialCallbacksDefaults = {
  google: async () => {
    console.log("testing");
  },
  discord: async () => {
    console.log("testing discord");
  },
  twitch: async () => {
    console.log("testing Twitch");
  },
};

export const EmptyForm: Story = {
  args: {
    socialCallbacks: socialCallbacksDefaults,
  },
};

export const Error: Story = {
  args: {
    socialCallbacks: socialCallbacksDefaults,
  },
};
