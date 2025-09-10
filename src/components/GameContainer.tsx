import invokerImg from '@/assets/invoker/invoker.png';
import OrbsContainer from "@/components/OrbsContainer.tsx";
import SpellContainer from "@/components/SpellContainer.tsx";
import useGameStore from "@/store/gameStore.ts";
import SpellToCast from "@/components/SpellToCast.tsx";
import {useEffect, useRef, useState} from "react";


const GameContainer = () => {
    const gameRunning = useGameStore(state => state.gameRunning);
    const startGame = useGameStore(state => state.startGame);
    const endGame = useGameStore(state => state.endGame);

    const [seconds, setSeconds] = useState<number>(0);
    const [tens, setTens] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);

    const timerRef = useRef<NodeJS.Timeout | null>(null);



    useEffect(() => {
        if(running){
            timerRef.current = setInterval(() => {
                setTens(prev => {
                    if(prev === 99){
                        setSeconds(prev => prev + 1);
                        return 0;
                    }

                    return prev+1;
                });
            }, 10);
        }else{
            if(timerRef.current){
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }


        return () => {
            if(timerRef.current) clearInterval(timerRef.current)
        };
    },[running])

    const startTimer = () => {
        setRunning(true);
        timerRef.current = null;
        setTens(0);
        setSeconds(0);
    }
    const stopTimer = () => setRunning(false);



    return (
        <div className="shadow-2xl shadow-neutral-700 w-[550px] h-[600px] rounded-3xl mt-15 flex flex-col items-center justify-between py-15">
            {
                gameRunning ?
                        <div className="timer">
                            <span className="text-3xl">{seconds}</span>
                            <span className="text-xl">.</span>
                            <span className="text-xl">{tens <= 9 ? `0${tens}` : tens}</span>
                        </div>
                    :
                        <div className="w-full flex justify-center text-4xl">Invoker Game</div>
            }
            {
                gameRunning ?
                        <SpellToCast/>
                    :
                    <div className="w-full h-auto flex justify-center">
                        <img src={invokerImg} alt="Invoker Image" className="h-55" />
                    </div>
            }
            {
                gameRunning ?
                    <div className="flex flex-col items-center justify-center space-y-12">
                        <OrbsContainer/>
                    <button className="w-40 h-13 cursor-pointer text-xl border-1 border-transparent rounded-xl shadow-2xl shadow-white hover:border-white hover:shadow-lg transition-all duration-300" onClick={() => {
                        endGame();
                        stopTimer();
                    }}>Restart Game</button>
                    </div>
                    :
                    <button className="w-40 h-13 cursor-pointer text-xl border-1 border-transparent rounded-xl shadow-2xl shadow-white hover:border-white hover:shadow-lg transition-all duration-300" onClick={() => {
                        startGame();
                        startTimer();
                    }}>Start Game</button>
            }

            <div className="w-full h-auto flex justify-center">
                <SpellContainer/>
            </div>
        </div>
    );
};

export default GameContainer;