module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
