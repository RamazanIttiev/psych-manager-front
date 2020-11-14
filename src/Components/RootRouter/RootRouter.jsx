import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";

const RootRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/Layout' component={Layout} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
};

export default RootRouter