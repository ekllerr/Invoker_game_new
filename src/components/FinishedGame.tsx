import useGameStore from "@/store/gameStore.ts";
import useTimerStore from "@/store/timerStore.ts";

const FinishedGame = () => {

    const setGameFinished = useGameStore(state => state.setGameFinished);
    const lastScore = useTimerStore(state => state.lastScore);

    return (
        <div className="shadow-2xl shadow-neutral-700 w-[550px] h-[600px] rounded-3xl mt-15 flex flex-col items-center justify-between py-15">
            <div className="text-3xl">You finished the game</div>
            <div className="text-2xl">Your score: <span className="timer">{lastScore}</span></div>
            <button className="w-40 h-13 cursor-pointer text-xl border-1 border-transparent rounded-xl shadow-2xl shadow-white hover:border-white hover:shadow-lg transition-all duration-300" onClick={() => setGameFinished(false)}>Play Again</button>
        </div>
    );
};

export default FinishedGame;