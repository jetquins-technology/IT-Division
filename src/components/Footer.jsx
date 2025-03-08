import React from "react";
import styles from "../styles/footer.module.css";
import { BiMailSend } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { LuMailOpen } from "react-icons/lu";
function Footer() {
  return (
    <footer className={styles.footer_section}>
      {/* ---- footer --- */}
      <div className="flex justify-center md:justify-between  flex-wrap gap-4 p-4">
        <div className="w-full sm:w-1/1 md:full lg:w-1/4 ">
          <div className={styles.footer_logo}>
            <h1>Brand logo</h1>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:w-1/6">
          <div className={styles.footer_text}>
            <h1>Services</h1>
            <div className={styles.footer_links}>
              <a>Security Training</a>
              <a>Cloud Security</a>
              <a>Secure Managed IT</a>
              <a>Data Privacy</a>
              <a>Industry Certified</a>
              <a>Threat Intelligence</a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:w-1/6">
          <div className={styles.footer_text}>
            <h1>support</h1>
            <div className={styles.footer_links}>
              <a>Support</a>
              <a>Contact Us</a>
              <a>Knowledge Base</a>
              <a>FAQ</a>
              <a>Partnerships</a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:w-1/6">
          <div className={styles.footer_text}>
            <h1>Our Workflow</h1>
            <div className={styles.footer_links}>
              <a>Skilled Team Members</a>
              <a>Upfront Pricing</a>
              <a>Innovation Lab</a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:w-1/6">
          <div className={styles.footer_text}>
            <h1>company</h1>
            <div className={styles.footer_links}>
              <a>About us</a>
              <a>Testimonials</a>
              <a>Privacy Policy</a>
              <a>Cookie Policy</a>
              <a>Terms of service</a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={`${styles.contact} flex flex-wrap gap-4 p-4`}>
        <div className="w-full sm:w-full md:w-full lg:w-1/5">
          <div className={styles.ourBrand}>
            <h1>Our Brand</h1>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-3/4">
          <div className={styles.contact_text}>
            <h2 className="text-center">
              Cybersecurity Policy & Best Practices for Companies
            </h2>
            <p>
              In today’s digital age, cybersecurity is crucial for protecting a
              company’s sensitive data, assets, and reputation. A strong
              cybersecurity framework ensures business continuity and protects
              against cyber threats such as data breaches, ransomware attacks,
              and insider threats.
            </p>
          </div>
        </div>
      </div> */}

      <div
        className={`${styles.contact_touch} flex justify-center md:justify-between items-center  flex-wrap gap-4 p-4`}
      >
        <div className="w-full sm:w-1/3 md:w-full lg:w-2/8">
          <div className={`${styles.email_section}`}>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full"
            />
            <span>
              <BiMailSend />
            </span>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:full lg:w-1/5">
          <div className="flex items-center">
            <span className="text-3xl">
              <LuMailOpen />
            </span>
            <h1>
              Mail Us <span className="block">info@cybersecurity.com</span>
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:full lg:w-1/5">
          <div className="flex items-center">
            <span className="text-3xl">
              <IoCallOutline />
            </span>
            <h1>
              Call Us <span className="block">+(827) 123 - 456 - 7891</span>
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:full lg:w-1/5">
          <div className="flex items-center">
            <SlLocationPin className=" text-3xl" />
            <h1>
              Office Address
              <span className="block">99th, Arround St. Pku City, 28292, </span>
            </h1>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <h1>Copyright © Cybersecurity 2023. All rights reserved</h1>
      </div>
    </footer>
  );
}

export default Footer;
