import { Meta, StoryFn } from "@storybook/react";
import { TableContent } from "@/components/table/table-content.tsx";

export default {
  title: "Main/TableContent",
  component: TableContent,
} as Meta;

const Template: StoryFn = (args) => (
  <div className="w-[1000px] m-auto">
    {/*@ts-ignore*/}
    <TableContent {...args} />
  </div>
);
export const WithDummyData = Template.bind({});
WithDummyData.args = {
  table: {
    getter: {
      data: [
        { name: "John", age: 30, location: "New York", active: true },
        { name: "Jane", age: 25, location: "Los Angeles", active: false },
        { name: "Mike", age: 40, location: "Chicago", active: true },
      ],
      visibleHeadings: ["name", "age", "location", "active"],
      pageSize: 10,
      currentPage: 1,
    },
  },
};
