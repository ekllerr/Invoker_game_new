import {type SPELL, SPELL_NAME} from "@/сonstants/spell.ts";
import {SPELL_IMG} from "@/сonstants/splellImgs.ts";

const SpellToCast = () => {
    const spells: SPELL[] = Object.keys(SPELL_NAME) as SPELL[];

    const randomSpell: SPELL = spells[Math.floor(Math.random() * spells.length)];
    // console.log(SPELL_IMG[randomSpell]);
    return (
        <div className="w-full h-auto flex justify-center items-center space-y-2">
            <img src={SPELL_IMG[randomSpell]} alt={randomSpell} className="w-20 h-20" />
            <div className="w-20 text-lg text-center">
                {SPELL_NAME[randomSpell]}
            </div>
        </div>
    );
};

export default SpellToCast;