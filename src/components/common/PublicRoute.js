import React from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const PublicRoute = ({ component: Component, ...rest }) => {
  React.useState(nprogress.start());
  React.useEffect(() => {
    nprogress.done();
    return () => nprogress.start();
  });
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
