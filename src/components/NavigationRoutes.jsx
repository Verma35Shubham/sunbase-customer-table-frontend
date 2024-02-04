import { Route, Routes } from "react-router-dom";
import AddCustomer from "./addCustomer/AddCustomer";
import MainBody from "./mainBody/MainBody";
import LoginPage from "./Login/LoginPage";

const routes = [
  { path: "/", element: <LoginPage/> },
  { path: "/table", element: <MainBody /> },
  
  { path: "/addCustomer", element: <AddCustomer /> },
];


const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
        {routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
      </Routes>
    </>
  )
}

export default NavigationRoutes;