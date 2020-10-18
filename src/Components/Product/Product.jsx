import React, { useState } from "react";
import classes from "./Product.module.css";
import Carousel from "react-bootstrap/Carousel";
import product1 from "../../Assets/product1.png";
import product2 from "../../Assets/product2.png";
import product3 from "../../Assets/product3.png";
import product4 from "../../Assets/product4.png";
import flipkart from "../../Assets/flipkart.png";
import amazon from "../../Assets/amazon.png";
function Product() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className={classes.container} id="product">
      <div className={classes.divider}>
        <h5>Product</h5>
      </div>
      <div className={classes.miniDivider}></div>
      <div className={classes.productContainer}>
        <div className={classes.productLeftView}>
          <div className={classes.carouselContainer}>
            <Carousel>
              <Carousel.Item style={{ height: "430px"}}>
                <img
                  style={{ height: "430px", width:"450" }}
                  className="d-block w-100"
                  src={product1}
                  alt="prod1"
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: "430px"}}>
                <img
                  style={{ height: "430px", width:"450" }}
                  className="d-block w-100"
                  src={product2}
                  alt="prod2"
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: "430px"}}>
                <img
                  style={{ height: "430px", width:"450" }}
                  className="d-block w-100"
                  src={product3}
                  alt="prod3"
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: "430px"}}>
                <img
                  style={{ height: "430px", width:"450" }}
                  className="d-block w-100"
                  src={product4}
                  alt="prod4"
                />
              </Carousel.Item>
            </Carousel>
          </div>
           <div className={classes.broucherContainer}>
             <span title="broucher">broucher</span>
             <span title="certifications">certifications</span>
           </div> 
        </div>
        <div className={classes.productRightView}>
          <div>
            <span title="UV" className={classes.uv}>
              UV
            </span>
            <span title="DisInfection Sheild" className={classes.disinfect}>
              Disinfection Sheild
            </span>
          </div>
          <h2 className={classes.kills}>Kills 99.9% of viruses including</h2>
          <span title="cv" className={classes.cv}>
            corona virus
          </span>
          <span className={classes.specifications} title="specifications" id="specifications">
            Specifications
          </span>
          <div className={classes.productInfo}>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Color
              </span>
              <p className={classes.subProdPara}>White</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                General
              </span>
              <pre className={classes.subProdPara}>{`Types: Cleaning Tools 
Materials: ABS,Stainless Steel`}</pre>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Dimensions and Weight
              </span>
              <pre className={classes.subProdPara}>{`Product weight: 5.0000 kg
Package weight: 5.4000 kg
Product size (L x W x H): 32.50 x 29.00 x 39.50 cm / 
12.8 x 11.42 x 15.55 inches
Package size (L x W x H): 35.00 x 30.00 x 40.00 cm /
13.78 x 11.81 x 15.75 inches`}</pre>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Package Contents
              </span>
              <pre
                className={classes.subProdPara}
              >{`Package Contents: 1 x Disinfection Cabinet, 2 x 
Stainless Steel Shelf, 1 x Chinese Manua`}</pre>
            </div>
          </div>
          <span title="price" className={classes.price}>
            Price
          </span>
          <div className={classes.buy}>
            <span title="amount" className={classes.amount}>
              Rs 9,999
            </span>
            <button
              className={classes.buyBtn}
              onClick={() => setIsHidden(true)}
              style={isHidden ? { display: "none" } : {}}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      {isHidden && (
        <div className={classes.buyLinks}>
          <div className={classes.shoppingLinks}>
            <div className={classes.amazon}>
              <img src={amazon} alt="amazon" />
            </div>
            <div className={classes.flipkart}>
              <img src={flipkart} alt="flipkart" />
            </div>
          </div>
          <div className={classes.bulkorders}>
            <span title="For">For</span>
            <span title="Bulk" className={classes.bulk}>
              Bulk
            </span>
            <span title="Orders">Orders:</span>
          </div>
          <span className={classes.phone}>
            <strong>Call us:</strong> 8088954323
          </span>
          <span className={classes.email}>
            <strong>Email us:</strong> sales@steracare.com
          </span>
        </div>
      )}
    </div>
  );
}

export default Product;
