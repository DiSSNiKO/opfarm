import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
function ListingDetailsMain() {

    const params = useParams();
    
    const [productData,setProductData] = useState(null);
    
      useEffect(() => {
        fetch("http://localhost:8000/product?="+params.productid,
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        )
        .then(response => response.json())
        .then((data) => {
          setProductData(data)
        }
        )
      },[])


    return (
        <div className="listing-details-main">
          {
                    productData === null ? "Loading" :
<div className="cool-shadow-heavy">
            <div className="listing-details-one">
                <div className="details-image">
                    <Link id="go-back" className="cool-shadow" to={"/overview"}>
                        Go back
                    </Link>
                    <img src={require(`../images/coolasscat.jpg`)}/>
                    <h1 id='productName-title'>
                    {productData.productName} {productData.image}
                    </h1>
                    <div id="organ-stamp" className="cool-shadow-heavy">
                    <h5>
                    {productData.organic === "true" ? "ORGANIC!!" : "not :3"}
                    </h5>
                    </div>
                </div>
                
                <div className="detail-snippets">
                    <h4>From: {productData.from}</h4>
                    <h4>{productData.nutrients}</h4>
                    <h4>{productData.quantity} pcs</h4>
                    <h4>{productData.price} $</h4>
                </div>
            </div>
            <button className="button-unstyle"  id="add-to-cart">
                Place order now
            </button>
            <p id="listing-description">
            {productData.description}
                </p>
            </div>  
          }
            
        </div>
    );
  }
  
  export default ListingDetailsMain;
  