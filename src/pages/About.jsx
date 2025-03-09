import React from "react";
import styles from "../styles/about.module.css";
import Breadcrumb from "../components/Breadcrumb";
import gridImg1 from "../assets/images/about-grid-1.jpg";
import gridImg2 from "../assets/images/about-grid-1.jpg";
import gridImg3 from "../assets/images/about-grid-1.jpg";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import mission1 from "../assets/images/icon-our-mission.svg";
import mission2 from "../assets/images/icon-our-value.svg";
import mission3 from "../assets/images/icon-our-vision.svg";
import approachImg from "../assets/images/approach_rhs.jpg";
import aboutImg from '../assets/images/about-body-img.png'
import aboutImg2 from '../assets/images/aboutImg.jpg'
function About() {
  return (
    <main>
      <section className={styles.about_section}>
        <div className={styles.about_banner}>
          <h1>About Us</h1>
          <div className={styles.breadcrumb_section}>
            <Breadcrumb item="About"/>
          </div>
        </div>
      </section>

      <section className={styles.aboutus_grid}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className=" p-4 ">
            <div className={styles.about_gridImg}></div>
          </div>
          <div className="p-4 rounded-lg shadow">
            <div className={styles.about_rhs}>
              <div className={styles.aboutus_content}>
                <h1>About Us</h1>
                <h2>
                  Your trusted partner in our
                  <span> cyber security solutions</span>
                </h2>
                <p>
                  We provide reliable, cutting-edge cybersecurity solutions to
                  protect your digital assets, ensuring safety and peace of
                  mind.
                </p>

               

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full">
                  <ul className={styles.content_ul}>
                    <li>
                      <IoCheckmarkDoneCircleOutline />
                      Threat Detection and Monitoring
                    </li>
                    <li>
                      <IoCheckmarkDoneCircleOutline />
                      Access Control Management
                    </li>
                    <li>
                      <IoCheckmarkDoneCircleOutline />
                      Security Awareness Training
                    </li>
                  </ul>

                  <div className={styles.phone_container}>
                    <div className="flex items-center text-2xl">
                      <div className={styles.phone_icon}>
                        <FiPhoneCall />
                      </div>
                      <p>+9874561212</p>
                    </div>
                    <div
                      className={`${styles.about_contact} flex items-center `}
                    >
                      <Link>Contact Us </Link>
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.our_approach}>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-center">
            <div className={styles.heading_box}>
              <h1>Our Approach</h1>
              <h3>
                Strengthening Security, Your{" "}
                <span >Future</span>
              </h3>
            </div>
            <div className={styles.approach_lhs}>
              <div className={styles.mission_items}>
                <div className={styles.mission_icon}>
                  <img src={mission1} alt="image" />
                </div>
                <div className={styles.items_content}>
                  <h2>our mission</h2>
                  <p>
                    To empower businesses with robust cybersecurity solutions,
                    ensuring data integrity, privacy & resilience against.
                  </p>
                </div>
              </div>
              <div className={styles.mission_items}>
                <div className={styles.mission_icon}>
                  <img src={mission3} alt="image" />
                </div>
                <div className={styles.items_content}>
                  <h2>our vision</h2>
                  <p>
                    A team of seasoned cybersecurity professionals with
                    extensive industry knowledge.
                  </p>
                </div>
              </div>
              <div className={styles.mission_items}>
                <div className={styles.mission_icon}>
                  <img src={mission2} alt="image" />
                </div>
                <div className={styles.items_content}>
                  <h2> our value</h2>
                  <p>
                    Focused on preventing threats before they impact your
                    system, not just reacting after the fact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.works_section}>
        <div className={styles.work_container}>
            <h1>Our Benifits</h1>
            <h2>Reliable solutions for cybersecurity excellence</h2>
            <p>Our comprehensive cybersecurity solutions provide robust protection, minimizing risks and giving you peace of mind knowing your data and systems are secure. We empower you with the tools and expertise to navigate today's. We provide comprehensive cybersecurity services to safeguard your digital assets, prevent potential threats, and ensure a secure environment.</p>
             <div className={styles.aboutus_box}>
                  <div className={styles.box_img}>
                    <figure className={styles.image_cyber}>
                      <img
                        src={aboutImg}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className={styles.box_content}>
                    <h3> 24/7 security assistance</h3>
                    <h6>
                      Real-time support for all cybersecurity concerns,
                      including breach response, threat detection, guidance.
                      Many businesses have a SOC that operates 24/7 to monitor threats and respond to cyber incidents.
                    </h6>
                  </div>
                </div>
        </div>
      </section>
    </main>
  );
}

export default About;
