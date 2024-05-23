import Dashboard from '../views/Dashboard/Dashboard';
import {DASHBOARD_PATH
} from '../constants/routePaths';

const routes = [
  
  {
    path: DASHBOARD_PATH,
    component: Dashboard,
    exact: true
  },
];

export default routes;
