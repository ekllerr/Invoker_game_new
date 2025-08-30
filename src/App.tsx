import GameContainer from "./components/GameContainer.tsx";
import {useEffect} from "react";
import useGameStore from "./store/gameStore.ts";


function App() {

    useEffect(() => {
        const store = useGameStore.getState();

        const handleKeyDown = (e: KeyboardEvent) => {

            const key = e.key.toLowerCase();

            if(key === store.invokeBind){
                store.invoke();
            }

            const orbEntry = Object.entries(store.orbBindings).find(([, bindKey]) => bindKey === key);

            if (orbEntry) {
                const [orbName] = orbEntry;
                store.addOrbToCombo(orbName);
            }

        }

        window.addEventListener('keypress', handleKeyDown);

        return () => window.removeEventListener('keypress', handleKeyDown);

    })

  return (
    <div className="flex flex-col items-center justify-center w-full">
        <GameContainer/>
    </div>
  )
}

export default App
