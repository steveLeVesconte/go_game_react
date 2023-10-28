import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavBar from "./NavBar";
import { Box } from "@chakra-ui/react";



const PrivateRoutes = () =>{
    const {user}=useAuth();
    if(!user)
       return
  
       <Navigate to="/login" />;

    return (
        <>
        <NavBar></NavBar>
        <Box padding={5}>
         <Outlet />
         </Box>
</>
    )

    
}

export default PrivateRoutes;