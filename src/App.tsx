import { ThemeProvider } from "@/context/theme-provider.tsx";
import { Nav } from "@/components/nav.tsx";
import { DataTable } from "@/components/table/data-table.tsx";

function App() {
  const sortHeading = [
    {
      key: "name",
      value: "name",
    },
    { key: "popular", value: "count" },
  ];
  return (
    <ThemeProvider>
      <div className="border-b border-border">
        <Nav />
      </div>
      <div className="m-auto max-w-7xl mt-[65px] px-3">
        <DataTable
          api="https://api.stackexchange.com/2.3/tags"
          sortHeading={sortHeading}
          defaultSorting={{ column: "name", order: "asc", key: "name" }}
          hiddenHeaders={["has_synonyms", "is_moderator_only"]}
          columnsOrder={["name", "count"]}
          excludedColumns={["collectives"]}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
