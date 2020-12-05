import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const CustomRoute = ({ component: Component, ...rest }) => {
  React.useState(nprogress.start());
  React.useEffect(() => {
    nprogress.done();
    return () => nprogress.start();
  });

  const isLogin = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default CustomRoute;
