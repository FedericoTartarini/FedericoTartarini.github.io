const React = require("react");

function Link({ to, href, children, ...props }) {
  return React.createElement("a", { href: to || href || "#", ...props }, children);
}

module.exports = Link;
module.exports.default = Link;
