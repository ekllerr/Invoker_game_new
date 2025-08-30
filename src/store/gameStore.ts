import {create} from "zustand";
import type {SPELLS} from "../Constants/spells.ts";

interface IUseGameStore{
    orbBindings: {
        'quas': string,
        'wex': string,
        'exort': string
    },

    invokeBind: string,

    castedSpellsBindings: {
        castedSpellBind1: string,
        castedSpellBind2: string
    },

    castedSpells: {
        castedSpell1: SPELLS,
        castedSpell2: SPELLS,
    }

    currentCombo: string[],

    addOrbToCombo: (orb: string) => void,
}

const useGameStore = create<IUseGameStore>(set => ({
    orbBindings: {
        'quas': 'q',
        'wex': 'w',
        'exort': 'e'
    },

    castedSpellsBindings: {
        castedSpellBind1: 'd',
        castedSpellBind2: 'f',
    },

    castedSpells: {
        castedSpell1: 'noSpell',
        castedSpell2: 'noSpell',
    },

    invokeBind: 'r',


    currentCombo: ['', '', ''],

    addOrbToCombo: (orb) => set(state => ({currentCombo: [...state.currentCombo.slice(1), orb]})),
}))

export default useGameStore;
