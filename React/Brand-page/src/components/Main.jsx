import flip from "../images/flipKart.png";
import shoe from "../images/shoe_image.png";
import amaz from "../images/amazon.png";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="left">
        <h1>Your Feet Deserve the Best</h1>
        <p>
          Your feet deserve the best, and we’re here to help you with our shoes.
          Your feet deserve the best, and we’re here to help you with our shoes.
        </p>
        <div className="buttons">
          <button className="shop-button">Shop Now</button>
          <button className="category-button">Category</button>
        </div>
        <p className="available-on">Available on</p>
        <div className="handle">
          <img src={flip} alt="Flipkart" />
          <img src={amaz} alt="Amazon" />
        </div>
      </div>
      <div className="right">
        <img src={shoe} alt="Shoes" />
      </div>
    </div>
  );
}

export default Main;
