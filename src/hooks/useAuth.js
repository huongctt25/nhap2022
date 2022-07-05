import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getUserInfo } from "../constant/request";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userid"]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setLoading(true);
    getUserInfo()
      .then((res) => {
        console.log(res);
        if (Object.keys(res).length !== 0 && res.constructor === Object) {
          setIsAuthenticated(true);
          setEmail(res?.email);
          setCookie("userid", res?.id);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        setIsAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, [isAuthenticated]);

  return { isAuthenticated, loading, email, setIsAuthenticated };
};
export default useAuth;
