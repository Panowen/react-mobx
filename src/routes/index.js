import React from 'react';
import Login from '@/pages/login';
import asyncComponent from '@/components/AsyncImport';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

const state = {
  login: true,
};

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    exact: window.location.pathname === '/login',
    component: (e) => {
      if (state.login || e.location.pathname === '/login') {
        const Layout = asyncComponent(() => import('@/components/Layout'));
        return <Layout {...e}/>;
      }

      return <Redirect to={{
        pathname: '/login',
      }}/>;
    },
    route: [
      {
        path: '/about',
        component: asyncComponent(() => import('@/pages/test')),
      }, {
        path: '/topics',
        component: () => (<div>123</div>),
        route: [{
          name: 'topic A',
          path: '/topics/a',
          component: () => (<div>123</div>),
        }, {
          name: 'topic B',
          path: '/topics/asd/:id',
          component: () => (<div>123</div>),
        }],
      },
    ],
  },
];

const loopChildren = (result = [], route) => {
  route.forEach((item, index) => {
    let child = null;

    if (item.route && item.route.length) {
      child = loopChildren([], item.route);
    }
    result.push(<Route key={index + Math.random()}
                       path={item.path}
                       exact={item.exact}
                       render={(props) => <item.component children={child} {...props}>
                       </item.component>
                       }>
    </Route>);
  });
  return result;
};

const getRoutes = (route) => {
  const result = loopChildren([], route);
  return result;
};

const Allroute = getRoutes(routes);
export default () => <Router>
  <div>
    <ul>
      {
        Allroute
      }
    </ul>
  </div>
</Router>;
