import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "../styles/megamenu.module.css";
// import { button } from "@/components/ui/button";
import { SlPencil, SlSettings } from "react-icons/sl";
import { IoBriefcaseOutline, IoExtensionPuzzleOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import brandname from "../assets/images/brand-name.png";
import brand2 from "../assets/images/brand2.jpg";
import { Link, NavLink } from "react-router-dom";
import { GrShieldSecurity } from "react-icons/gr";
import endpointimg from "../assets/images/endpoint.png";
import { FaArrowRight, FaAward } from "react-icons/fa";
import { MdOutlineDone, MdOutlineTravelExplore } from "react-icons/md";
import { HiOutlineSearchCircle } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import { PiCloudCheckBold } from "react-icons/pi";
import { BsShieldLock } from "react-icons/bs";
import { FaRegChessKnight } from "react-icons/fa6";

const MegaMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      title: "Services",
      links: ["Warranty", "Support", "Repairs", "Consulting"],
      menutitle: "software development",
    },
    {
      title: "platform",
      links: ["About Us", "Careers", "News", "Contact"],
      menutitle: "software",
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "News", "Contact"],
      menutitle: "software",
    },
    {
      title: "products",
      links: ["About Us", "Careers", "News", "Contact"],
      menutitle: "software",
    },
    {
      title: "pricing",
      links: ["About Us", "Careers", "News", "Contact"],
      menutitle: "software",
    },
  ];

  return (
    <nav className={styles.megamenu}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold">
            <img width={200} src={logo} alt="brand logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 relative h-[100%]">
            <Link to="/">Home</Link>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative h-[100%]"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  variant="ghost"
                  className={`${styles.menu_btn} cursor-pointer  flex items-center h-[100%] hover:text-red-600 transition delay-100 duration-300 ease-in-out`}
                >
                  {item.title} <ChevronDown className="ml-1 w-4 h-max" />
                </button>
                {openMenu === index && (
                  <div className={`${styles.submenu} mt-2`}>
                    {item.title === "Services" ? (
                      <div className={styles.megamenu_container}>
                       
                        <div className={styles.menu_link}>
                          <h1>
                          Threat Intelligence & Response
                            <SlPencil />
                          </h1>
                          <ul className={styles.menu_items}>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Dark Web Monitoring
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                               Threat Hunting & Analysis
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                DDoS Protection Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Phishing Protection & Email Security
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className={styles.menu_link}>
                          <h1>
                            Security Services
                            <GrShieldSecurity />
                          </h1>
                          <ul className={styles.menu_items}>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Cybersecurity Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Penetration Testing
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Managed Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                ISO Consulting
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                SOC2 Consulting
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className={styles.menu_link}>
                          <h1>
                            Software
                            <IoExtensionPuzzleOutline />
                          </h1>
                          <ul className={styles.menu_items}>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                API Documentation
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Industry softwares
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Digital worker
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Apps for production machines and plants
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={styles.menu_link}>
                          <h1>
                            End Point Security
                            <img src={endpointimg} alt="icon" width={30} />
                          </h1>
                          <ul className={styles.menu_items}>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Singularity MDR
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/vigilance"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Vigilance MDR
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/watch_tower"}
                                onClick={() => setOpenMenu(null)}
                              >
                                WatchTower Pro
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/support_service"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Support Services
                              </Link>
                            </li>
                          </ul>
                          
                        </div>
                      </div>
                    ) : item.title === "platform" ? (
                      <div className={styles.megamenu_container}>
                         <div className={styles.menu_link}>
                          <div className={styles.platform_text}>
                            <p><span><MdOutlineDone /></span> Multi-Factor Authentication (MFA)</p>
                            <p><span><MdOutlineDone /></span> Real-time data classification & encryption</p>
                            <p><span><MdOutlineDone /></span> Automated threat hunting & remediation</p>
                            <p><span><MdOutlineDone /></span> SIEM & SOAR integration for incident response</p>
                            <p><span><MdOutlineDone /></span> Runtime threat detection for containers & VMs</p>
                          </div>

                        </div>
                        <div className={styles.menu_link}>
                          <h1>
                            Cybersecurity Platforms <BsShieldLock />
                          </h1>
                          <ul className={styles.menu_items}>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Vulnerability Scanners
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/vigilance"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Cloud Security Platforms
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/watch_tower"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Endpoint Protection & XDR Platforms
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/support_service"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Identity & Access Management (IAM)
                              </Link>
                            </li>
                          </ul>
                          
                        </div>

                        <div className={`${styles.menu_link} `}>
                          <h1>
                            Cloud Security Platform
                            <PiCloudCheckBold />
                          </h1>
                          <ul className={styles.menu_items}>
                            <li>
                              <Link
                                to={"/vigilance"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Cloud Development & DevOps
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/watch_tower"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Application Development Frameworks
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/watch_tower"}
                                onClick={() => setOpenMenu(null)}
                              >
                                SIEM (Security Information <br /> and Event
                                Management) Platforms
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/support_service"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Software Development Platforms
                              </Link>
                            </li>
                          </ul>
                        </div>
                       
                       
                      </div>
                    ) : item.title === "Company" ? (
                      <div className={styles.megamenu_container}>
                        <div
                          className={`${styles.menu_link} w-full md:w-full lg:w-3/5`}
                        >
                          <h1 className={styles.company_text}>
                            About us <FaArrowRight />
                          </h1>
                          <p className="">
                            <span className="font-bold block">
                              We create cloud-first enterprise security
                              solutions
                            </span>
                            IT Division is trusted by hundreds of thousands of
                            organizations worldwide to safeguard and support
                            their operations, allowing them to focus on business
                            growth. We offer simple, comprehensive, and
                            cost-effective solutions for email, application,
                            network, and data protection. Our ongoing innovation
                            ensures that tomorrow’s security technology is
                            available today.
                          </p>
                         
                          <div className={`${styles.icon_container} grid grid-cols-2  w-2/3`}>
                            <div className={styles.award}>
                              <div className={styles.company_grid}>
                              <FaAward />
                                <h2>Awarded for excellence</h2>
                              </div>
                            </div>
                            <div className={styles.experience}>
                              <div className={styles.company_grid}>
                              <FaRegChessKnight />
                                <h2>Experience Architecture</h2>
                              </div>
                              </div>
                            <div className={styles.service}>
                              <div className={styles.company_grid}>
                              <IoSettingsOutline />
                                <h2>Premium Services</h2>
                              </div>
                              </div>
                            <div className={styles.growth}>
                              <div className={styles.company_grid}>
                              <IoBriefcaseOutline />
                                <h2>Elevate Your Growth</h2>
                              </div>
                              </div>
                          </div>
                          
                        </div>
                        <div className={styles.menu_link}>
                          <h1>
                            Explore <HiOutlineSearchCircle size={25} />
                          </h1>
                          <ul className={styles.menu_items}>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Success Stories
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Innovation
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Cybersecurity Blog
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Security & Compliance
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/singularity"}
                                onClick={() => setOpenMenu(null)}
                              >
                                Careers
                              </Link>
                            </li>
                          </ul>
                        </div>
                       
                      </div>
                    ) : (
                      item.links.map((link, i) => (
                        <div className="">
                          <a
                            key={i}
                            href="#"
                            className={`${styles.submenuLink} block px-4   hover:bg-red-800 rounded`}
                          >
                            {link}
                          </a>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={`${styles.demoBtn}`}>
            <button>get a demo</button>
          </div>
          {/* Mobile Menu button */}
          <div className="md:hidden">
            <button variant="ghost" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left flex justify-between items-center py-2"
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                {item.title} <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === index && (
                <div className="ml-4">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-2 py-1 hover:bg-gray-700 rounded"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MegaMenu;
