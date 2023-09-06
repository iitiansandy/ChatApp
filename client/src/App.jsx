import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
//   axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.baseURL = 'http://192.168.1.44:4040';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
