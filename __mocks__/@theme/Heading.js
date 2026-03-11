const React = require("react");

function Heading({ as = "h2", children, ...props }) {
  return React.createElement(as, props, children);
}

module.exports = Heading;
module.exports.default = Heading;
