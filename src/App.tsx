import GameContainer from "./components/GameContainer.tsx";
import {useEffect} from "react";
import useGameStore from "./store/gameStore.ts";

function App() {

    useEffect(() => {
        const store = useGameStore.getState();

        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();

            const orbEntry = Object.entries(store.orbBindings).find(([, bindKey]) => bindKey === key);

            if (orbEntry) {
                const [orbName] = orbEntry;
                store.addOrbToCombo(orbName);
            }

        }

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);

    })

  return (
    <div className="flex flex-col items-center justify-center w-full">
        <GameContainer/>
    </div>
  )
}

export default App
