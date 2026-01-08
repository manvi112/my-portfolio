import chatbotImg from "../assets/chatbot-image.png";
import ecommerceImg from "../assets/ecommerce-image.png";
import invoiceImg from "../assets/invoice-image.png";

export const projects = [
  {
    id: 1,
    title: "Chatbot Interface Application",
    description:
      "A rule-based chatbot built with React, focused on message handling, conditional logic, and clean interface flow.",
    image: chatbotImg,
    stack: ["React", "JSX", "HTML/CSS"],
    demo: "#",
    github: "https://github.com/manvi112/Chatbot-Interface-Application",
  },

  {
    id: 2,
    title: "Ecommerce Web Application",
    description:
      "A React-based e-commerce app showcasing product browsing, cart management, checkout flow, and real time price updates in a clean, structured interface.",
    image: ecommerceImg,
    stack: ["React", "JSX", "HTML/CSS"],
    demo: "#",
    github: "https://github.com/manvi112/Ecommerce-Web-Application",
  },

  {
    id: 3,
    title: "Invoice Generator Web Application",
    description:
      "A simple and user friendly invoice generator for creating professional invoices quickly. It supports dynamic item entries, real time preview, and PDF download.",
    image: invoiceImg,
    stack: ["React", "JSX", "HTML/CSS"],
    demo: "#",
    github: "https://github.com/manvi112/Invoice-Generator",
  }
];