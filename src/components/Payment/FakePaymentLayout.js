import React from "react";

const FakePaymentLayout = () => {
  return (
    <div className="checkout__payment-form">
      <ul style={{ listStyleType: "none" }}>
        <li>
          {" "}
          <img src="./images/google-pay-buttons.png" alt="" width="20%" />
        </li>
        <li>
          {" "}
          <img src="./images/pay.png" alt="" width="60%" />
        </li>
      </ul>
    </div>
  );
};

export default FakePaymentLayout;
