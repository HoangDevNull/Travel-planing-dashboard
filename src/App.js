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
import Posts from 'components/Posts';
import Users from 'components/Users';
import Login from 'components/Login';
import NotFound from 'components/404';
import PrivateRoute from 'components/common/PrivateRoute';
import PublicRoute from 'components/common/PublicRoute';
import Layout from 'components/Layout';
import AllPosts from 'components/ViewAllPost';
import PostDetail from 'components/PostDetail';

const App = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const palletType = isDark ? 'dark' : 'light';
  const mainPrimaryColor = isDark ? '#a67dff' : `#3867d6`;
  const mainPrimaryColorLight = isDark ? '#9b59b6' : `#4b7bec`;
  const mainSecondaryColor = `#FFFFFF`;
  const textColor = isDark ? `#FFFFFF` : `#7f8c8d`;
  const bnw = isDark ? `#FFFFFF` : `#000000`;
  const paperBg = isDark ? '#2a2d3d' : '#fff';
  const bodyBackground = isDark ? '#222431' : '#fafafa';
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
      },
      background: {
        paper: paperBg,
        default: bodyBackground
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
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/all-posts" component={AllPosts} />
            <PrivateRoute exact path="/post/:id" component={PostDetail} />
            <PrivateRoute exact path="/users" component={Users} />
            <PublicRoute exact path="/404" component={NotFound} />
            <PublicRoute component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
