import { Input } from "@/components/ui/input";
import { TableT } from "@/types";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button.tsx";
import { SlidersHorizontal, X } from "lucide-react";

export const TableOptions = ({ table }: TableT) => {
  const { search, headings, hiddenHeadings, canReset } = table.getter;
  const { setSearch, setHiddenHeadings, resetTable } = table.setter;
  const toggleHeading = (heading: string) => {
    setHiddenHeadings((prev) => {
      if (!prev) return [heading];

      const index = prev.indexOf(heading);

      if (index !== -1) {
        return prev.filter((element) => element !== heading);
      } else {
        return [...prev, heading];
      }
    });
  };

  return (
    <div className="w-full py-3 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Wyszukaj..."
          className="max-w-[180px] h-8 truncate"
        />
        {canReset && (
          <div
            className="transition-colors hover:text-muted-foreground cursor-pointer flex gap-1 items-center"
            onClick={() => resetTable()}
          >
            <X className="h-4 w-4" />
            <span>Reset</span>
          </div>
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Widok</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {headings &&
            headings.length > 0 &&
            headings.map((heading) => (
              <DropdownMenuCheckboxItem
                checked={
                  !hiddenHeadings?.some(
                    (hiddenHeadings) => hiddenHeadings === heading,
                  )
                }
                onCheckedChange={() => {
                  toggleHeading(heading);
                }}
              >
                {heading}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
