import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Test from '../pages/test';

const route = [
  {
    path: '/',
    component: () => (<div>435</div>),
  }, {
    path: '/about',
    component: (e) => {
      console.log(e);
      return <Test/>;
    },
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
];

const loopChildren = (result = [], routes) => {
  routes.forEach((item, index) => {
    result.push(<Route key={ index + Math.random() }
                       exact={ !item.children }
                       path={ item.path }
                       render={ (props) => <item.component { ...props } children={ item.children }/>
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
  console.log(AllRoute);
  return <Router>
    <div>
      <ul>
        <Link to="/about"> Hello</Link>
      </ul>
      <ul>
        {
          AllRoute
        }
      </ul>
    </div>
  </Router>;
};
