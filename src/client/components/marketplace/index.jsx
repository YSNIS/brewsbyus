import React, { Component } from "react";
import CheckoutForm from "../stripe/CheckoutForm";
import { Elements, StripeProvider } from "react-stripe-elements";

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!");
  }

  render() {
    return (
      <>
        <h1>Marketplace</h1>
        <StripeProvider apiKey="pk_test_lh8R9ADsyCmHejuctKjXiFGu">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </>
    );
  }
}

export default Marketplace;
