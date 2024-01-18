import { createBrowserRouter } from "react-router-dom";
// import { Role } from "../models";
import { ErrorBoundary, ProtectedRoute } from "../features";
import ErrorPage from "../pages/Error";
import Layout from "../layout/Layout";
import {
  AppealRadio,
  Calculator,
  Categories,
  DetailedInfoDep,
  Faq,
  Home,
  ImeiCheck,
  ImeiTariff,
  Information,
  IssuanceSpecialPermit,
  IssuingCertificateConformity,
  Mcqs,
  Organisations,
  PermissionMovement,
  PostalTracking,
  RegistrationRadio,
  SearchOfficesClassifier,
  SearchPhoneNumber,
  Services,
  StreetSearch,
} from "../pages/User";
// import Categories from "../pages/User/Categories";
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
      },
      {
        path: "/services",
        element:<Services/>,
      },
      {
        path: '/categories/:id',
        element: <Categories />,
        children: []
      },
      {
        path: "/infomation",
        element: <Information />,
      },

      {
        path: "/services/imei-check-service",
        element: <ImeiCheck />,
      },
      {
        path: "/services/mcqs-service",
        element: <Mcqs />,
      },
      {
        path: "/services/imei-tariff-service",
        element: <ImeiTariff />,
      },
      {
        path: "/services/calculator",
        element: <Calculator />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "/services/issuance-special-permit-service",
        element: <IssuanceSpecialPermit />,
      },
      {
        path: "/services/search-phone-number-service",
        element : <SearchPhoneNumber/>
      },
      {
        path: "/services/appeal-radio-service",
        element : <AppealRadio />
      },
      {
        path: "/services/issuing-certificate-conformity-service",
        element : <IssuingCertificateConformity />
      },
      {
        path: "/services/postal-tracking-service",
        element : <PostalTracking />
      },
      {
        path: "/services/permission-movement-service",
        element : <PermissionMovement />
      },
      {
        path: "search-offices-classifier-service",
        element : <SearchOfficesClassifier />
      },
      {
        path: "/services/street-search-service",
        element : <StreetSearch />
      },
      {
        path: "/services/detailed-information-departments-service",
        element : <DetailedInfoDep />
      },
      {
        path: "/services/registration-radio-electronic-devices-service",
        element : <RegistrationRadio />
      },
   ],
  },
]);
