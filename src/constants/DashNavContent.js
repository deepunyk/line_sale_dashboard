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
      { title: "Retailer", route: "/home/retailer" },
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
        route: "/home/total-collection",
      },
      {
        title: "Daily Sales",
        route: "/home/daily-sales",
      },
      {
        title: "Stock",
        route: "/home/stock-report",
      },
      {
        title: "Sales-person-wise Sales",
        route: "/home/sales-person-wise-report",
      },
      {
        title: "Product-wise Sales",
        route: "/home/product-wise-sales-report",
      },
      {
        title: "Retailer-wise Sales",
        route: "/home/retailer-wise-sales-report",
      },
      {
        title: "Sales-person wise outstanding",
        route: "/home/sales-person-wise-outstanding-report",
      },
      {
        title: "Retailer wise outstanding",
        route: "/home/retailer-wise-outstanding-report",
      },
      {
        title: "Product wise outstanding",
        route: "/home/product-wise-outstanding-report",
      },
      {
        title: "Sales-person wise Ledger",
        route: "/home/sales-person-wise-ledger",
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
