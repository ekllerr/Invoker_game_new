import {SPELL_NAME} from "@/сonstants/spell.ts";
import {SPELL_IMG} from "@/сonstants/splellImgs.ts";
import useGameStore from "@/store/gameStore.ts";

const SpellToCast = () => {

    const randomSpell = useGameStore(state => state.randomSpell);



    return (
        <div className="w-full h-auto flex justify-center">
            <div className="w-7/12 h-30  flex justify-evenly items-center border-1 border-black rounded-3xl shadow-black shadow-2xl">
                <img src={SPELL_IMG[randomSpell]} alt={randomSpell} className="w-20 h-20" />
                <div className="w-auto text-2xl text-center">
                    {SPELL_NAME[randomSpell]}
                </div>
            </div>
        </div>
    );
};

export default SpellToCast;