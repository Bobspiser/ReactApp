import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NekoCard from './NekoCard';

const Saved = () => {
    //Indstiller som et tomt Array
    const productsSaved = useSelector((state) => state.saved.saved)

    //Først tjekker om Arrayet er tomt ellers viser den elementet på skærmen
    return (
        <div>
            {productsSaved.length > 0 ? (
            productsSaved.map((product) => <NekoCard key={product.url} product={product} />)
        ) : (
          <p style={{ textAlign: "center" }}>Du har ingen favoritter endnu.</p>
        )}
        </div>
    )
};

export default Saved;