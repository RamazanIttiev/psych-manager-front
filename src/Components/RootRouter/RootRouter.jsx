import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login.jsx";
import Layout from "../Layout/Layout.jsx";
import Register from "../Register/Register.jsx";

const RootRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Layout}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
};

export default RootRouter