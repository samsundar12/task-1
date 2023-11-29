import React from "react";
import "styles.css";

export const Summary = () => {
  return (
    <div className="summary">
      <div className="text-wrapper">Order summary</div>
      <div className="div">Subtotal</div>
      <div className="text-wrapper-2">$27.44</div>
      <div className="text-wrapper-3">Shipping</div>
      <div className="text-wrapper-4">$3.99</div>
      <div className="text-wrapper-5">Tax</div>
      <div className="text-wrapper-6">$2.00</div>
      <div className="text-wrapper-7">Total</div>
      <div className="text-wrapper-8">$33.43</div>
      <button className="button">
        <div className="text-wrapper-9">Continue to payment</div>
        <img className="icon" alt="Icon" src="icon.svg" />
      </button>
    </div>
  );
};
