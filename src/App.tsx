import { QueryClient, QueryClientProvider} from "react-query";
import UserList from "./components/UserList";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}

export default App;
