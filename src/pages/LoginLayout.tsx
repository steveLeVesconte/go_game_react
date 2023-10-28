
import { Box } from "@chakra-ui/react"
//import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

const Layout =()=>{
    return(
        <>
               <h1>Look - no nav bar</h1>
        {/* <NavBar></NavBar> */}
        <Box padding={5}>
            <Outlet></Outlet>
        </Box>
        </>
    );
};

export default Layout;