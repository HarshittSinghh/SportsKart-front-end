import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import image31 from "./IMG/asset 31.jpeg";
const SportsProducts = () => {
  return (
    <>
      <div className="instagram-story-section">
        <div className="story-container">
          {/* Individual story components */}
          <div className="story">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2DW99hogrX880K80Zqbp_4BlPXoGVqYBOQFTQM4KI-HXK3iaooNc-X33MN8lK_OFB1M&usqp=CAU"
              }
              alt="Adidas"
            />
            <p className="username">Adidas</p>
          </div>
          <div className="story">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-p4AAMqaBHKC1eqyTRmzPvlGr4VOpOWycCtnfjJv1w&s"
              }
              alt="Nike"
            />
            <p className="username">Nike</p>
          </div>

          <div className="story">
            <img
              src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover-958x575.png"
              alt="Puma"
            />
            <p className="username">Puma</p>
          </div>
          <div className="story">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkS47MC8QA5Zft3OVq_4ho07tPH5FWQ_uqGbBK4Pogau6zOxMiVtWtcyncXubNWbPtpEk&usqp=CAU"
              }
              alt="Reebok"
            />
            <p className="username">Reebok</p>
          </div>

          <div className="story">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRufsjvDqCCRFjS_TGQv3DqbI1tyWs8Ow7OSPsEO2XCzCqWHftAWQ0iFiAK536U8dJ-bU&usqp=CAU"
              alt="New Balance"
            />
            <p className="username">New Balance</p>
          </div>
          <div className="story">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN2QXtlMuocoVH8Kx7cApxGvh5VAyo8Nebxw1PfQDYzYL0gqphkdAFfOOjakRtRXLM2I&usqp=CAU"
              }
              alt="Mercedes"
            />
            <p className="username">Mercedes</p>
          </div>
          <div className="story">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQyh7tgP1TIkgtuDqrG5nG1thkrx1PticzOwhvnI0rA&s"
              alt="Sports"
            />
            <p className="username">Sports</p>
          </div>
          <div className="story">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0JMy-jLq020_X75y4Md5dUuOoR1G8uQFl9ASqqL3SA&s"
              }
              alt="SS"
            />
            <p className="username">SS</p>
          </div>
          <div className="story">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzOH2CGSXnF58dl43E4x8z_qlJnQ4xMZLii-lPLdJ2CzuSUgG9tYAESLEe2P6_gsBFU8&usqp=CAU"
              alt="NIVEA"
            />
            <p className="username">NIVEA</p>
          </div>
          <div className="story">
            <img
              src={
                "https://cdn.dribbble.com/userupload/9751802/file/original-bc8868b79e6600a5e27a7a51253fef4b.jpg?resize=752x"
              }
              alt="YONEX"
            />
            <p className="username">YONEX</p>
          </div>
          <div className="story">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GBoEZkABtItKV1rnuiPDD3qI47ouLsylcEma311HSg&s"
              alt="BMW"
            />
            <p className="username">BMW</p>
          </div>
          <div className="story">
            <img
              src={
                "https://pixellogo.com/cdn/shop/products/F1-logo_827x.png?v=1574506191"
              }
              alt="F1"
            />
            <p className="username">Formula One</p>
          </div>
          {/* Add more story components as needed */}
        </div>
      </div>
      {/* Add more story components as needed */}
      {/* <section className="sec-1">
        <div className="img-part">
          <img src={image31} alt="Background" />
          <div className="content-part">
            <h1>SHOP NOW!!</h1>
          </div>
          <div className="square"></div>
        </div>
      </section> */}
      <div className="row">
        {/* Product 1: Football */}
        <div className="col-md-4">
          <div className="card" style={{ height: "400px" }}>
            <img
              className="card-img-top"
              src="https://m.media-amazon.com/images/I/61uxKvea0OL._AC_UF894,1000_QL80_.jpg"
              alt="Football"
              style={{ height: "50%", objectFit: "cover" }}
            />
            <div className="card-body" style={{ height: "50%" }}>
              <h5 className="card-title">Football</h5>
              <p className="card-text">Price: $20.99</p>
              <p className="card-text">
                High-quality football for training and matches.
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Product 2: Basketball */}
        <div className="col-md-4">
          <div className="card" style={{ height: "400px" }}>
            <img
              className="card-img-top"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0fb9b84a6cd4707b489ae3d0129b96c_9366/3-Stripes_Rubber_Mini_Basketball_Orange_HM4971_01_standard.jpg"
              alt="Basketball"
              style={{ height: "50%", objectFit: "cover" }}
            />
            <div className="card-body" style={{ height: "50%" }}>
              <h5 className="card-title">Basketball</h5>
              <p className="card-text">Price: $25.99</p>
              <p className="card-text">
                Official NBA basketball for indoor and outdoor play.
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ height: "400px" }}>
            <img
              className="card-img-top"
              src="https://courtsidetennis.com/cdn/shop/articles/Untitled-1.png?v=1664521489"
              alt="Tennis Racket"
              style={{ height: "50%", objectFit: "cover" }}
            />
            <div className="card-body" style={{ height: "50%" }}>
              <h5 className="card-title">Tennis Racket</h5>
              <p className="card-text">Price: $89.99</p>
              <p className="card-text">
                Professional-grade tennis racket for powerful serves and precise
                shots.
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Product 4: Running Shoes */}
        <div className="col-md-4">
          <div className="card" style={{ height: "400px" }}>
            <img
              className="card-img-top"
              src="https://media.gq.com/photos/63eba1b2275d2fef78a425c2/16:9/w_1280,c_limit/nike-running-shoes-streakfly-invincible.jpg"
              alt="Running Shoes"
              style={{ height: "50%", objectFit: "cover" }}
            />
            <div className="card-body" style={{ height: "50%" }}>
              <h5 className="card-title">Running Shoes</h5>
              <p className="card-text">Price: $69.99</p>
              <p className="card-text">
                Comfortable and durable running shoes for long-distance runs.
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Product 5: Yoga Mat */}
        <div className="col-md-4">
          <div className="card" style={{ height: "400px" }}>
            <img
              className="card-img-top"
              src="https://curveit.in/wp-content/uploads/2022/03/Untitled-design-e1649839086534.png"
              alt="Yoga Mat"
              style={{ height: "50%", objectFit: "cover" }}
            />
            <div className="card-body" style={{ height: "50%" }}>
              <h5 className="card-title">Yoga Mat</h5>
              <p className="card-text">Price: $29.99</p>
              <p className="card-text">
                Non-slip yoga mat for practicing yoga poses comfortably.
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Product 6: Golf Clubs Set */}
        <div className="col-md-4">
          <div className="card" style={{ height: "400px" }}>
            <img
              className="card-img-top"
              src="https://facts.net/wp-content/uploads/2024/02/10-best-golf-club-sets-1707026693.jpg"
              alt="Golf Clubs Set"
              style={{ height: "50%", objectFit: "cover" }}
            />
            <div className="card-body" style={{ height: "50%" }}>
              <h5 className="card-title">Golf Clubs Set</h5>
              <p className="card-text">Price: $349.99</p>
              <p className="card-text">
                Complete set of golf clubs for beginners and intermediate
                players.
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="cart">
          <div className="cart-icon">
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          </div>
        </div>
      </div>
      <br />
      <br />

      <section className="sec-7" id="int">
        <center>
          <p style={{ color: "#777", fontSize: "15px" }}>
            &copy; 2024 SPORTS | DESIGNED BY SPORTS TEAM
          </p>
        </center>
      </section>
    </>
  );
};

export default SportsProducts;
