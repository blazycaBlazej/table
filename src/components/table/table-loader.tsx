import { Skeleton } from "@/components/ui/skeleton.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export const TableLoader = ({ rowsNumber }: { rowsNumber: number }) => {
  const rows = [];
  for (let i = 0; i < rowsNumber; i++) {
    rows.push(
      <TableRow className="w-full" key={i}>
        <TableCell className="w-full">
          <Skeleton className="h-5 w-full" />
        </TableCell>
      </TableRow>,
    );
  }

  return (
    <div className="w-full">
      <div className="w-full py-1 px-1 flex justify-between items-center">
        <Skeleton className="w-[180px] h-8 rounded-md" />
        <Skeleton className="h-10 w-10 rounded-md" />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">
                <Skeleton className="h-5 w-full" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{rows}</TableBody>
        </Table>
      </div>
      <div className="flex gap-2 justify-end m-2">
        <Skeleton className="h-10 w-10 rounded-md" />{" "}
        <Skeleton className="h-10 w-10 rounded-md" />
        <Skeleton className="h-10 w-10 rounded-md" />
      </div>
    </div>
  );
};
