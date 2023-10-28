import { createBrowserRouter } from "react-router-dom";
//import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./components/PrivateRoutes";
import ErrorPage from "./pages/ErrorPage";
import LoginLayout from "./pages/LoginLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        errorElement: <ErrorPage />,
        children:[
            {index: true, element: <HomePage/>},
            {path: '/login', element: <LoginPage/>}
        ]
    },
    {
        element: <PrivateRoutes />,
       // element: <Layout />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: 'home',
                element: <HomePage/>,

            }
        ]
    }
]);

export default router;