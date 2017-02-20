import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { observer, Provider, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import store from './store';

import {Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Header from './components/header';
import HomeHero from './components/homeHero';
import Footer from './components/footer';

import 'antd/dist/antd.css';
import './index.css';

const app = document.getElementById('app');

const NoMatch = inject('store')(function NoMatch(props) {
  return <h1>404 Page not found</h1>;
});



const Home = inject('store')(function Home(props) {
  function render(){
    const home = (
      <div>
        <HomeHero />
      </div>
    );
    return home || null;
  }
  return observer({ props, render });
});

const Main = inject('store')(function Main(props) {

  function componentWillMount(){
    console.debug('componentWillMount Main');
    try {
      // http://stackoverflow.com/a/34015469/988941
      injectTapEventPlugin();
    } catch (error) {
      console.log('injectTapEventPlugin error', error);
    }
  }
  function render(){
    const main = (
      <div>
        <Header />
        { this.props.children }
        <Footer />
        <DevTools />
      </div>
    );
    return main || null;
  }

  return observer({ props, render, componentWillMount });
});

render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={ Main }>
        <IndexRoute component={ Home }></IndexRoute>
        <Route path="/home" component={ Home } />
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>
, app);
