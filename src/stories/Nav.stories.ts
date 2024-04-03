import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "@/components/nav.tsx";

const meta = {
  title: "Main/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {
  args: {},
};
