import "./style.css";

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
    </div>
  );
};

export default Plans;
