import { createBrowserRouter } from "react-router-dom";
// import { Role } from "../models";
import { ErrorBoundary, ProtectedRoute } from "../features";
import ErrorPage from "../pages/Error";
import Layout from "../layout/Layout";
import {
  Calculator,
  Faq,
  Home,
  ImeiCheckService,
  ImeiTariffService,
  Information,
  IssuanceSpecialPermitService,
  McqsService,
  Organisations,
} from "../pages/User";
// import Categories from "../pages/User/Categories";
// import { Checkout, DetailDescription, DetailReview, Home,Books  } from '../pages';
// import { AuthLayout } from '../features/layout/Auth';
// import { Login } from '../pages/Auth';
// import { AdminLayout } from '../features/layout/Admin';
// import { Dashboard } from '../pages/Admin';
// import { ThemeContext, ThemeProvider } from '../context/ThemeContext';

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute expectedRole={null} redirectPath="/auth/login">
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/organisations",
        element: <Organisations />,
        children: [],
      },
      {
        path: "services",
        // element:<Services/>,
        children: [],
      },
      // {
      //   path: '/categories',
      //   element: <Categories />,
      //   children: []
      // },
      {
        path: "/infomation",
        element: <Information />,
      },

      {
        path: "/imei-check-service",
        element: <ImeiCheckService />,
      },
      {
        path: "/msqs-service",
        element: <McqsService />,
      },
      {
        path: "/imei-tariff-service",
        element: <ImeiTariffService />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "/issuance-special-permit-service",
        element: <IssuanceSpecialPermitService />,
      },

      //   34
      //issuance-special-permit-service
      //   38
      // search-phone-number-service
      // appeal-radio-service

      //issuing-certificate-conformity-service

      //   1064
      // street-search-service
      // postal-tracking-service
      // 1065
      // permission-movement-service

      // 35
      // search-offices-classifier-service
      // street-search-service
      // detailed-information-departments-service
      // registration-radio-electronic-devices-service
    ],
  },
]);
