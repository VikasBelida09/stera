import React, { useState } from "react";
import classes from "./Product.module.css";
import Carousel from "react-bootstrap/Carousel";
import product1 from "../../Assets/product1.png";
import product2 from "../../Assets/product2.png";
import product3 from "../../Assets/product3.png";
import product4 from "../../Assets/product4.png";
import flipkart from "../../Assets/flipkart.png";
import amazon from "../../Assets/amazon.png";
import cx from "classnames";
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
              <Carousel.Item className={classes.carouselItemHeight}>
                <img className="d-block w-100" src={product1} alt="prod1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={product2} alt="prod2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={product3} alt="prod3" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={product4} alt="prod4" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className={classes.productRightView}>
          <div>
            <span className={classes.disinfect}>Stera </span>
            <span title="UV" className={classes.uv}>
              UV
            </span>
            <span title="DisInfection Sheild" className={classes.disinfect}>
              Disinfection Sheild
            </span>
          </div>
          <div>
            <span className={classes.kills}>Kills</span>
            <span title="cv" className={classes.cv}>
              corona virus
            </span>
            <span> and all other pathogens</span>
          </div>
          <div className={classes.mobileViewBuy}>
            <span title="price" className={classes.price}>
              Price
            </span>
            <span title="amount" className={classes.amount}>
              Rs 9,999
            </span>
            <div className={classes.buy}>
              <button
                className={classes.buyBtn}
                onClick={() => setIsHidden(true)}
                style={isHidden ? { display: "none" } : {}}
              >
                BUY NOW
              </button>
              <div
                className={classes.broucher}
                style={isHidden ? { marginLeft: "0px" } : {}}
              >
                <span>Broucher</span>
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

          <span
            className={classes.specifications}
            title="specifications"
            id="specifications"
          >
            Specifications
          </span>
          <div className={classes.productInfo}>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Colour
              </span>
              <p className={classes.subProdPara}>White</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Capacity
              </span>
              <p className={classes.subProdPara}>{`16L`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Body
              </span>
              <p className={classes.subProdPara}>{`ABS, Stainless Steel`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                No of UV Lamps
              </span>
              <p className={classes.subProdPara}>{`2x11 W`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Lamp
              </span>
              <p
                className={classes.subProdPara}
              >{`Philips UV-C Tube (Cab base G5)`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Product Dimensions
              </span>
              <p
                className={classes.subProdPara}
              >{`325 x 290 x 395 mm (Portable)`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Weight
              </span>
              <p className={classes.subProdPara}>{`5.7 Kg (Light Weight)`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Warranty
              </span>
              <p
                className={classes.subProdPara}
              >{`1 Year on Product & 6 Months on Lamps`}</p>
            </div>
          </div>
          <span className={classes.specifications} id="specifications">
            Features
          </span>
          <div className={classes.productInfo}>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Display Type
              </span>
              <p
                className={classes.subProdPara}
              >{`Digital display with sensitive touch panel`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Control Panel
              </span>
              <p
                className={classes.subProdPara}
              >{`5 sensitive touch buttons`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                Timer
              </span>
              <p
                className={classes.subProdPara}
              >{`Preset 3min & 5min Electronic Timer`}</p>
            </div>
            <div className={classes.subProdInfo}>
              <span title="color" className={classes.subProdSpan}>
                User UV-C Protection
              </span>
              <p
                className={classes.subProdPara}
              >{`Auto-cutoff protection when door opened`}</p>
            </div>
          </div>
          <div className={cx(classes.subProdInfo, classes.deskViewBuy)}>
            <span className={cx(classes.subProdSpan, classes.price)}>
              Price
            </span>
            <p className={cx(classes.subProdPara, classes.amount)}>Rs 9,999</p>
          </div>
          <div className={cx(classes.buy, classes.deskViewBuy)}>
            <button
              className={classes.buyBtn}
              onClick={() => setIsHidden(true)}
              style={isHidden ? { display: "none" } : {}}
            >
              BUY NOW
            </button>
            <div
              className={classes.broucher}
              style={isHidden ? { marginLeft: "0px" } : {}}
            >
              <span title="broucher">Broucher</span>
            </div>
          </div>
        </div>
      </div>
      {isHidden && (
        <div className={classes.deskViewBuy}>
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
        </div>
      )}
    </div>
  );
}

export default Product;
