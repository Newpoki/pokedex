import { RouterDevtools } from "@/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

const RootComponent = () => {
  return (
    <>
      <Outlet />
      <RouterDevtools />
    </>
  );
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
  },
);
