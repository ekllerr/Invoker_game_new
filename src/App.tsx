import GameContainer from "@/components/GameContainer.tsx";
import {useEffect} from "react";
import useGameStore from "@/store/gameStore.ts";


function App() {

    const gameRunning= useGameStore(state => state.gameRunning);
    useEffect(() => {
        const store = useGameStore.getState();


        const handleKeyDown = (e: KeyboardEvent) => {
            // console.log(e.key ,'pressed');
            const code = e.code;

            if(code === 'Enter'){
                if(gameRunning) store.endGame();
                else{
                    store.startGame();
                    store.generateRandomSpell();
                }
            }

            if(!gameRunning) return;


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
