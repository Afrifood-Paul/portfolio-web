import { MdHome } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaSdCard } from "react-icons/fa6";
import { RiExportFill } from "react-icons/ri";
import { HiServer } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { IoHeadsetSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TfiCss3 } from "react-icons/tfi";
import {
  TbBrandBootstrap,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTailwind,
} from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallThin } from "react-icons/pi";
import { Link } from "react-scroll";

export const navItems = [
  {
    label: (
      <Link
        activeClass="active"
        to="intro"
        smooth={true}
        offset={0}
        duration={500}
      >
        Home
      </Link>
    ),

    icon: <MdHome className="active" />,
  },
  {
    label: (
      <Link to="intro" spy={true} smooth={true} offset={720} duration={200}>
        About
      </Link>
    ),
    href: "#about",
    icon: <IoPerson />,
  },

  {
    label: (
      <Link to="resume" spy={true} smooth={true} offset={40} duration={500}>
        Resume
      </Link>
    ),
    href: "#resume",
    icon: <FaSdCard />,
  },
  {
    label: (
      <Link to="portfolio" spy={true} smooth={true} offset={40} duration={500}>
        Portfolio
      </Link>
    ),
    href: "#portfolio",
    icon: <RiExportFill />,
  },
  {
    label: (
      <Link to="contact" spy={true} smooth={true} offset={40} duration={500}>
        Contact
      </Link>
    ),
    href: "#",
    icon: <MdContactMail />,
  },
];

export const aboutMe = [
  {
    data: "LinkedIn: Adebayo Opeyemi Paul",
    link: "https://www.linkedin.com/in/adebayo-opeyemi-paul-886147270?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTMo%2FQbzEQTGS3Du66MKQcg%3D%3D",
  },
  {
    data: "Phone: +2347016367643",
    link: "tel:+2347016367643",
  },
  {
    data: "Email: docpaul2016@gmail.com",
    link: "mailto:docpaul2016@gmail.com",
  },
];

export const fact = [
  {
    icons1: <BsEmojiSmile />,
    title1: "232",
    value1: " Happy Clients",
    subvalue1: "consequuntur quae",

    icons2: <GoProjectSymlink />,
    title2: "242",
    value2: " Projects",
    subvalue2: "consequuntur quae",

    icons3: <IoHeadsetSharp />,
    title3: "1465",
    value3: " Hours Of Support",
    subvalue3: "consequuntur quae",

    icons4: <BsPeopleFill />,
    title4: "272",
    value4: " Hard Workers",
    subvalue4: "consequuntur quae",
  },
];

export const service = [
  {
    icons1: <AiOutlineHtml5 />,
    title1: "Lorem Ipsum",
    value1:
      " Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    icons2: <TfiCss3 />,
    title2: "Lorem Ipsum",
    value2:
      " Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",

    icons3: <TbBrandJavascript />,
    title3: "Dolor Sitema",
    value3:
      " Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",

    icons4: <TbBrandReact />,
    title4: "Dolor Sitema2",
    value4:
      " Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",

    icons5: <TbBrandBootstrap />,
    title5: "Dolor Sitema2",
    value5:
      " Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",

    icons6: <TbBrandTailwind />,
    title6: "Dolor Sitema2",
    value6:
      " Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
  },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const contact = [
  {
    icons1: (
      <div className="bg-[#d1eaf6] hover:bg-[#149ddd] text-[#149ddd] hover:text-white p-2 rounded-full">
        <CiLocationOn />
      </div>
    ),
    title1: "Location:",
    value1: "Ibadan Airport, Oyo State Nigeria",

    icons2: (
      <div className="bg-[#d1eaf6] hover:bg-[#149ddd] text-[#149ddd] hover:text-white p-2 rounded-full">
        <TfiEmail />
      </div>
    ),
    title2: "Email:",
    value2: " docpaul2016@gmail.com",

    icons3: (
      <div className="bg-[#d1eaf6] hover:bg-[#149ddd] text-[#149ddd] hover:text-white p-2 rounded-full">
        <PiPhoneCallThin />
      </div>
    ),
    title3: "Call:",
    value3: "+2347016367643",
  },
];
