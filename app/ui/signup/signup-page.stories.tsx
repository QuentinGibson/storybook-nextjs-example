import { Meta, StoryObj } from "@storybook/react";
import SignUpPage from "./signup-page";

const meta = {
  title: "Page/SignUp",
  component: SignUpPage,
} as Meta;

export default meta;

type Story = StoryObj<typeof SignUpPage>;

export const Default: Story = {
  args: {
    socialCallbacks: {
      google: async () => {
        console.log("test Google");
      },
      discord: async () => {
        console.log("test Discord");
      },
      twitch: async () => {
        console.log("test Twitch");
      },
    },
  },
};
