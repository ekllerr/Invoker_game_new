import Spell from "./Spell.tsx";
import {ORBS_IMGS} from "@/сonstants/orbsImgs.ts";
import invoke from '@/assets/spells/invoker_invoke.png';
import useGameStore from "@/store/gameStore.ts";
import {SPELL_IMG} from "@/сonstants/splellImgs.ts";


const SpellContainer = () => {
    const orbsBindings = useGameStore(state => state.orbBindingKeys);
    const castedSpells = useGameStore(state => state.castedSpells);
    const castedSpellsBindings = useGameStore(state => state.castedSpellsBindingKeys);
    const invokeBind = useGameStore(state => state.invokeBindKey);


    return (
        <ul className="flex w-full justify-evenly">

            {
                Object.entries(orbsBindings).map(([orbName, orbBind], index) => (
                    <li key={index}><Spell spellImg={ORBS_IMGS[orbName as 'quas' | 'wex' | 'exort']} keyBind={orbBind}/></li>
                ))
            }

            <li><Spell spellImg={SPELL_IMG[castedSpells['castedSpell1']] as string} keyBind={castedSpellsBindings['castedSpellBind1']}/></li>
            <li><Spell spellImg={SPELL_IMG[castedSpells['castedSpell2']] as string} keyBind={castedSpellsBindings['castedSpellBind2']}/></li>

            <li><Spell spellImg={invoke} keyBind={invokeBind}/></li>
        </ul>
    );
};

export default SpellContainer;