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
      <div className={styles.container_info}>
        <div className={styles.footer_logo}>
          <h1>Brand logo</h1>
        </div>
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
        <div className={styles.footer_text}>
          <h1>support</h1>
          <div className={styles.footer_links}>
            <a>Support</a>
            <a>Contact Us</a>
            <a>Knowledge Base</a>
            <a>About Us</a>
            <a>FAQ</a>
            <a>Partnerships</a>
          </div>
        </div>

        <div className={styles.footer_text}>
          <h1>Utility</h1>
          <div className={styles.footer_links}>
            <a>Style Guide</a>
            <a>Instructions</a>
            <a>Licenses</a>
            <a>Changelog</a>
            <a>Utility</a>
            <a>Coming Soon</a>
          </div>
        </div>

        <div className={styles.footer_text}>
          <h1>company</h1>
          <div className={styles.footer_links}>
            <a>Support</a>
            <a>Contact Us</a>
            <a>Knowledge Base</a>
            <a>About Us</a>
            <a>FAQ</a>
            <a>Partnerships</a>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.ourBrand}>
          <h1>Our Brand</h1>
        </div>
        <div className={styles.contact_text}>
          <h2>Cybersecurity Policy & Best Practices for Companies</h2>
          <p>
            In today’s digital age, cybersecurity is crucial for protecting a
            company’s sensitive data, assets, and reputation. A strong
            cybersecurity framework ensures business continuity and protects
            against cyber threats such as data breaches, ransomware attacks, and
            insider threats.
          </p>
        </div>
      </div>

      <div className={styles.address}>
        <div className={styles.email_address}>
          <input type="mail" placeholder="Your email Address" />
          <span>
            <BiMailSend />
          </span>
        </div>

        <div className={styles.contact_touch}>
          <div className="flex items-center">
            <SlLocationPin className=" text-3xl" />
            <h1>
              {" "}
              Office Address{" "}
              <span className="block">99th, Arround St. Pku City, 28292, </span>
            </h1>
          </div>
          <div className={`${styles.touch_items} flex items-center`}>
            <IoCallOutline className="text-red-400 text-3xl" />
            <h1>
              {" "}
              Conatct <span className="block">+(827) 123 - 456 - 7891</span>
            </h1>
          </div>
          <div className="flex items-center">
            <LuMailOpen className="text-red-400 text-3xl" />
            <h1>
              {" "}
              Mail Us <span className="block">info@cybersecurity.com</span>
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
