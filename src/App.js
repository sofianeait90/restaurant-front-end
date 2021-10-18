import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./Components/navBar";
import NavBarChild from "./Components/navbarChild";
import HomePage from "./Components/HomePage";
import SignIn from "./Components/signIn";
import Rewards from "./Components/rewards";
import OrderMenu from "./Components/orderMenu";
import SpecialMenu from "./Components/specialMenu";
import Menu from "./Components/menu";
import OrderPage from "./Components/orderPage";

function App() {
  return (
    <>
      <NavBar />
      <NavBarChild />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect from="/" exact to="/home" />
        <Route path="/signIn" component={SignIn} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/orderMenu" component={OrderMenu} />
        <Route path="/specialMenu" component={SpecialMenu} />
        <Route path="/menu" component={Menu} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </>
  );
}

export default App;
