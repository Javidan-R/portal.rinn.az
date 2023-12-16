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
        path: "organisations:id",
        element: <Organisations />,
      },
      {
        path: "services/:id",
        element:<Services/>,
      },
      {
        path: 'categories/:id',
        element: <Categories />,
        children: []
      },
      {
        path: "infomation",
        element: <Information />,
      },

      {
        path: "imei-check-service",
        element: <ImeiCheck />,
      },
      {
        path: "msqs-service",
        element: <Mcqs />,
      },
      {
        path: "imei-tariff-service",
        element: <ImeiTariff />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "issuance-special-permit-service",
        element: <IssuanceSpecialPermit />,
      },
      {
        path: "search-phone-number-service",
        element : <SearchPhoneNumber/>
      },
      {
        path: "appeal-radio-service",
        element : <AppealRadio />
      },
      {
        path: "issuing-certificate-conformity-service",
        element : <IssuingCertificateConformity />
      },
      {
        path: "postal-tracking-service",
        element : <PostalTracking />
      },
      {
        path: "permission-movement-service",
        element : <PermissionMovement />
      },
      {
        path: "search-offices-classifier-service",
        element : <SearchOfficesClassifier />
      },
      {
        path: "street-search-service",
        element : <StreetSearch />
      },
      {
        path: "detailed-information-departments-service",
        element : <DetailedInfoDep />
      },
      {
        path: "registration-radio-electronic-devices-service",
        element : <RegistrationRadio />
      },
   ],
  },
]);
