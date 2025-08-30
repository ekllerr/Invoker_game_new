import quas from '@/assets/orbs/invoker_quas.png';
import wex from '@/assets/orbs/invoker_wex.png';
import exort from '@/assets/orbs/invoker_exort.png';
import Orb from "./Orb.tsx";
import useGameStore from "../store/gameStore.ts";

const OrbsContainer = () => {
    const currentCombo = useGameStore(state => state.currentCombo);

    const orbsImg: {
        'quas': string,
        'wex': string,
        'exort': string
    } = {
        'quas': quas,
        'wex': wex,
        'exort': exort,
    }

    return (
        <ul className="w-full flex space-x-5">
            {
                currentCombo.map((orb: string, index: number) => (
                    <li key={index}>
                        <Orb orbImg={orbsImg[orb as 'quas' | 'wex' | 'exort']}/>
                    </li>
                ))
            }
        </ul>
    );
};

export default OrbsContainer;