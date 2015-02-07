'use strict'

// lib
let $          = require('jquery');<% if (includeLodash) { %>
let _          = require('lodash');<% } %><% if (includeSuperagent) { %>
let superagent = require('superagent');<% } %>

// component
let Home = require('./home/home');

$(document).ready(function() {
  // define routing
  let routes = (
    <Router.Route name='main_page' path='/' handler={Home}></Router.Route>
  );

  Router.run(routes, Router.HashLocation, function(Handler) {
    React.render(React.createFactory(Handler)(), document.getElementById('routing-component'))
  });
});
