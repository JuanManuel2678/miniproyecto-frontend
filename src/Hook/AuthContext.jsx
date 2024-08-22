import { createContext, useState, useEffect, useContext } from "react";
import { getUser, loginUser, registerUser, updateUser } from "../services/AuthServices.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const rutasIgnoradas = ["/", "/register"];

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onError: (data) => alert(data.response.data.message),
    onSuccess: ({ data }) => {
      localStorage.setItem("tokenLogin", data.token);
      setUser(data.user);
      navigate("/user");
    },
  });

  const registerMutation = useMutation({
   mutationKey: ['register'],
   mutationFn: registerUser,
   onError: data => alert(data.response.data.message),
   onSuccess: ({ data }) => {
     alert(data.message);
     navigate('/');
   },
 });

 const updateMutation = useMutation({
  mutationKey: ['update'],
  mutationFn: updateUser,
  onError: data => alert (data.response.data.message),
  onSuccess: ({data}) =>{ 
    alert(data.message)
    navigate('/')
  }
 })

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled: !rutasIgnoradas.includes(pathname),
  });

  const logout = () => {
    localStorage.removeItem("tokenLogin");
    setUser(null);
    navigate("/update");
  };

  useEffect(() => {
    if (data && !isLoading) {
      setUser(data);
    }
  }, [data, isLoading]);

  return (
    <AuthContext.Provider value={{ user, loginMutation, isLoading, logout, isError,  registerMutation, updateMutation }}>
      {children}
    </AuthContext.Provider>
  );
};
