import "./style.css";
import CardPlan from "./components/CardPlan";

const dataPlans = [
  {
    id: 1,
    month_free: false,
    one_time_plans_available: true,
    title: "Mini",
    price: "7",
    typePlan: "day",
    platforms: {
      mobile: 1,
      desktop: 0,
    },
    features: [
      "Ad-free music listening on mobile",
      "Group session",
      "Download 30 songs on 1 mobile device",
    ],
  },
  {
    id: 2,
    month_free: true,
    one_time_plans_available: true,
    title: "Individual",
    price: "119",
    typePlan: "month",
    platforms: {
      mobile: -1,
      desktop: 1,
    },
    features: [
      "Ad-free music listening on mobile",
      "Group session",
      "Download 10k songs/devices on 5 devices",
    ],
  },
  {
    id: 3,
    month_free: true,
    one_time_plans_available: true,
    title: "Duo",
    price: "149",
    typePlan: "month",
    platforms: {
      mobile: -1,
      desktop: 2,
    },
    features: [
      "For couples who live together",
      "Ad-free music listening on mobile",
      "Group session",
      "Download 10k songs/devices on 5 devices per account",
    ],
  },
  {
    id: 4,
    month_free: true,
    one_time_plans_available: true,
    title: "Family",
    price: "179",
    typePlan: "month",
    platforms: {
      mobile: -1,
      desktop: 6,
    },
    features: [
      "For couples who live together",
      "Block explicit music",
      "Ad-free music listening on mobile",
      "Group session",
      "Download 10k songs/device on 5 devices",
    ],
  },
];

const Plans = (props) => {
  return (
    <div className="plans-container">
      <h2 className="plans-title">Pick your Premium</h2>
      <p className="plans-paragraph">
        Listen without limits on your phone, speaker, and other devices
      </p>
      <ul className="plans-icons">
        <li>
          <img src="/companies/amex.png" alt="amex" />
        </li>
        <li>
          <img src="/companies/dinners.png" alt="dinners" />
        </li>
        <li>
          <img src="/companies/mastercard.png" alt="mastercard" />
        </li>
        <li>
          <img src="/companies/visa.png" alt="visa" />
        </li>
        <li>
          <img src="/companies/paytm.png" alt="visa" />
        </li>
        <li>
          <img src="/companies/upi.png" alt="visa" />
        </li>
      </ul>
      <div className="plans-list">
        {dataPlans.map((data) => (
          <CardPlan key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
