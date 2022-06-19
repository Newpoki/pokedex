import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};

export default config;
