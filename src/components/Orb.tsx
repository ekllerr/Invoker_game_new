

const Orb = ({orbImg}: {orbImg?: string}) => {
    console.log(orbImg)

    if(!orbImg){
        return(
            <div className="h-20 w-20 rounded-full shadow-xl shadow-black ring-1 ring-black">

            </div>
        )
    }

    return (
        <span>
            <img src={orbImg} alt="orb image" className="h-20 w-20 rounded-full shadow-xl shadow-black ring-1 ring-black" />
        </span>
    );
};

export default Orb;