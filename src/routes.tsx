import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
     //   errorElement: <ErrorPage />,
        children:[
            {index: true, element: <HomePage/>},
            {path: '/login', element: <LoginPage/>}
        ]
    }
]);

export default router;