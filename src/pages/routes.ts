type RoutesType = {
  path: string;
  component: Promise<any>;
  auth: boolean;
}[];

const routes: RoutesType = [
  {
    path: '/',
    component: import('./home'),
    auth: false
  }
];

export default routes;
