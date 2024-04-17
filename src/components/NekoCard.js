import "./NekoCard.css";

function Card({product}){
    return (
        <div className="card-container">
            <img src= {product.url} className="card-img-top" alt="..." style={{width: "100%", maxHeight: "350px"}}/>
            <div className="containerNeko">
                <p>Artist Name:</p>
                <p>{product.artist_name}</p>
                    
                    
                <div className="button-wrapper">
                <button><a href={product.artist_href}>Details</a></button>
                    
                </div>
            </div>
        </div>
        
       
      );
}

export default Card;