import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./auth/login";
import AdminLayout from "./admin/particals/AdminLayout";
import Proposals from "./admin/proposal/Proposals";
import ClientDashboard from "./client/ClientDashboard";
import Register from "./admin/user/NewUser";
import ViewProduct from "./admin/product/ViewProduct";
import Products from "./admin/product/Products";
import Users from "./admin/user/Users";
import UpdateForm from "./admin/user/UpdateUser";
import View from "./admin/user/UserDetails";
import Proposaltemplete from "./admin/proposalTemplate/Proposaltemplete";
import NewProposalTemplete from "./admin/proposalTemplate/NewProposalTemplate";
import UpdateProposalTemplate from "./admin/proposalTemplate/UpdateProposalTemplate";
import ViewProposalTemplete from "./admin/proposalTemplate/ViewProposalTemplete";
import NewProduct from "./admin/product/NewProduct";
import NewRegistration from "./auth/NewRegistration.js";
// Import route names
import * as RoutesNames from "./utils/routeNames";
import UserLayout from "./client/UserLayout";
import GetProposal from "./client/proposals/GetProposal";
import ProposalInfo from "./client/proposals/ProposalInfo";
import UpdateProduct from "./admin/product/updateProduct";
import AdminHome from "./admin/home/home.js";
import Category from "./admin/Category/Category";
import NewProposal from "./admin/proposal/NewProposal";
// import AdminChat from "./chats/chat";
import Chat from "./chats/Chat.js";
import ServiceDesk from "./client/serviceDesk/ServiceDesk";
import CreateTicket from "./client/serviceDesk/NewTicket";
import ClientHome from "./client/clientHome/ClientHome.js";
import ViewTicket from "./client/serviceDesk/ViewTicket.js";
import Tickets from "./admin/Ticket/Tickets.js";
import ViewTecket from "./admin/Ticket/ViewTicket.js";
import Subscriptions from "./admin/subscription/Subscriptions.js";
import SubscriptionDetails from "./admin/subscription/SubscriptionsDetails.js";
import ProposalDetails from "./admin/proposal/ProposalDetails.js";
import SubscriptionsbyUser from "./client/Subscription/SubscriptionsbyUser.js";
import ChatSidebar from "./chats/ChatSidebar.js";
import UserProfile from "./client/UserProfile.js";
import PaymentMethods from "./client/PaymentMethod/PaymentMethod.js";
import NewSubscription from "./admin/subscription/NewSubscription.js";
import AddPaymentMethod from "./client/PaymentMethod/NewPaymentMethod.js";
import EditPaymentMethod from "./client/PaymentMethod/EditPaymentMethod.js";
import EditUserProfile from "./client/EditUserProfile.js";
import ClientSubscriptionDetails from "./client/Subscription/ClientSubscriptionDetails.js";
import ForgotPassword from "./auth/ForgotPassword.js";
import EmailTemplates from "./admin/emailTemplates/EmailTemplates.js";
import InactivityLogout from "./inactivity_logout.js"; // Import the InactivityLogout Component
import { useAuth } from "./context/AuthContext"; // Import useAuth
import { Navigate } from "react-router-dom";
import NewEmailTemplate from "./admin/emailTemplates/NewEmailTemplate.js";
import ViewEmailTemplate from "./admin/emailTemplates/ViewEmailTemplate.js";
import UpdateEmailTemplate from "./admin/proposalTemplate/UpdateProposalTemplate";

function App() {
  const router = createBrowserRouter([
    { path: RoutesNames.LOGIN, element: <Login /> },
    { path: RoutesNames.USER_LOGIN_FORMALITY, element: <NewRegistration /> },
    {
      path: "user-dashboard",
      element: (
        <>
          <UserLayout />
          <InactivityLogout />
        </>
      ),
      children: [
        {
          path: RoutesNames.USER_HOME,
          element: <ClientHome />,
        },
        {
          path: "proposal",
          element: <GetProposal />,
        },
        {
          path: "proposal-view",
          element: <ProposalInfo />,
        },
        //ServiceDesk
        {
          path: RoutesNames.SERVICE_DESK,
          element: <ServiceDesk />,
        },
        {
          path: RoutesNames.SUBSCRIPTIONS,
          element: <SubscriptionsbyUser />,
        },
        {
          path: `${RoutesNames.SUBSCRIPTION_DETAILS}/:id`,
          element: <ClientSubscriptionDetails />,
        },
        {
          path: RoutesNames.NEW_TICKET,
          element: <CreateTicket />,
        },
        {
          path: RoutesNames.VIEW_TICKET,
          element: <ViewTicket />,
        },
        {
          path: RoutesNames.USER_CHATS,
          element: <ChatSidebar />,
        },
        {
          path: "paymethod",
          element: <PaymentMethods />,
        },
        {
          path: "newpaymethod",
          element: <AddPaymentMethod />,
        },
        {
          path: `${RoutesNames.EDIT_PAY_METHOD}/:id`,
          element: <EditPaymentMethod />,
        },
        {
          path: `${RoutesNames.EDIT_USER_PROFILE}/:id`,
          element: <EditUserProfile />,
        },
        {
          path: "clientprofile",
          element: <UserProfile />,
        },
      ],
    },

    {
      path: RoutesNames.ADMIN_DASHBOARD,
      element: (
        <>
          <AdminLayout />
          <InactivityLogout />
        </>
      ),
      children: [
        //home
        { path: RoutesNames.HOME, element: <AdminHome /> },

        //Subscriptions
        { path: RoutesNames.NEW_SUBCRIPTIONS, element: <NewSubscription /> },
        { path: RoutesNames.ALL_SUBCRIPTIONS, element: <Subscriptions /> },
        {
          path: RoutesNames.VIEW_SUBCRIPTION,
          element: <SubscriptionDetails />,
        },

        //Proposals
        { path: RoutesNames.ALL_PROPOSALS, element: <Proposals /> },
        { path: RoutesNames.NEW_PROPOSAL, element: <NewProposal /> },
        {
          path: RoutesNames.VIEW_PROPOSAL,
          element: <ProposalDetails />,
        },

        //Category
        { path: RoutesNames.CATEGORYS, element: <Category /> },
        { path: RoutesNames.TICKETS, element: <Tickets /> },
        { path: RoutesNames.TICKETS_VIEW, element: <ViewTecket /> },
        {
          path: RoutesNames.NEW_PROPOSAL_TEMPLATE,
          element: <NewProposalTemplete />,
        },
        { path: RoutesNames.PROPOSAL_TEMPLATES, element: <Proposaltemplete /> },
        {
          path: RoutesNames.UPDATE_PROPOSAL_TEMPLATE,
          element: <UpdateProposalTemplate />,
        },
        {
          path: RoutesNames.VIEW_PROPOSAL_TEMPLATE,
          element: <ViewProposalTemplete />,
        },

        //Client
        { path: RoutesNames.NEW_USER, element: <Register /> },
        { path: RoutesNames.ALL_USERS, element: <Users /> },
        { path: RoutesNames.VIEW_USER, element: <View /> },
        { path: `${RoutesNames.UPDATE_USER}/:id`, element: <UpdateForm /> },

        //Email templates
        { path: RoutesNames.NEW_EMAILTEMPLATE, element: <NewEmailTemplate /> },
        { path: RoutesNames.ALL_EMAILTEMPLATES, element: <EmailTemplates /> },
        {
          path: RoutesNames.VIEW_EMAILTEMPLATE,
          element: <ViewEmailTemplate />,
        },
        {
          path: `${RoutesNames.UPDATE_EMAILTEMPLATE}/:id`,
          element: <UpdateEmailTemplate />,
        },

        //Products
        { path: RoutesNames.NEW_PRODUCT, element: <NewProduct /> },
        { path: RoutesNames.ALL_PRODUCTS, element: <Products /> },
        { path: RoutesNames.VIEW_PRODUCT, element: <ViewProduct /> },
        { path: RoutesNames.UPDATE_PRODUCT, element: <UpdateProduct /> },

        //Chat
        { path: RoutesNames.CHATS, element: <Chat /> },
      ],
    },
    { path: RoutesNames.NOT_FOUND, element: <Login /> }, // Fallback for unmatched routesNamesRoutesNames
  ]);

  return <RouterProvider router={router} />;
}

export default App;
