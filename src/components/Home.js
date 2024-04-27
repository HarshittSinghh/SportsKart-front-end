import React from "react";
import "./style.css";
import video from "./IMG/video.mp4";
import image40 from "./IMG/asset 40.jpg";
import footballImage from "./IMG/football.jpg";
import rugbyImage from "./IMG/rugby.jpg";
import horseRaceImage from "./IMG/horse race.jpg";
import tennisImage from "./IMG/tennis.jpg";
import golfImage from "./IMG/golf.jpg";
import formulaOneImage from "./IMG/formula one.jpg";
import swimmingImage from "./IMG/swimming.jpg";
import weightImage from "./IMG/weight.jpeg";
import basketballImage from "./IMG/basketball.jpg";
import zunoImage from "./IMG/zuno.png";
import bbImage from "./IMG/bb.png";
import baithackImage from "./IMG/baithack.png";
import prepbytesImage from "./IMG/prepbytes.png";
import snapchatImage from "./IMG/snapchat.png";
import jetBrainsImage from "./IMG/jetBrains.png";
import codingNinjaImage from "./IMG/codingNinja.png";
import sawolabsImage from "./IMG/sawolabs.png";
import devfolioImage from "./IMG/devfolio.png";
import gfkImage from "./IMG/gfk.png";
import addaImage from "./IMG/adda.png";
const Home = () => {
  return (
    <div>
      <section className="video-landing">
        <video src={video} autoPlay muted loop />
        <div className="video-text">
          <h1 style={{ color: "lightblue" }}>Revolutionize Your Life</h1>
          <h2 style={{ color: "coral" }}>Unleash Potential</h2>
        </div>
      </section>
      <section className="sec-2">
        <div className="container">
          <h1 className="sec-2-text">
            <b>Thrilling Sports Showdowns: Witness the Action Live!</b>
          </h1>
          <p>
            Experience the thrill of live sports events! Witness breathtaking
            performances, cheer for your favorite teams, and immerse yourself in
            the electrifying atmosphere. Don’t miss out on these unforgettable
            moments!
          </p>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={footballImage} alt="Football" />
            <div className="text">
              <h2>Football</h2>
              <p>
                A thrilling sport that unites teams in a quest for victory,
                blending athleticism, strategy, and passion on the field,
                captivating fans worldwide
              </p>
            </div>
          </div>
          <div className="card">
            <div className="text">
              <h2>Rugby</h2>
              <p>
                A dynamic sport epitomizing strength, teamwork, and strategy,
                where players engage in fierce battles on the field, showcasing
                athleticism and camaraderie
              </p>
            </div>
            <img src={rugbyImage} alt="Rugby" />
          </div>
          <div className="card">
            <img src={horseRaceImage} alt="Horse Race" />
            <div className="text">
              <h2>Horse Riding</h2>
              <p>
                A graceful pursuit where riders and horses form a unique bond,
                navigating trails and arenas with elegance, skill, and mutual
                trust
              </p>
            </div>
          </div>
          <div className="card">
            <div className="text">
              <h2>Tennis</h2>
              <p>
                A fast-paced game of skill and precision, played on courts
                worldwide, where athletes showcase agility, power, and mental
                focus in thrilling matches
              </p>
            </div>
            <img src={tennisImage} alt="Tennis" />
          </div>
          <div className="card">
            <img src={golfImage} alt="Golf" />
            <div className="text">
              <h2>Golf</h2>
              <p>
                A serene sport played amidst picturesque landscapes, where
                players demonstrate precision, strategy, and concentration,
                aiming for the perfect shot across lush fairways and challenging
                greens.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="text">
              <h2>Formula One</h2>
              <p>
                The pinnacle of motorsport, featuring cutting-edge technology
                and lightning-fast cars racing on iconic tracks worldwide,
                thrilling fans with speed, skill, and adrenaline-fueled
                competition
              </p>
            </div>
            <img src={formulaOneImage} alt="Formula One" />
          </div>
          <div className="card">
            <img src={swimmingImage} alt="Swimming" />
            <div className="text">
              <h2>Swimming</h2>
              <p>
                A graceful sport that embraces the water, showcasing
                athleticism, endurance, and technique as swimmers glide through
                pools with fluidity, power, and determination.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="text">
              <h2>Weightlifting</h2>
              <p>
                A strength-based discipline focusing on power and precision,
                where athletes lift heavy loads with controlled technique,
                showcasing raw strength, dedication, and mental fortitude
              </p>
            </div>
            <img src={weightImage} alt="Weightlifting" />
          </div>
          <div className="card">
            <img src={basketballImage} alt="Basketball" />
            <div className="text">
              <h2>Basketball</h2>
              <p>
                A dynamic sport characterized by fast-paced action, teamwork,
                and skillful ball handling, as players aim to score points by
                shooting hoops, thrilling fans with electrifying plays and
                intense competition.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-3">
        <section className="upcoming-section">
          <div className="upcoming-item">
            <div className="background-image">
              <img src={image40} alt="Background" />
              <div className="text-overlay">
                <h3>Join Our Community Today</h3>

                <input
                  type="button"
                  value="Let's Get Started"
                  className="btn  btn-danger"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="sponsers-image">
        <div className="sponsor-container">
          <h1 className="jumping-fading-text">Our Sponsors</h1>
        </div>
        <span>
          <img src={zunoImage} alt="Zuno" width="250px" />
        </span>
        <span>
          <img src={bbImage} alt="BB" width="250px" />
        </span>
        <span>
          <img src={baithackImage} alt="Baithack" width="250px" />
        </span>
        <span>
          <img src={prepbytesImage} alt="Prepbytes" width="250px" />
        </span>
        <span>
          <img src={snapchatImage} alt="Snapchat" width="250px" />
        </span>
        <span>
          <img src={jetBrainsImage} alt="JetBrains" width="250px" />
        </span>
        <span>
          <img src={codingNinjaImage} alt="Coding Ninja" width="250px" />
        </span>
        <span>
          <img src={sawolabsImage} alt="Sawolabs" width="250px" />
        </span>
        <span>
          <img src={devfolioImage} alt="Devfolio" width="250px" />
        </span>
        <span>
          <img src={gfkImage} alt="GFK" width="250px" />
        </span>
        <span>
          <img src={addaImage} alt="Adda" width="250px" />
        </span>
      </div>
      <section className="sec-7" id="int">
        <center>
          <p style={{ color: "#777", fontSize: "15px" }}>
            &copy; 2024 SPORTS | DESIGNED BY SPORTS TEAM
          </p>
        </center>
      </section>
    </div>
  );
};
export default Home;
