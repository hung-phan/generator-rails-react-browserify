'use strict'

import $      from 'jquery';
import React  from 'react/addons';
import Router from 'react-router';
import Home   from './home/home';

// expose jQuery for jquery_ujs and React for react_ujs
window.jQuery = window.$ = $;
window.React = React;

$(document).ready(function() {
  // define routing
  let routes = (
    <Router.Route name='main_page' path='/' handler={Home}></Router.Route>
  );

  Router.run(routes, Router.HashLocation, function(Handler) {
    React.render(React.createFactory(Handler)(), document.getElementById('route'));
  });
});
