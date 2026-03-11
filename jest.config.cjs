module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": [
      "babel-jest",
      {
        babelrc: false,
        configFile: false,
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
    "\\.(png|jpg|jpeg|gif|webp)$": "<rootDir>/__mocks__/fileMock.js",
    "^@theme/(.*)$": "<rootDir>/__mocks__/@theme/$1.js",
    "^@docusaurus/Link$": "<rootDir>/__mocks__/@docusaurus/Link.js",
    "^@docusaurus/useDocusaurusContext$": "<rootDir>/__mocks__/@docusaurus/useDocusaurusContext.js",
    "^@docusaurus/useBaseUrl$": "<rootDir>/__mocks__/@docusaurus/useBaseUrl.js",
    "^@site/(.*)$": "<rootDir>/$1",
  },
};
