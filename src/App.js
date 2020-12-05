import React from 'react';
import 'styles/styles.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import Home from 'components/Home';
import Login from 'components/Login';
import NotFound from 'components/404';
import PrivateRoute from 'components/common/PrivateRoute';
import PublicRoute from 'components/common/PublicRoute';
import Layout from 'components/Layout';

const App = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const palletType = isDark ? 'dark' : 'light';
  const mainPrimaryColor = isDark ? '#8e44ad' : `#3867d6`;
  const mainPrimaryColorLight = isDark ? '#9b59b6' : `#4b7bec`;
  const mainSecondaryColor = `#FFFFFF`;
  const textColor = isDark ? `#FFFFFF` : `#333333`;
  const bnw = isDark ? `#FFFFFF` : `#000000`;

  // A custom theme for this app
  let theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
        light: mainPrimaryColorLight,
        textColor,
        bnw
      },
      secondary: {
        main: mainSecondaryColor
      }
    },
    typography: {
      fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`
    }
  });

  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Switch>
            <PublicRoute exact path="/signin" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/home" component={Home} />
            <PublicRoute exact path="/404" component={NotFound} />
            <PublicRoute component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
