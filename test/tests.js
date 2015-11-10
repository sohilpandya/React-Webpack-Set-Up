var t = require('tape');
var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');
var App = require('../src/js/components/Items.js');

var shallowRenderer = ReactTestUtils.createRenderer();
shallowRenderer.render(React.createElement(App));

var out = shallowRenderer.getRenderOutput();

console.log(out);
 console.log(out.props);
