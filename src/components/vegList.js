import VegListing from "./vegListing";
import { useState, useEffect } from "react";



function VegList() {
  const [farmData,setFarmData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/overview",
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
    .then(response => response.json())
    .then((data) => {
      setFarmData(data)
    }
    )
  },[])

    return (
      <div className="veg-list">
        {
          farmData.length === 0 ? "Loading" : farmData.map((el, indx) => {
          
          return <VegListing name = {farmData[indx].productName} price={farmData[indx].price} quantity = {farmData[indx].quantity} productId = {farmData[indx].id}/>})
        }
      </div>
    );
  }
  
  export default VegList;
  