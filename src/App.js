import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "U1", name: "Max" },
  { id: "U2", name: "Manuel" },
  { id: "U3", name: "Julie" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
