import GameContainer from "@/components/GameContainer.tsx";
import {useEffect} from "react";
import useGameStore from "@/store/gameStore.ts";
import FinishedGame from "@/components/FinishedGame.tsx";


function App() {

    const gameRunning= useGameStore(state => state.gameRunning);
    const gameFinished = useGameStore(state => state.gameFinished);
    useEffect(() => {
        const store = useGameStore.getState();


        const handleKeyDown = (e: KeyboardEvent) => {
            const code = e.code;

            if(code === 'Enter'){
                if(gameRunning) store.endGame();
                else if(gameFinished) store.setGameFinished(false);
                else{
                    store.startGame();
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
        {
            gameFinished && !gameRunning ?
                <FinishedGame/>
                :
                <GameContainer/>
        }
    </div>
  )
}

export default App
