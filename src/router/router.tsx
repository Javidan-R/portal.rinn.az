/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "../features";
import { lazy } from "react";
import { ProtectedRoutes } from "../features/ProtectedRoutes";
import { PublicRoutes } from "../features/PublicRoutes";
const Layout = lazy(() => import("../layout/Layout"))
const ErrorPage = lazy(() => import("../pages/Error"))
const Home = lazy(() => import("../pages/User/Home"));
const Organisations = lazy(() => import("../pages/User/Organisations"));
const SingleOrganisation = lazy(() => import("../pages/User/Organisations/SingleOrganisation"));
const Services = lazy(() => import("../pages/User/Services"));
const SingleCategory = lazy(() => import("../pages/User/Categories/SingleCategory"));
const ImeiCheck = lazy(() => import("../pages/User/ImeiCheck"));
const Mcqs = lazy(() => import("../pages/User/Mcqs"));
const ImeiTariff = lazy(() => import("../pages/User/ImeiTariff"));
const Calculator = lazy(() => import("../pages/User/Calculator"));
const Faq = lazy(() => import("../pages/User/Faq"));
const IssuanceSpecialPermit = lazy(() => import("../pages/User/IssuanceSpecialPermit"));
const SearchPhoneNumber = lazy(() => import("../pages/User/SearchPhoneNumber"));
const AppealRadio = lazy(() => import("../pages/User/AppealRadio"));
const IssuingCertificateConformity = lazy(() => import("../pages/User/IssuingCertificateConformity"));
const PostalTracking = lazy(() => import("../pages/User/PostalTracking"));
const PermissionMovement = lazy(() => import("../pages/User/PermissionMovement"));
const SearchOfficesClassifier = lazy(() => import("../pages/User/SearchOfficesClassifier"));
const StreetSearch = lazy(() => import("../pages/User/StreetSearch"));
const DetailedInfoDep = lazy(() => import("../pages/User/DetailedInfoDep"));
const RegistrationRadio = lazy(() => import("../pages/User/RegistrationRadio"));
const NumberTransferred = lazy(() => import("../pages/User/NumberTransferred"));
const About = lazy(() => import("../pages/User/About"));
const Privacy = lazy(() => import("../pages/User/Privacy"));
const ServiceResult = lazy(() => import("../pages/User/SearchResult"));

// 
const AuthenticatedLayout = lazy(() => import("../pages/Auth/AuthenticatedLayout"));
const AuthAccount = lazy(() => import("../pages/Auth/Account/AuthAccount"));
const AuthLayout = lazy(() => import("../features/AuthLayout"));

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/services/mcqs-service",
            element: <Mcqs />,
          },
          {
            path: "list-mobile-number-service",
          },
          {
            path: "local-talks-service",
          },
        ],
      },
      {
        element: <PublicRoutes />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "/organisations",
            element: <Organisations />,
          },
          {
            path: "/organisations/:id",
            element: <SingleOrganisation />,
          },
          {
            path: "/services",
            element: <Services />,
          },
          {
            path: "/categories/:id",
            element: <SingleCategory />,
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
            path: "/faq",
            element: <Faq />,
          },
          {
            path: "/services/issuance-special-permit-service",
            element: <IssuanceSpecialPermit />,
          },
          {
            path: "/services/search-phone-number-service",
            element: <SearchPhoneNumber />,
          },
          {
            path: "/services/appeal-radio-service",
            element: <AppealRadio />,
          },
          {
            path: "/services/issuing-certificate-conformity-service",
            element: <IssuingCertificateConformity />,
          },
          {
            path: "/services/postal-tracking-service",
            element: <PostalTracking />,
          },
          {
            path: "/services/permission-movement-service",
            element: <PermissionMovement />,
          },
          {
            path: "/services/search-offices-classifier-service",
            element: <SearchOfficesClassifier />,
          },
          {
            path: "/services/street-search-service",
            element: <StreetSearch />,
          },
          {
            path: "/services/detailed-information-departments-service",
            element: <DetailedInfoDep />,
          },
          {
            path: "/services/registration-radio-electronic-devices-service",
            element: <RegistrationRadio />,
          },

          {
            path: "/services/numbers-transferred-service",
            element: <NumberTransferred />,
          },
          {
            path: "/information/22",
            element: <About />,
          },
          {
            path: "/information/23",
            element: <Privacy />,
          },
          {
            path: "/search-result",
            element: <ServiceResult />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <AuthenticatedLayout />,
      },
      {
        path: "account",
        element: <AuthAccount />
      },
    ],
  },
]);
