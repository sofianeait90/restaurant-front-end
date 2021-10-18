import OrderDelivery from "./orderDelivery";
import React, { useEffect } from "react";
const OrderPage = ({ history }) => {
  useEffect(() => {
    {
      console.log(`my props is  ${history}`);
    }
  }, []);
  return (
    <div>
      <OrderDelivery history={history} />
    </div>
  );
};

export default OrderPage;
