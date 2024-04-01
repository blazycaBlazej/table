import { CircleX } from "lucide-react";

export const TableError = ({ message }: { message?: string }) => {
  return (
    <>
      <div className="h-11 bg-primary-foreground"></div>
      <div
        className={
          "p-16 text-center text-muted-foreground flex flex-col justify-center items-center gap-3"
        }
      >
        <CircleX className="h-10 w-10" />
        <p>Error {message && ` - ${message}`}</p>
      </div>
    </>
  );
};
