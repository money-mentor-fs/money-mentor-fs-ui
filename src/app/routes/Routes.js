import React, { Component, lazy, Suspense } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FallBackUi from "../components/FallBackUI";
import Layout from "../components/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));

class Routes extends Component {
  render() {
    return (
      <>
        <ToastContainer />
        <Suspense fallback={<FallBackUi />}>
          <Layout>
            <Switch>
              <Route path="/home" component={HomePage} />
              {/* If no match found it will be redirected to home */}
              <Redirect to="/home" />
            </Switch>
          </Layout>
        </Suspense>
      </>
    );
  }
}

export default Routes;
