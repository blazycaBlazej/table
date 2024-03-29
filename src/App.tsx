import { ThemeProvider } from "@/context/theme-provider.tsx";
import { Nav } from "@/components/nav.tsx";

function App() {
  return (
    <ThemeProvider>
      <div className="border-b border-border">
        <Nav />
      </div>
      <div className="m-auto max-w-7xl"></div>
    </ThemeProvider>
  );
}

export default App;
