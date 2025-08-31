import GameContainer from "./components/GameContainer.tsx";
import {useEffect} from "react";
import useGameStore from "./store/gameStore.ts";


function App() {

    useEffect(() => {
        const store = useGameStore.getState();

        const handleKeyDown = (e: KeyboardEvent) => {

            const code = e.code;

            if(code === store.invokeBindCode){
                store.invoke();
            }

            const orbEntry = Object.entries(store.orbBindingCodes).find(([, bindCode]) => bindCode === code);

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
