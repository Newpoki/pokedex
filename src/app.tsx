import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Pokemons } from "./pokemons/pokemons";

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
      <Pokemons />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
