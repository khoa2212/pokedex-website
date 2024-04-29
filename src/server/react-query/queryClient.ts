import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000, //5s * 1000 = 5000ms
    },
  },
});

export default queryClient;
