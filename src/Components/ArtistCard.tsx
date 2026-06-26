import { useState, useEffect } from "react";

function CardData ({data}){
    if (data == null) {
        return <p>Louading....</p>
    }
    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.top_songs}</p>
        </div>
    )
}

function ArtistCard(){
    const [data, setData] = useState(null);

    useEffect(() => {
        const testData = {
            name:"Electric Universe",
            top_songs: "Bansuri, Calling for Peace",
        };
        setData(testData);
    } , [])

    return ( 
        <>
         <div className="Card">
            <CardData data={data} />;
            </div>
        </>
    )     
}

export default ArtistCard;