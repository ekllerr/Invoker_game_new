
const Spell = ({spellImg, keyBind}: {spellImg: string, keyBind: string}) => {
    return (
        <div className="w-18 h-18 relative flex items-center justify-center " style={{border: '5px groove #1d1c1c'}}>
            <span className="absolute right-0.5 top-0">{keyBind.toUpperCase()}</span>
                <img src={spellImg} alt="spell image" className="w-15 h-15 object-cover"/>
        </div>
    );
};

export default Spell;