import { Routes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // The fetched data in this App aren't updated a lot, so we can assume that we want to cache them
        staleTime: 60000 * 24,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
