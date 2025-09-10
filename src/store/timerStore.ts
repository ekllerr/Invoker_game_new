import {create} from "zustand";

interface IUseTimerStore{
    tens: number,
    seconds: number,
    running: boolean,

    lastScore: number | null,
    record: number | null,

    timerId: NodeJS.Timeout | null,

    start: () => void,
    stop: () => void,
}


const useTimerStore = create<IUseTimerStore>((set, get) => ({
    tens: 0,
    seconds: 0,
    running: false,

    timerId: null,

    lastScore: null,
    record: null,

    start: () => {
        if(get().running) throw new Error("Timer is already running");
        set({running: true});

        const id = setInterval(() => {
            set(state => {
                if(state.tens >= 99){
                    return{tens: 0, seconds: state.seconds + 1};
                }
                return {tens: state.tens + 1};
            })
        }, 10);

        set({timerId: id});
    },

    stop: () => {
        if(!get().running) throw new Error("Timer isn't running");

        set(state => {
            if(state.timerId) clearInterval(state.timerId);

            return {timerId: null, running: false};
        });

        const score = Number(`${get().seconds}.${get().tens}`)

        set(state => {
            if(state.record && state.record > score){
                return {record: score, lastScore: score};
            }
            return {lastScore: score}
        });

    },

}));

export default useTimerStore;