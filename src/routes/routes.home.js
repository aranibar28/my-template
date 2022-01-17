import { ClientLayout } from "../layouts";
import { Home, Services, Projects, Contact, Error404 } from "../pages";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
  {
    path: "/projects",
    layout: ClientLayout,
    component: Projects,
  },
  {
    path: "/services",
    layout: ClientLayout,
    component: Services,
  },
  {
    path: "/contact",
    layout: ClientLayout,
    component: Contact,
  },
  {
    path: "*",
    layout: ClientLayout,
    component: Error404,
  },
];

export default routesClient;
