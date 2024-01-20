import { Meta, StoryObj } from "@storybook/react";
import Home from "./page";

const meta = {
  title: "layout/home",
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
