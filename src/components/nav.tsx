import { BackgorundSwitcher } from "@/components/backgorund-switcher.tsx";

export const Nav = () => {
  return (
    <nav className="w-full top-0 left-0 fixed bg-background z-10 border-b border-border flex justify-center">
      <div className="max-w-7xl w-full p-3 flex justify-end">
        <BackgorundSwitcher />
      </div>
    </nav>
  );
};
