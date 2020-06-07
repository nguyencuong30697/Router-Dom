import React from "react";
// import { Route, Switch } from "react-router-dom"; // <-- New code
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";
import WrapperPureComponent from "./PureLayout/WrapperPureComponent";

import ComponentRender from "./RenderComponent";
import FibonacciNumber from "./Algorithms/FibonacciNumber";
import ReduxToolkitComponent from "./ReduxToolkit/components";
import RecoilComponent from "./Recoil";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Login },
  {
    path: "/app",
    key: "APP",
    component: (props) => {
      if (!localStorage.getItem("user")) {
        alert("You need to log in to access app routes");
        return <Redirect to={"/"} />;
      }
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/app/purecomponent",
        key: "APP_PURECOMPONENT",
        exact: true,
        component: () => <WrapperPureComponent />,
      },
      {
        path: "/app/rendercomponent",
        key: "APP_RENDER_COMPONENT",
        exact: true,
        component: () => <ComponentRender />,
      },
      {
        path: "/app/jsalgorithms",
        key: "JAVASCRIPT_ALGORITHMS",
        component: (props) => {
          return <RenderRoutes {...props} />;
        },
        routes: [
          {
            path: "/app/jsalgorithms",
            key: "JAVASCRIPT_ALGORITHMS_ROOT",
            exact: true,
            component: () => <h1>JAVASCRIPT_ALGORITHMS</h1>,
          },
          {
            path: "/app/jsalgorithms/fibo",
            key: "FIBONACCI_NUMBER",
            exact: true,
            component: () => <FibonacciNumber />,
          },
        ],
      },
      {
        path: "/app/reduxtoolkit",
        key: "APP_REDUX_TOOLKIT",
        exact: true,
        component: () => <ReduxToolkitComponent />,
      },
      {
        path: "/app/recoil",
        key: "APP_RECOIL",
        exact: true,
        component: () => <RecoilComponent />,
      },
    ],
  },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => {
        return <route.component {...props} routes={route.routes} />;
      }}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
