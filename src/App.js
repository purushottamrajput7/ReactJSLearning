import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
//import Grocery from "./pages/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const Grocery = lazy(() => {
  return import("./pages/Grocery");
});

const AppLayout = () => (
  <div className="app-wrapper">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/home",
        element: <Main />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={"Loading!!.."}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={pageRouter} />);
