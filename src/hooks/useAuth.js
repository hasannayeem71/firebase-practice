import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
