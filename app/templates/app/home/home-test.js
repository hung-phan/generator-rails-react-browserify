'use strict';

import React from 'react/addons';
import assert from 'assert';
import { jsdom } from 'jsdom';

if (typeof document === 'undefined') {
  global.document = jsdom('<html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = {userAgent: 'node.js'};
}

describe('Home Component', () => {
  it('should bind to DOM node', () => {
    let TestUtils = React.addons.TestUtils;
    let Home = require('./home');

    let Component = TestUtils.renderIntoDocument(React.createElement(Home));
    TestUtils.findRenderedDOMComponentWithClass(Component, 'container');
  });
});

