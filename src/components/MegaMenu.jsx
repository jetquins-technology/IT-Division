import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "../styles/megamenu.module.css";
// import { button } from "@/components/ui/button";
import { SlPencil, SlSettings } from "react-icons/sl";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import brandname from '../assets/images/brand-name.png'
import brand2 from '../assets/images/brand2.jpg'
import { Link, NavLink } from "react-router-dom";

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
      title: "Products",
      links: ["Laptops", "Phones", "Accessories", "Tablets"],
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
          <div className="flex-shrink-0 text-xl font-bold">Brand</div>

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
                       <img src={brandname} width={350} height={400}/>
                       </div>
                       <div className={styles.menu_link}>
                        <h1> <SlSettings/> software development</h1>
                        <ul className={styles.menu_items}>
                          <li><Link to={"/singularity"} onClick={()=>setOpenMenu(null)}>Singularity MDR</Link></li>
                          <li><Link to={"/vigilance"} onClick={()=>setOpenMenu(null)}>Vigilance MDR</Link></li>
                          <li><Link to={"/watch_tower"} onClick={()=>setOpenMenu(null)}>WatchTower Pro</Link></li>
                          <li><Link to={"/support_service"} onClick={()=>setOpenMenu(null)}>Support Services</Link></li>
                          <li><Link to={"/sentinel_one"} onClick={()=>setOpenMenu(null)}>SentinelOne GO</Link></li>
                          <li></li>
                        </ul>
                        <div>
                          
                        </div>
                       
                       </div>
                        <div className={styles.menu_link}>
                        <h1><SlPencil /> Track design </h1>
                        <ul className={styles.menu_items}>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                        </ul>
                       </div> 
                
                       <div className={styles.menu_link}>
                        <h1><IoExtensionPuzzleOutline /> Integration </h1>
                        <ul className={styles.menu_items}>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                        </ul>
                       </div>
                
                       <div className={styles.menu_link}>
                        <h1> <HiOutlineClipboardDocument />Documents </h1>
                        <ul className={styles.menu_items}>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                        </ul>
                       </div>
                
                      </div>
                    ) : item.title === "platform" ? (
                      <div className={styles.megamenu_container}>
                       <div className={styles.menu_link}>
                        <h1> <SlSettings/> software development</h1>
                        <ul className={styles.menu_items}>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                        </ul>
                       </div>
                
                        <div className={styles.menu_link}>
                        <h1><SlPencil /> Track design </h1>
                        <ul className={styles.menu_items}>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                        </ul>
                       </div> 
                
                       <div className={styles.menu_link}>
                        <h1><IoExtensionPuzzleOutline /> Integration </h1>
                        <ul className={styles.menu_items}>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                        </ul>
                       </div>
                
                       <div className={styles.menu_link}>
                        <h1> <HiOutlineClipboardDocument />Documents </h1>
                        <ul className={styles.menu_items}>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                          <li>Link1</li>
                        </ul>
                       </div>
                       <div className={styles.menu_link}>
                       <img src={brand2} width={350} height={400}/>
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
