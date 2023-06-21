import Label from "../../../Label";
import "./cardPlan.css";
import Button from "../../../Button/Button";

const CardPlan = (props) => {
  const data = props.data;

  const {
    month_free,
    one_time_plans_available,
    title,
    price,
    typePlan,
    platforms,
    features,
  } = data;

  const getTextForLabelAccount = () => {
    if (platforms.mobile === -1) {
      return `${platforms.desktop} accounts`;
    } else {
      return `${platforms.mobile} account on mobile only`;
    }
  };

  return (
    <div className="card-plan">
      <div className="card-plan__label">
        {month_free && <Label text="1 month free" />}
        <Label text="One-time plans available" type="outlined" />
      </div>
      <div className="titles">
        <h2 className="titles__h2">{title}</h2>
        <h3 className="titles__h3">
          From ${price}/{typePlan}
        </h3>

        <p className="titles__p">{getTextForLabelAccount()}</p>
      </div>
      <hr />
      <ul>
        {features.map((feature, index) => {
          return <li key={index}>{feature}</li>;
        })}
      </ul>
      <div className="card-plan__footer">
        <Button isFill>VIEW PLANS</Button>
        <div>
          <p>Terms and conditions apply.</p>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
