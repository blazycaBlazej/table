export type TableT = {
  table: {
    getter: {
      data: any;
      currentPage: number;
      pageSize: number;
      search: string;
      headings: string[] | null;
      hiddenHeadings: string[] | null;
      hasMore: boolean | undefined;
      sorting: { column: string; order: string; key: string };
      visibleHeadings: string[] | null;
      sortHeading: { key: string; value: string }[] | undefined;
      canReset: boolean;
    };
    setter: {
      setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
      setPageSize: React.Dispatch<React.SetStateAction<number>>;
      setSearch: React.Dispatch<React.SetStateAction<string>>;
      setHeadings: React.Dispatch<React.SetStateAction<string[] | null>>;
      setHiddenHeadings: React.Dispatch<React.SetStateAction<string[] | null>>;
      setSorting: React.Dispatch<
        React.SetStateAction<{
          column: string;
          order: string;
          key: string;
        }>
      >;
      resetTable: () => void;
    };
  };
};
