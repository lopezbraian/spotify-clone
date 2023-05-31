import Button from "../Button/Button";
import "./style.css";

const features = [
  {
    img: "/features/image1.png",
    title: "Ad-free music listening",
    subtitle: "Enjoy uninterrupted music.",
  },
  {
    img: "/features/image2.png",
    title: "Offline playback",
    subtitle: "Save your data by listening offline.",
  },
  {
    img: "/features/image3.png",
    title: "Play everywhere",
    subtitle: "Listen on your speakers, TV, and other favorite devices.",
  },
  {
    img: "/features/image4.png",
    title: "Pay your way",
    subtitle: "Prepay with Paytm, UPI, and more.",
  },
  {
    img: "/features/image6.png",
    title: "Cancel anytime",
    subtitle: "No contracts, no commitments.",
  },
];

const Hero = () => {
  return (
    <div>
      <div className="get-premium">
        <div className="get-premium-container">
          <h1>Get Premium free for 1 month</h1>
          <h3>
            Just ₹119/month after. Debit and credit cards accepted. Cancel
            anytime.
          </h3>
          <div className="btn-container">
            <Button isFill={true}>Get started</Button>
            <Button isFill={false}>See other plans</Button>
          </div>
          <p>
            Terms and conditions apply. 1 month free not available for users who
            have already tried Premium.
          </p>
        </div>
      </div>

      <div className="features">
        <h2>The power of Premium</h2>
        <ul className="container-feature">
          {features.map((feature, index) => {
            return (
              <li className="card-feature" key={index}>
                <img src={feature.img} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.subtitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
