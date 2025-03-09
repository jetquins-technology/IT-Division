import React from "react";
import styles from "../styles/contact.module.css";
import Breadcrumb from "../components/Breadcrumb";
import ContactCard from "../components/cards/ContactCard";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Form from "../components/Form";
function Contact() {
  return (
    <main>
      <section className={styles.about_section}>
        <div className={styles.about_banner}>
          <h1>Contact Us</h1>
          <div className={styles.breadcrumb_section}>
            <Breadcrumb item="Contact" />
          </div>
        </div>
      </section>

      <section className={styles.contact_container}>
        <div className={styles.contact_header}>
          <h1>Contact Us</h1>
          <h2>
            Do you have questions? <span className="block">ask us anytime</span>
          </h2>
        </div>
      </section>

      <section className={styles.contact_info}>
        <div  className={`${styles.conatct_item} grid grid-cols-1 md:grid-cols-3 gap-4 p-4`}
        >
          <ContactCard
            item1="+91-123 456 789"
            item2="+91-123 456 789"
            heading="Contact Us"
            icon={<FiPhoneCall />}
          />
          <ContactCard
            item1="infodomainname@gmail.com"
            item2="domainname@gmail.com"
            heading="E-Mail Us"
            icon={<MdOutlineAttachEmail />}
          />
          <ContactCard
            item1="12345 Unity Avenue Suite 100"
            item2="Springfield, USA 54321"
            heading="Our Location"
            icon={<IoLocationOutline />}
          />
        </div>

        <div className={styles.form_section}>
            <h1>Get in touch with us</h1>
            <Form/>
        </div>
      </section>
    </main>
  );
}

export default Contact;
