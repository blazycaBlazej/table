import type { Meta, StoryFn } from "@storybook/react";
import { TableOptions } from "@/components/table/table-options.tsx";

const meta: Meta = {
  title: "Main/TableOptions",
  component: TableOptions,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type TableOptionsStoryArgs = {
  table: {
    setter: any;
    getter: {
      search: string;
      headings: string[];
      hiddenHeadings: null | string[];
      canReset: boolean;
    };
  };
};

export const TableOptionsComponent: StoryFn<TableOptionsStoryArgs> = (
  args: any,
) => (
  <div className="w-[1000px] m-auto">
    <TableOptions table={args.table} />
  </div>
);

TableOptionsComponent.args = {
  table: {
    setter: {},
    getter: {
      search: "xd",
      headings: ["xd"],
      hiddenHeadings: null,
      canReset: true,
    },
  },
};
