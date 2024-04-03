import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "@/components/nav.tsx";
import { TableLoader } from "@/components/table/table-loader.tsx";

const meta = {
  title: "Main/TableLoader",
  component: TableLoader,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableLoaderComponent: Story = {
  args: {
    rowsNumber: 10,
  },
  render: () => (
    <div className="w-[1000px] ">
      <TableLoader rowsNumber={10} />
    </div>
  ),
};
