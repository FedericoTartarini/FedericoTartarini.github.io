const React = require("react");

function Layout({ title, description, children }) {
  return React.createElement(
    "div",
    {
      "data-testid": "layout",
      "data-title": title,
      "data-description": description,
    },
    children
  );
}

module.exports = Layout;
module.exports.default = Layout;
