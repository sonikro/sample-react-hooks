import { AppBar, Tab, Tabs } from "@material-ui/core";
import * as React from "react";
import { useStore } from "react-hookstore";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { SquadList } from "./components/entity/SquadList";
import { Login } from "./components/Login";
import { AccountStoreInterface } from "./state/AccountStore";
import { DEFAULT_SQUAD_CONTEXT_DATA, SquadContext } from "./state/SquadContext";

export const ApplicationRoutes: React.FC = () => {
  const [account] = useStore(AccountStoreInterface);
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (
    event: React.ChangeEvent<any>,
    newValue: any
  ): void => {
    setTabValue(newValue);
  };

  if (account.isAuthenticated) {
    return (
      <Router>
        <AppBar>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="Menu">
            <Link to="/squads" onClick={() => handleTabChange({} as any, 0)}>
              <Tab label="Squads" id="tab-1" />
            </Link>
            <Link to="/tribes" onClick={() => handleTabChange({} as any, 1)}>
              <Tab label="Tribes" id="tab-2" />
            </Link>
          </Tabs>
        </AppBar>
        <Switch>
          <Route path="/squads">
            <SquadContext.Provider value={DEFAULT_SQUAD_CONTEXT_DATA}>
              <SquadList />
            </SquadContext.Provider>
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return <Login />;
  }
};
