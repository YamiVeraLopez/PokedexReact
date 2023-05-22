import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <NextUIProvider>
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </NextUIProvider>
  );
}

export default App;
