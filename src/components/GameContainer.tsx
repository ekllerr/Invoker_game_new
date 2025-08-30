import invokerImg from '@/assets/invoker/invoker.png';


const GameContainer = () => {
    return (
        <div className="shadow-2xl shadow-neutral-700 w-[500px] h-[600px] rounded-3xl mt-15 flex flex-col items-center justify-evenly">
            <div className="w-full flex justify-center text-4xl">Invoker Game</div>
            <div className="w-full h-auto flex justify-center">
                <img src={invokerImg} alt="Invoker Image" className="h-50" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default GameContainer;