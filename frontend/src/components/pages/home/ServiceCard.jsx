 
 import { BsPciCardSound } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaArrowsDownToPeople, FaCode } from "react-icons/fa6";
import { MdInstallMobile } from "react-icons/md";  
import { SiCodesignal } from "react-icons/si";
 
      
 const services = [
    {
      id: 1,
      title: "Mobile App Development",
      desc:
        "Custom native & cross-platform mobile apps built for performance and UX.",
      icon: <MdInstallMobile  size={40} color="orange" />,
      link: "/mobile-app-development",
    },
    {
      id: 2,
      title: "Web App Development",
      desc:
        "Robust web applications using modern stacks, optimized for scale and speed.",
      icon: <FaCode size={40} color="orange"/>,
      link: "/web-app-development",
    },
    {
      id: 3,
      title: "Website Development",
      desc:
        "Create websites that engage audiences and deliver the right business info.",
      icon: <CgWebsite size={40} color="orange" />,
      link: "/website-development",
    },
    {
      id: 4,
      title: "UI/UX Design",
      desc:
        "User-centered design solutions that increase engagement and conversions.",
      icon: <SiCodesignal size={40} color="orange" />,
      link: "/ui-ux-design",
    },
    {
      id: 5,
      title: "Staff Augmentation",
      desc:
        "Scale your team quickly with vetted developers and specialists on demand.",
      icon: <FaArrowsDownToPeople size={40} color="orange" />,
      link: "/staff-augmentation",
    },
    {
      id: 6,
      title: "Digital Marketing",
      desc:
        "SEO, PPC, content & social strategies to grow traffic and conversions.",
      icon: <BsPciCardSound size={40} color="orange" />,
      link: "/digital-marketing",
    },
  ];


  export default services;  