import {create} from "zustand";

interface IUseGameStore{
    orbBindings: {
        'quas': string,
        'wex': string,
        'exort': string
    },

    invokeBind: string,

    currentCombo: string[],

    addOrbToCombo: (orb: string) => void,
}

const useGameStore = create<IUseGameStore>(set => ({
    orbBindings: {
        'quas': 'q',
        'wex': 'w',
        'exort': 'e'
    },

    invokeBind: 'r',

    currentCombo: ['', '', ''],

    addOrbToCombo: (orb) => set(state => ({currentCombo: [...state.currentCombo.slice(1), orb]})),
}))

export default useGameStore;
