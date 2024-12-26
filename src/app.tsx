import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./home/home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data we're fetching are really stable and should only be updated once in a year
      // So we should use the maximum cache available
      gcTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
