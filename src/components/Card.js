import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { Addproduct } from "../store/collectSlice";

function Card({product, onmoreclick}){
    //Indsætter dataen
    const dispatch = useDispatch();
    //Vælger hvor der skal indsættes data
    const saved = useSelector((state) => state.saved.saved)

    //Styrer hvad knappen skal gøre
    const handleSaved = () => {
        dispatch(Addproduct(product))
    }

    //console.log(saved);

    return (
       
        <div className="container">
            <div className="card">
                <div className="card-body">

                    <p className="card-title ">Artist Name: {product.artist_name}</p>
                    
                    <img src= {product.url} className="card-img-top" alt="..."/>
                    <p>Information about the artist <a href={product.artist_href}>CLICK HERE</a></p>
                    <div className="flex">
                        <button onClick={onmoreclick} className="button">
                            <span className="button-content">Get new product </span>
                        </button>
                        <button onClick={handleSaved} className="button button1">
                            <span className="button-content">Save </span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        
       
      );
}

export default Card;