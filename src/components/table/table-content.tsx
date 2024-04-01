import { TableCell, TableRow, TableBody } from "@/components/ui/table.tsx";
import { Ban, Check } from "lucide-react";
import { TableT } from "@/types";

export const TableContent = ({ table }: TableT) => {
  const { data, visibleHeadings, pageSize, currentPage } = table.getter;
  return (
    <TableBody>
      {data &&
        data.map((item: any, index: number) => (
          <TableRow
            className="border divide-border divide-x divide-y divide-dashed even:bg-muted/30"
            key={item.name}
          >
            <TableCell>{index + 1 + pageSize * (currentPage - 1)}</TableCell>

            {visibleHeadings &&
              visibleHeadings.map((header, index) => (
                <TableCell key={index}>
                  {typeof item[header] === "string" ||
                  typeof item[header] === "number" ? (
                    item[header]
                  ) : typeof item[header] === "object" ||
                    typeof item[header] === "function" ||
                    typeof item[header] === "undefined" ||
                    typeof item[header] === "symbol" ? (
                    "error"
                  ) : Boolean(item[header]) ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Ban className="w-4 h-4" />
                  )}
                </TableCell>
              ))}
          </TableRow>
        ))}
    </TableBody>
  );
};
