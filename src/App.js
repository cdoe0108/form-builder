import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import styles from './styles/index.scss';
import Menu from './components/Menu/index';

const App = () => {
  // map over the routes imported here
  const renderRoutes = () => {
    return Routes.map((route, i) => (
      <Route
        exact={route.exact}
        key={i}
        path={route.path}
        component={route.component}
      />
    ));
  };
  return (
    <BrowserRouter>
      <Menu />
      <div className={styles.mainContainer}>
        <Switch>{renderRoutes()}</Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
