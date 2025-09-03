import {create} from "zustand";
import {type SPELL, SPELL_NAME} from "@/сonstants/spell.ts";
import {SPELL_TO_ORBS} from "@/сonstants/spellToOrbs.ts";

type OrbsCombo = [string, string, string];

interface IUseGameStore{

    startGame: () => void,

    endGame: () => void,

    gameRunning: boolean,

    orbBindingKeys: {
        'quas': string,
        'wex': string,
        'exort': string
    },

    orbBindingCodes: {
        'quas': string,
        'wex': string,
        'exort': string
    },

    invokeBindKey: string,

    invokeBindCode: string,

    castedSpellsBindingKeys: {
        castedSpellBind1: string,
        castedSpellBind2: string
    },

    castedSpellsBindingCodes: {
        castedSpellBind1: string,
        castedSpellBind2: string
    },

    castedSpells: {
        castedSpell1: SPELL,
        castedSpell2: SPELL,
    }

    currentCombo: OrbsCombo,

    addOrbToCombo: (orb: string) => void,

    invoke: () => void,

    randomSpell: SPELL,

    generateRandomSpell: () => void,

}

const useGameStore = create<IUseGameStore>(set => ({

    startGame: () => set(state => {
        if(state.gameRunning){
            throw new Error('Game is already started');
        }
        return {gameRunning: true};
    }),

    endGame: () => set(state => {
       if(!state.gameRunning){
           throw new Error("Game isn't running");
       }

       return {gameRunning: false, currentCombo: ['','',''], castedSpells: {castedSpell1: 'noSpell', castedSpell2: 'noSpell'}};
    }),

    gameRunning: false,

    orbBindingKeys: {
        'quas': 'q',
        'wex': 'w',
        'exort': 'e'
    },

    orbBindingCodes: {
        'quas': 'KeyQ',
        'wex': 'KeyW',
        'exort': 'KeyE'
    },

    castedSpellsBindingKeys: {
        castedSpellBind1: 'd',
        castedSpellBind2: 'f',
    },

    castedSpellsBindingCodes: {
        castedSpellBind1: 'KeyD',
        castedSpellBind2: 'KeyF',
    },

    invokeBindKey: 'r',

    invokeBindCode: 'KeyR',

    castedSpells: {
        castedSpell1: 'noSpell',
        castedSpell2: 'noSpell',
    },

    currentCombo: ['', '', ''],

    addOrbToCombo: (orb: string) => set(state => ({currentCombo: [...state.currentCombo.slice(1), orb] as OrbsCombo})),

    invoke: () => {
        set(state => {
            const spellEntries = Object.entries(SPELL_TO_ORBS)

            const castedSpellEntry = spellEntries.find(([, orbsCombos]) => (orbsCombos.some(combo => (combo.join(',') === state.currentCombo.join(',')))));

            const castedSpell: SPELL = castedSpellEntry ? castedSpellEntry[0] as SPELL : 'noSpell';

            if(castedSpell === state.randomSpell){
                state.generateRandomSpell();
            }

            return state.castedSpells.castedSpell1 === 'noSpell' || state.castedSpells.castedSpell1 === castedSpell ?
                {castedSpells: {castedSpell1: castedSpell, castedSpell2: state.castedSpells.castedSpell2}}
            :
                {castedSpells: {castedSpell1: castedSpell, castedSpell2: state.castedSpells.castedSpell1}}

        })
    },

    randomSpell: 'coldSnap',

    generateRandomSpell: () => {set(state => {
        let spell: SPELL;

        const spells = Object.keys(SPELL_NAME);

        do{
            spell = spells[Math.floor(Math.random() * spells.length)] as unknown as SPELL;
        } while(spell === state.castedSpells.castedSpell2);

        return{randomSpell: spell}
    })},
}))

export default useGameStore;