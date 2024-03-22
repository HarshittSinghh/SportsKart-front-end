import React from "react";

const SportsProducts = () => {
  return (
    <>
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
            <div
              className="card-body"
              style={{ height: "50%", overflow: "auto" }}
            >
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
            <div
              className="card-body"
              style={{ height: "50%", overflow: "auto" }}
            >
              <h5 className="card-title">Basketball</h5>
              <p className="card-text">Price: $25.99</p>
              <p className="card-text">
                Official NBA basketball for indoor and outdoor play.
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Product 3: Tennis Racket */}
        <div className="col-md-4">
          <div className="card" style={{ height: "400px" }}>
            <img
              className="card-img-top"
              src="https://courtsidetennis.com/cdn/shop/articles/Untitled-1.png?v=1664521489"
              alt="Tennis Racket"
              style={{ height: "50%", objectFit: "cover" }}
            />
            <div
              className="card-body"
              style={{ height: "50%", overflow: "auto" }}
            >
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
            <div
              className="card-body"
              style={{ height: "50%", overflow: "auto" }}
            >
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
            <div
              className="card-body"
              style={{ height: "50%", overflow: "auto" }}
            >
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
            <div
              className="card-body"
              style={{ height: "50%", overflow: "auto" }}
            >
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
