import {ORBS_IMGS} from "@/сonstants/orbsImgs.ts";
import Orb from "@/components/Orb.tsx";
import useGameStore from "@/store/gameStore.ts";

const OrbsContainer = () => {
    const currentCombo = useGameStore(state => state.currentCombo);

    return (
        <ul className="w-full flex space-x-5">
            {
                currentCombo.map((orb: string, index: number) => (
                    <li key={index}>
                        <Orb orbImg={ORBS_IMGS[orb as 'quas' | 'wex' | 'exort']}/>
                    </li>
                ))
            }
        </ul>
    );
};

export default OrbsContainer;