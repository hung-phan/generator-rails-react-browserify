'use strict'

// lib

let $          = window.jQuery = window.$ = require('jquery'); // export jQuery to global env<% if (includeLodash) { %>
let _          = require('lodash');<% } %><% if (includeSuperagent) { %>
let superagent = require('superagent');<% } %>
let React      = window.React = require('react/addons');
let Router     = require('react-router');

// component
let Home = require('./home/home');

$(document).ready(function() {
  // define routing
  let routes = (
    <Router.Route name='main_page' path='/' handler={Home}></Router.Route>
  );

  Router.run(routes, Router.HashLocation, function(Handler) {
    React.render(React.createFactory(Handler)(), document.getElementById('route'));
  });
});
