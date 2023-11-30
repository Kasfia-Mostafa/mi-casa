import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../PropertyBought/CheckOutForm/CheckOutForm";

import { AuthContext } from "../../../../../Layout/AuthProvider/AuthProvider";
import { useContext } from "react";
import useOffered from "../../../../../Hooks/useOffered";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const Payment = () => {
  const { user } = useContext(AuthContext);

  const [propertyOffer] = useOffered();

  const userProperty = propertyOffer.filter(
    (offeredProperty) => offeredProperty.bEmail === user.email
  );
  console.log(userProperty);

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Payment
      </div>
      <div className="max-w-4xl mx-auto bg-orange-200 my-20 p-5 rounded-lg">
        <div>
          <Elements stripe={stripePromise}>
            {userProperty.map((offeredProperty) => (
              <CheckOutForm
                key={offeredProperty._id}
                offeredProperty={offeredProperty}
              ></CheckOutForm>
            ))}
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
