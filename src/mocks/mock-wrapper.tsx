import { ReactNode } from "react";
import { setLogger, QueryClient, QueryClientProvider } from "react-query";
// This React import is really needed by Jest to run the tests.
import React from "react";

type MockWrapperProps = {
  children: ReactNode;
};

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});

export const createMockWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (props: MockWrapperProps) => (
    <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
  );
};
