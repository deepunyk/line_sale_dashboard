import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";
import { Report } from "@styled-icons/boxicons-solid/Report";
import { UserRectangle } from "@styled-icons/boxicons-solid/UserRectangle";
import { LogoutBoxR } from "@styled-icons/remix-fill/LogoutBoxR";

const DashNavContent = [
  {
    title: "Dashboard",
    subMenu: [],
    icon: <Dashboard />,
    route: "/home",
  },
  {
    title: "USERS",
    subMenu: [
      { title: "Upgrade Plan", route: "/home/plans" },
      { title: "Renew Plan" },
      { title: "Retailer" },
      { title: "Change Password" },
      { title: "Print Bill" },
    ],
    icon: <UserRectangle />,
  },
  {
    title: "REPORTS",
    subMenu: [
      {
        title: "Total Collection",
      },
      {
        title: "Daily Sales",
      },
      {
        title: "Sales-person wise report",
      },
      {
        title: "Product wise",
      },
      {
        title: "Retailer wise Sales",
      },
      {
        title: "Retailer wise outstanding",
      },
      {
        title: "Sales-person wise outstanding",
      },
      {
        title: "Product wise outstanding",
      },
      {
        title: "Stock",
      },
      {
        title: "Sales-person wise Ledger",
      },
    ],
    icon: <Report />,
  },
  {
    title: "Logout",
    subMenu: [],
    icon: <LogoutBoxR />,
    route: "/",
  },
];

export default DashNavContent;
