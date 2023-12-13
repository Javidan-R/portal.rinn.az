import { createBrowserRouter } from "react-router-dom";
import { Role } from "../models";
import { ErrorBoundary, ProtectedRoute } from "../features";
import ErrorPage from "../pages/Error";
import Layout from "../layout/Layout";
import {Home, Organisations} from "../pages/User";
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
      <ProtectedRoute expectedRole={Role.USER} redirectPath="/auth/login">
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
        element:<Organisations/>,
        children: [],
      },
      {
        path: 'services',
        children: [],  
      },
      {
        path: '/categories',
        // element: <Categories />
        children: []
      },
    //   {
        //     path:'/infomation',
        //     element: <Information/>
        // },

     
    
    //   34
      //issuance-special-permit-service
    //   38
    // search-phone-number-service
    // appeal-radio-service
      // {
      //     path:'/imei-check-service',
      //     element :<imeiCheckService/>
      // }
       // {
      // 	path: '/msqs-service',
      // 	element: <McqsService/>
      // },
      //   {
      //     path :'/imei-tariff-service',
      //     element :<imeiTariffService
      //   },
      //issuing-certificate-conformity-service
          //   /calculator

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
      // {
      //     path:'faq',
      //     element: <Faq/>
      // }
    ],
  },
]);
