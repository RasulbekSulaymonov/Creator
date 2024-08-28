import CardDetailsPage from "../Components/main/CardDetailsPage";
import OrderCardPage from "../Components/main/OrderCardPage";
import TablesSettings from "../Components/main/TablesSettings";
import TopAppPage from "../Components/main/TopAppPage";
import PaymentConfermation from "../Components/main/TopAppPage/TabsElements/PaymentConfermation";
import TopUpDetails from "../Components/main/TopAppPage/TabsElements/TopUpDetails";
import TopUpInstruction from "../Components/main/TopAppPage/TabsElements/TopUpInstruction";
import TransactionStatus from "../Components/main/TopAppPage/TabsElements/TransactionStatus";

export const pages = [
  {
    name: "Top_App_Page",
    element: <TopAppPage />,
  },
  {
    name: "Order_Card_Page",
    element: <OrderCardPage />,
  },
  {
    name: "Card_Details_Page",
    element: <CardDetailsPage />,
  },
  {
    name: "Tables_Settings",
    element: <TablesSettings />,
  },
];

export const navbarList = [
  {
    name: "Top_App_Page",
    text: "Top App Page",
  },
  {
    name: "Order_Card_Page",
    text: "Order Card Page",
  },
  {
    name: "Card_Details_Page",
    text: "Card Details Page",
  },
  {
    name: "Tables_Settings",
    text: "Tables Settings",
  },
];

export const presets = [
  {
    color: "#69b6fa",
  },
  {
    color: "#08a820",
  },
  {
    color: "#01b876",
  },
  {
    color: "#9a64b8",
  },
  {
    color: "#9b84ff",
  },
  {
    color: "#040605",
  },
];

export const fonts = [
  {
    font: "Fixel Display",
  },
  {
    font: "Inter",
  },
  {
    font: "Montserrat",
  },
  {
    font: "Segoe UI",
  },
];

export const tabsElements = [
  {
    id: 1,
    label: "Top Up Details",
    element: <TopUpDetails />,
  },
  {
    id: 2,
    label: "Payment Confermation",
    element: <PaymentConfermation />,
  },
  {
    id: 3,
    label: "Top Up Instruction",
    element: <TopUpInstruction />,
  },
  {
    id: 4,
    label: "Transaction Status",
    element: <TransactionStatus />,
  },
];

export const cardType = [
  {
    value: "Txt",
  },
  {
    value: "Number",
  },
];

export const cards = [
  {
    value: "9860********3589",
  },
  {
    value: "9860********6975",
  },
  {
    value: "5614********2496",
  },
];

export const amounts = [
  {
    value: "50",
  },
  {
    value: "100",
  },
  {
    value: "250",
  },
  {
    value: "500",
  },
  {
    value: "1K",
  },
];
