import cocaCola from "../Images/cocaCola.jpg";
import pizzaMoza from "../Images/pizzaMoza.jpg";
import pizzaVeg from "../Images/pizzaVeg.jpg";

import SpecialItem from "./SpecialItem";
const GridSpecial = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginTop: 0, backgroundColor: "#F2F2F2" }}
    >
      <div className="row  flex-nowrap" style={{ overflowX: "scroll" }}>
        <div className="col-7" style={{ marginTop: 30 }}>
          <div className="card card-block">
            <SpecialItem image={pizzaVeg} />
          </div>
        </div>
        <div className="col-7" style={{ marginTop: 30, marginBottom: 30 }}>
          <div className="card card-block">
            <SpecialItem image={cocaCola} />
          </div>
        </div>
        <div className="col-7" style={{ marginTop: 30 }}>
          <div className="card card-block">
            <SpecialItem image={pizzaMoza} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSpecial;
