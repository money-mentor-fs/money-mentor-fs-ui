import React, { lazy, Suspense } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import Pace from "./app/components/Pace";
import FallBackUi from "./app/components/FallBackUI";

// const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

function App({ basename }) {
  return (
    <HashRouter basename={basename}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<FallBackUi />}>
          <Switch>
            <Route path="/home">
              <LoggedOutComponent />
            </Route>
            <Redirect to={"/home"} />
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default App;
