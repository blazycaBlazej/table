import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button.tsx";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Main/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },

    size: {
      control: { type: "radio" },
      options: ["default", "sm", "lg", "icon"],
    },
  },
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantDefault: Story = {
  args: {
    variant: "default",
    children: "button",
  },
};

export const VariantDestructive: Story = {
  args: {
    variant: "destructive",
    children: "button",
  },
};

export const VariantOutline: Story = {
  args: {
    variant: "outline",
    children: "button",
  },
};

export const VariantSecondary: Story = {
  args: {
    variant: "secondary",
    children: "button",
  },
};
export const VariantGhost: Story = {
  args: {
    variant: "ghost",
    children: "button",
  },
};
export const VariantLink: Story = {
  args: {
    variant: "link",
    children: "button",
  },
};

export const SizeDefault: Story = {
  args: {
    size: "default",
    children: "button",
  },
};
export const SizeIcon: Story = {
  args: {
    size: "icon",
    children: "button",
  },
};
export const SizeLarge: Story = {
  args: {
    size: "lg",
    children: "button",
  },
};

export const SizeSmall: Story = {
  args: {
    size: "sm",
    children: "button",
  },
};
