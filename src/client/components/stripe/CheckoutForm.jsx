require("@babel/polyfill");

import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });

    const url = process.env.API_URL;

    let response = await fetch(`${url}/api/stripe/preauth`, {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stripeToken: token.id,
        userId: 1,
        beerTypeId: 1
      })
    });

    if (response.ok) console.log("Purchase Complete!");
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
