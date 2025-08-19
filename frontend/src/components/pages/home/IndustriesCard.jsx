import { MdInstallMobile, MdLocalTaxi, MdShoppingCart, MdEvent, MdHomeRepairService, MdFitnessCenter, MdLocalShipping, MdHealthAndSafety, MdElectricScooter } from "react-icons/md";
import { FaBus, FaUtensils, FaBuilding, FaUsers, FaStore, FaTruckMoving } from "react-icons/fa";

const IndustriesCard = [
  {
    id: 1,
    title: "Pickup & Delivery",
    desc: "Transform your logistics for higher efficiency and customer satisfaction with Zentronix.",
    icon: <MdInstallMobile size={40} color="orange" />,
    link: "/ Pickup_Delivery",
  },
  {
    id: 2,
    title: "Taxi Dispatch",
    desc: "Streamline ride-booking and fleet management for a smarter taxi business.",
    icon: <MdLocalTaxi size={40} color="orange" />,
    link: "/taxi-dispatch",
  },
  {
    id: 3,
    title: "On Demand",
    desc: "Empower users with instant services and real-time booking capabilities.",
    icon: <MdShoppingCart size={40} color="orange" />,
    link: "/on_demand",
  },
  {
    id: 4,
    title: "Bus Ticketing App",
    desc: "Simplify bus reservations with easy ticket booking and route management.",
    icon: <FaBus size={40} color="orange" />,
    link: "/bus-ticketing",
  },
  {
    id: 5,
    title: "Food Delivery",
    desc: "Deliver food fast and fresh with an intuitive ordering platform.",
    icon: <FaUtensils size={40} color="orange" />,
    link: "/food-delivery",
  },
  {
    id: 6,
    title: "Real Estate",
    desc: "Showcase properties and connect buyers with sellers effortlessly.",
    icon: <FaBuilding size={40} color="orange" />,
    link: "/real_state",
  },
  {
    id: 7,
    title: "Events and Ticketing",
    desc: "Manage events, sell tickets, and track attendees with ease.",
    icon: <MdEvent size={40} color="orange" />,
    link: "/Events_Ticketing",
  },
  {
    id: 8,
    title: "Social Media App",
    desc: "Engage communities with powerful sharing and networking tools.",
    icon: <FaUsers size={40} color="orange" />,
    link: "/Social_MediaApp",
  },
  {
    id: 9,
    title: "Grocery App",
    desc: "Enable users to shop groceries online with home delivery.",
    icon: <FaStore size={40} color="orange" />,
    link: "/Grocery_App",
  },
  {
    id: 10,
    title: "E-commerce",
    desc: "Build your online store with secure payments and easy navigation.",
    icon: <MdShoppingCart size={40} color="orange" />,
    link: "/Ecommerce",
  },
  {
    id: 11,
    title: "Home Services",
    desc: "Book professionals for cleaning, repair, and other home needs.",
    icon: <MdHomeRepairService size={40} color="orange" />,
    link: "/home-services",
  },
  {
    id: 12,
    title: "Fitness App",
    desc: "Track workouts, connect with trainers, and stay fit anywhere.",
    icon: <MdFitnessCenter size={40} color="orange" />,
    link: "/Fitness_App",
  },
  {
    id: 13,
    title: "Packers & Movers",
    desc: "Plan and manage relocations with reliable moving services.",
    icon: <FaTruckMoving size={40} color="orange" />,
    link: "/Packer_Movers",
  },
  {
    id: 14,
    title: "Logistics Services",
    desc: "Optimize shipments with real-time tracking and scheduling.",
    icon: <MdLocalShipping size={40} color="orange" />,
    link: "/Logistics_Services",
  },
  {
    id: 15,
    title: "Health Care App",
    desc: "Book appointments, access medical records, and consult online.",
    icon: <MdHealthAndSafety size={40} color="orange" />,
    link: "/Health_CareApp",
  },
  {
    id: 16,
    title: "e-Scooter App",
    desc: "Manage scooter rentals and rides with smart GPS tracking.",
    icon: <MdElectricScooter size={40} color="orange" />,
    link: "/e-scooter-app",
  },
];

export default IndustriesCard;
