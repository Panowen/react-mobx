import React from 'react';
import Login from '@/pages/login';
import asyncComponent from '@/components/AsyncComponent';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

const state = {
  login: false,
};

const route = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    needLayOut: true,
    component: (e) => {
      console.log(e.location.pathname);
      return state.login || e.location.pathname === '/login' ? <div>3333</div> : <Redirect to={{
        pathname: '/login',
      }}/>;
    },
    children: [
      {
        path: '/about',
        component: asyncComponent(() => import('@/pages/test')),
      }, {
        path: '/topics',
        component: () => (<div>123</div>),
        children: [{
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

const loopChildren = (result = [], routes) => {
  routes.forEach((item, index) => {
    result.push(<Route key={index + Math.random()}
                       exact={!item.needLayOut}
                       path={item.path}
                       render={(props) => <item.component {...props} children={item.children}/>
                       }/>);
    if (item.children && item.children.length) {
      result.concat(loopChildren(result, item.children));
    }
  });
  return result;
};

const getRoutes = (routes) => {
  const result = loopChildren([], routes);
  return result;
};

export default () => {
  const AllRoute = getRoutes(route);
  return <Router>
    <div>
      <ul>
        <Switch>
          {
            AllRoute
          }
        </Switch>
      </ul>
    </div>
  </Router>;
};
