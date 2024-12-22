import { Link } from "react-router-dom";

function VegListing(props) {
    return (
        <div className="rotator veg-listing-indicator flex-center">
            <div className="skew-correcter veg-listing">
        <div className="inner-listing">
            <div className="listing-title-cont">
                <img src={require(`../images/dolladolla.png`)}/>
                <div className="skew-correcter title-skewer">
                    <div >
                        <h1 className="listing-title small-h-pad">
                            {props.name}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="listing-info-extra">
                <div className="skew-correcter listing-info-extra-h2 flex-center">
                <h2 className="serving-size big-h-pad">{props.quantity} per</h2>

                </div>
                <div className="skew-correcter listing-info-extra-h2 flex-center">
                <h2 className="unit-price big-h-pad">
                    {props.price} $
                </h2>
                </div>
                
                
                <div className="skew-correcter title-skewer">
                    <Link key={props.productId} to={"/product/"+props.productId} className="button-unstyle listing-details-btn big-h-pad">
                    Details&#10;⮞
                    </Link>
                </div>
            </div>
        </div>
      </div>
        </div>
      
    );
  }
  
  export default VegListing;
  