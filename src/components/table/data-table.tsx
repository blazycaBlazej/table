import { Table } from "@/components/ui/table.tsx";
import { useEffect, useState } from "react";
import { TablePagination } from "@/components/table/table-pagination.tsx";
import { TableOptions } from "@/components/table/table-options.tsx";
import { useDebounce } from "use-debounce";
import { TableContent } from "@/components/table/table-content.tsx";
import { TableHeading } from "@/components/table/table-heading.tsx";
import { TableLoader } from "@/components/table/table-loader.tsx";
import useSWR from "swr";
import { TableNoData } from "@/components/table/table-no-data.tsx";
import { TableError } from "@/components/table/table-error.tsx";

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const data = await res.json();
    console.log(data);
    if (!!data.error_id || !data.items)
      throw new Error(data?.error_message ?? "fetch error");
    else return data;
  });

export type OptionsT = {
  pageSizeProps?: number;
  api: string;
  sortHeading?: { key: string; value: string }[];
  defaultSorting: { column: "name"; order: "asc"; key: "name" };
  hiddenHeaders?: string[];
  columnsOrder?: string[];
  excludedColumns?: string[];
};

export const DataTable = ({
  pageSizeProps = 10,
  api,
  sortHeading,
  defaultSorting,
  hiddenHeaders,
  columnsOrder,
  excludedColumns = [],
}: OptionsT) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeProps);
  const [search, setSearch] = useState("");
  const [headings, setHeadings] = useState<null | string[]>(null);
  const [hiddenHeadings, setHiddenHeadings] = useState<null | string[]>(
    hiddenHeaders ? [...hiddenHeaders] : null,
  );
  const [sorting, setSorting] = useState<{
    column: string;
    order: string;
    key: string;
  }>({
    column: defaultSorting.column,
    order: defaultSorting.order,
    key: defaultSorting.key,
  });

  const [searchApiValue] = useDebounce(search.toLowerCase(), 700);

  const { data, error, isLoading } = useSWR(
    `${api}?page=${currentPage}&pagesize=${pageSize}&order=${
      sorting.order
    }&sort=${sorting.key}${
      searchApiValue ? `&inname=${searchApiValue}` : ""
    }&site=stackoverflow`,
    fetcher,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, pageSize]);

  useEffect(() => {
    if (data && data?.items.length > 0) {
      const { items } = data;
      const allColumns = Object.keys(items[0]);
      if (columnsOrder) {
        const headingsOrder: string[] = [];

        columnsOrder.forEach((heading) => {
          if (allColumns.includes(heading)) headingsOrder.push(heading);
        });

        allColumns.forEach((heading) => {
          if (
            !headingsOrder.includes(heading) &&
            !excludedColumns?.includes(heading)
          )
            headingsOrder.push(heading);
        });
        setHeadings(headingsOrder);
      } else setHeadings(allColumns);
    }
  }, [data]);

  const visibleHeadings =
    headings && hiddenHeadings
      ? headings.filter((heading) => !hiddenHeadings.includes(heading))
      : !hiddenHeadings && headings
        ? [...headings]
        : null;

  const resetTable = () => {
    setSearch("");
    setSorting({
      column: defaultSorting.column,
      key: defaultSorting.key,
      order: defaultSorting.order,
    });
  };

  const table = {
    getter: {
      data: data?.items ? data?.items : undefined,
      currentPage,
      pageSize,
      search,
      headings,
      hiddenHeadings,
      hasMore: data?.has_more ? data.has_more : undefined,
      sorting,
      visibleHeadings,
      sortHeading,
      canReset:
        Boolean(search) ||
        sorting.column !== defaultSorting.column ||
        sorting.order !== defaultSorting.order,
    },
    setter: {
      setCurrentPage,
      setPageSize,
      setSearch,
      setHeadings,
      setHiddenHeadings,
      setSorting,
      resetTable,
    },
  };

  if (isLoading) return <TableLoader rowsNumber={pageSize ?? 10} />;

  return (
    <div className="w-full">
      <TableOptions table={table} />
      <div className="rounded-md border border-border overflow-hidden">
        {data &&
        data.items?.length > 0 &&
        hiddenHeadings?.length !== headings?.length ? (
          <Table>
            <TableHeading table={table} />
            <TableContent table={table} />
          </Table>
        ) : error ? (
          <TableError message={error?.message} />
        ) : (
          <TableNoData />
        )}
      </div>
      <TablePagination table={table} />
    </div>
  );
};
