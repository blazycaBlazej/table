import { TableT } from "@/types";
import { Button } from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronsLeft, ChevronRight } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TablePagination = ({ table }: TableT) => {
  const { currentPage, pageSize, hasMore } = table.getter;
  const { setCurrentPage, setPageSize } = table.setter;
  return (
    <div className="ml-auto flex gap-2 justify-end items-center py-3">
      <span className="sm:block hidden">Wiersze na stronę</span>
      <Select
        defaultValue={`${pageSize}`}
        onValueChange={(val) => setPageSize(+val)}
      >
        <SelectTrigger className="w-[65px]">
          <SelectValue placeholder="Select a page size elements" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {[5, 10, 20, 50, 100].map((item) => (
              <SelectItem value={`${item}`}>{item}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      Strona: {currentPage}
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}
      >
        <ChevronsLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        disabled={!hasMore}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};
