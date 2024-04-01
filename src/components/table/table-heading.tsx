import { TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import {
  ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
} from "lucide-react";
import { TableT } from "@/types";

export const TableHeading = ({ table }: TableT) => {
  const { sorting, visibleHeadings, sortHeading } = table.getter;
  const { setSorting } = table.setter;
  return (
    <TableHeader>
      <TableRow className="bg-muted hover:bg-muted">
        {visibleHeadings &&
          ["index", ...visibleHeadings].map((header) => {
            const isSortHeading = sortHeading
              ? sortHeading.some((elemment) => elemment.value === header)
              : false;

            if (isSortHeading) {
              return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <TableHead>
                      <div className="flex justify-between items-center cursor-pointer">
                        {header}
                        {sorting?.column === header ? (
                          sorting?.order === "asc" ? (
                            <ArrowUpNarrowWide className="w-4 h-4" />
                          ) : (
                            <ArrowDownWideNarrow className="w-4 h-4" />
                          )
                        ) : (
                          <ArrowDownUp className="w-4 h-4" />
                        )}
                      </div>
                    </TableHead>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      className={`${
                        sorting?.column === header && sorting?.order === "asc"
                          ? "bg-muted"
                          : ""
                      } cursor-pointer`}
                      onClick={() => {
                        const sortDeatils = sortHeading?.find(
                          (element) => element.value === header,
                        );

                        if (sortDeatils) {
                          setSorting({
                            column: sortDeatils.value,
                            key: sortDeatils.key,
                            order: "asc",
                          });
                        }
                      }}
                    >
                      <ArrowUpNarrowWide className="mr-2 w-5 h-5" />
                      Rosnąco
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`${
                        sorting?.column === header && sorting?.order === "desc"
                          ? "bg-muted"
                          : ""
                      } cursor-pointer`}
                      onClick={() => {
                        const sortDeatils = sortHeading?.find(
                          (element) => element.value === header,
                        );

                        if (sortDeatils) {
                          setSorting({
                            column: sortDeatils.value,
                            key: sortDeatils.key,
                            order: "desc",
                          });
                        }
                      }}
                    >
                      <ArrowDownWideNarrow className="mr-2 w-5 h-5" />
                      Malejąco
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            } else {
              return <TableHead className="cursor-pointer">{header}</TableHead>;
            }
          })}
      </TableRow>
    </TableHeader>
  );
};
