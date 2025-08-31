import invokerImg from '@/assets/invoker/invoker.png';
import OrbsContainer from "@/components/OrbsContainer.tsx";
import SpellContainer from "@/components/SpellContainer.tsx";
import useGameStore from "@/store/gameStore.ts";


const GameContainer = () => {
    const gameRunning = useGameStore(state => state.gameRunning);
    const startGame = useGameStore(state => state.startGame);

    return (
        <div className="shadow-2xl shadow-neutral-700 w-[550px] h-[600px] rounded-3xl mt-15 flex flex-col items-center justify-evenly">
            <div className="w-full flex justify-center text-4xl">Invoker Game</div>
            <div className="w-full h-auto flex justify-center">
                <img src={invokerImg} alt="Invoker Image" className="h-40" />
            </div>
            {
                gameRunning ?
                    <div>
                        <OrbsContainer/>
                    </div>
                    :
                    <button className="w-40 h-13 cursor-pointer text-xl border-1 border-transparent rounded-xl shadow-2xl shadow-white hover:border-white hover:shadow-lg transition-all duration-300" onClick={() => startGame()}>Start Game</button>
            }

            <div className="w-full h-auto flex justify-center">
                <SpellContainer/>
            </div>
        </div>
    );
};

export default GameContainer;