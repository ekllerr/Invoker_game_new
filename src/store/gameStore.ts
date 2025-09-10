import {create} from "zustand";
import {type SPELL, SPELL_NAME} from "@/сonstants/spell.ts";
import {SPELL_TO_ORBS} from "@/сonstants/spellToOrbs.ts";
import useTimerStore from "@/store/timerStore.ts";

type OrbsCombo = [string, string, string];

interface IUseGameStore{

    startGame: () => void,

    endGame: () => void,

    gameFinished: boolean,

    setGameFinished: (gameFinished: boolean) => void,

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

    castedRandomSpells: SPELL[],

    record: number | null,
    lastScore: number | null,
}


const useGameStore = create<IUseGameStore>(set => ({

    startGame: () => set(state => {
        if(state.gameRunning){
            throw new Error('Game is already started');
        }

        const startTimer = useTimerStore.getState().start;

        startTimer();

        state.generateRandomSpell();




        return {gameRunning: true, gameFinished: false};
    }),

    endGame: () => set(state => {
       if(!state.gameRunning){
           throw new Error("Game isn't running");
       }

       const stopTimer = useTimerStore.getState().stop;

       stopTimer();

       return {gameRunning: false, currentCombo: ['','',''], castedSpells: {castedSpell1: 'noSpell', castedSpell2: 'noSpell'}, randomSpell: 'noSpell', castedRandomSpells: []};
    }),

    gameRunning: false,

    gameFinished: false,

    setGameFinished: (value) => set(() => ({gameFinished: value})),

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

    randomSpell: 'noSpell',

    castedRandomSpells: [],

    generateRandomSpell: () => {set(state => {
        let spell: SPELL;

        const spells = Object.keys(SPELL_NAME);

        if(state.castedRandomSpells.length === spells.length){
            state.endGame();
            return{gameRunning: false, gameFinished: true};
        }

        do{
            spell = spells[Math.floor(Math.random() * spells.length)] as unknown as SPELL;
        } while(state.castedRandomSpells.includes(spell));

        state.castedRandomSpells.push(spell);
        return{randomSpell: spell}
    })},

    lastScore: null,
    record: null,
}))

export default useGameStore;