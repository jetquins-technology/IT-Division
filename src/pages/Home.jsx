import React from "react";
import styles from "../styles/home.module.css";
import SmallCards from "../components/cards/SmallCards";
import img1 from "../assets/images/grid1.png";
import img2 from "../assets/images/grid2.png";
import img3 from "../assets/images/grid3.png";
import img4 from "../assets/images/grid4.png";
import LargeCard from "../components/cards/LargeCard";
import featureImg1 from "../assets/images/featured-img01.png";
import featureImg2 from "../assets/images/featured-img02.png";
import featureImg3 from "../assets/images/featured-img03.png";
import usimg1 from "../assets/images/us-img01.png";
import usimg2 from "../assets/images/us-img02.png";
import usimg3 from "../assets/images/us-img03.png";
import usimg4 from "../assets/images/us-img04.png";
import ImageCard from "../components/cards/ImageCard";
import client from "../assets/images/client.png";
import us_left_img from "../assets/images/cyber-security-left-img.png";
import us_left_right from "../assets/images/cyber-security-right-img.png";
import ClientCard from "../components/cards/ClientCard";
import Testimonial from "../components/Testimonial";
import test1 from "../assets/images/testimonial.jpg";
import test2 from "../assets/images/testimonial2.jpg";
import test3 from "../assets/images/testimonial3.jpg";
import test4 from "../assets/images/testimonial4.jpg";
function Home() {
  return (
    <main>
      {/* -----> Hero Section <----- */}

      <section className={styles.hero_section}>
        <div className={styles.hero_heading}>
          <h4>Your trusted cybersecurity partner</h4>
          <h1>
            Safeguarding
            <br />
            your digital <span>world</span>
          </h1>
          <p>
            We provide advanced security solutions to safeguard your <br />
            business from cyber threats.
          </p>
          <a href="#">Learn More</a>
        </div>
      </section>

      {/* -----> grid section <----- */}

      <section className={styles.grid_section}>
        <div className={styles.grid_item}>
          <SmallCards
            src={img1}
            heading="consultation"
            para="Expert Cybersecurity Advisory Services to strengthen your security posture, protect your assets, and reduce cyber risk."
          />
          <SmallCards
            src={img2}
            heading="Performance"
            para="A slow website can be a major turnoff, especially in the cybersecurity space where trust and reliability are paramount"
          />
          <SmallCards
            src={img3}
            heading="application"
            para=" Cybersecurity protects your data with real-time threat detection, intelligence, and proactive defenses"
          />
          <SmallCards
            src={img4}
            heading="maintenance"
            para="Highlight new cybersecurity offering remove outdated services or update descriptions with fresh stats."
          />
        </div>
      </section>

      {/* -----> what we do section <----- */}
      <section className={styles.featured_section}>
        <div className={styles.featured_bg}>
          <div className={styles.featured_heading}>
            <h1>What We Offer</h1>
            <p>
              We provide enterprise-grade cybersecurity solutions to protect
              businesses from cyber threats, data breaches, and compliance risks
            </p>
          </div>
          <div className={styles.featured_grid}>
            <LargeCard
              src={featureImg1}
              heading="Data Privacy"
              para="Enterprise-grade data privacy and cybersecurity solutions to safeguard sensitive information, prevent cyber threats"
            />
            <LargeCard
              src={featureImg2}
              heading="Security Testing"
              para="Our approach helps you patch your app's security vulnerabilities, performance issues, and other anomalies."
            />
            <LargeCard
              src={featureImg3}
              heading="Industry experts"
              para="To ensure that our security solutions are both advanced and effective, we follow the slightest changes in the security field. "
            />
          </div>
        </div>
      </section>

     

      {/* -----> why choose us section <----- */}
      <section className={styles.whyChooseUs_section}>
        <div className={styles.chooseUs_container}>
          <div className={styles.chooseUs_heading}>
            <h1>Why Choose Us?</h1>
            <h2>
              Fortifying Security, Powering Innovation—Because Your Digital
              Future Deserves the Best!
            </h2>
            <p>
              We blend cutting-edge cybersecurity with powerful software
              development to fortify your digital presence. From robust security
              solutions to scalable, high-performance applications, we deliver
              innovation without compromise. Our expert-driven approach ensures
              proactive threat defense, seamless user experiences, and
              future-proof technology—all tailored to your needs.
            </p>

            <div className={styles.card_wrap}>
              <ImageCard src={usimg1} heading="Trusted Company" />
              <ImageCard src={usimg2} heading="Strong Network" />
              <ImageCard src={usimg3} heading="Best Partner" />
              <ImageCard src={usimg4} heading="System Provider" />
            </div>
          </div>
          <div className={styles.chooseUs_img}>
            <img src={us_left_right} alt="image" />
          </div>
        </div>
      </section>

      {/* -----> progress section <----- */}
      <section className={styles.progress_section}>
        <div className={styles.progress_container}>
          <div className={styles.progress_lhs}>
            <h1>
              We have Impactful <span>Results</span>
            </h1>
            <figure>
              <img src={client} alt="image" />
            </figure>
          </div>
          <div className={styles.progress_rhs}>
            <p>Join the hundreds of businesses protected by Cybersec.</p>
            <a>Get started today</a>
            <div className={styles.clientCard_wrap}>
              <ClientCard number="2,000" heading="Client protected" />
              <ClientCard number="30" heading="global research" />
              <ClientCard number="250" heading="Cyber security experts" />
              <ClientCard number="15" heading="Years of experience" />
            </div>
          </div>
        </div>
      </section>

      {/* -----> trial section <----- */}
      
      <div className={styles.trail_section}>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="p-6 rounded-lg shadow-lg">
          <div className={styles.trail_heading}>
            <h1 >Why IT Division</h1>
            <p><span>98% of our clients choose</span> to continue working with us after their trial project</p>
          </div>
        </div>
        <div className=" p-6 rounded-lg shadow-lg">
       <div className={styles.trailgrid_box}>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <h1 className={styles.trail_grid}>3x Higher ROI
            <span className="block"> compared to in-house,
            as reported by clients.</span>
          </h1>
          <h1 className={styles.trail_grid}>Top 1% Talent
            <span className="block">Expert Software Engineers & Designers</span>
          </h1>
          <h1 className={styles.trail_grid}>3x faster
            <span className="block">time-to-hire compared to industry averages</span>
          </h1>
          <h1 className={styles.trail_grid}>10x
            <span className="block">performance growth fostered by our architects for clients</span>
          </h1>
          <h1 className={styles.trail_grid}>10-year
            <span className="block">client tenure reported on long-term engagements</span>
          </h1>
          <h1 className={styles.trail_grid}>90%
            <span className="block">budget savings achieved by clients thanks to our solutions</span>
          </h1>
          </div>
       </div>
        </div>
      </div>
      </div>

      {/* -----> threat section <----- */}
      <section className={styles.threat_section}>
        <div className={styles.content_container}>
          <div className={styles.thread_text}>
            <h4>Need Immediate help?</h4>
            <h1>
              Stay ahead of cyber <span>threats</span>
            </h1>
            <p>
              Download our comprehensive guide for free and start securing your
              data today.
            </p>
            <a>Know More</a>
          </div>
        </div>
      </section>

      {/* -----> testimonial section <----- */}
      <div className={styles.testimonial_section}>
        <div className={styles.testimonial_container}>
          <h1 className={styles.test_heading}>Testimonial</h1>
          <h2>Protecting What Matters—Hear It from Businesses Like Yours!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            <Testimonial
              name="Jane M."
              src={test1}
              place=" SOC Analyst"
              para="We easily integrated their XDR solution with our SIEM, and it’s improved our overall response time to security threats"
            />
            <Testimonial
              para="With IT Division's 24/7 monitoring and AI-driven security, we reduced cyber threats by 85% and ensured full compliance with GDPR."
              name="Director"
              place="ABC Bank"
              src={test2}
            />
            <Testimonial
              para="Before working with IT Division, we faced multiple security vulnerabilities. Their solutions helped us achieve full compliance and avoid potential breaches."
              name=" Sarah M"
              place="CEO, FinanceSecure"
              src={test3}
            />
            <Testimonial
              para="We needed a secure cloud environment for our startup, and [Your Company] delivered the perfect solution with Zero Trust security"
              name="Alex P."
              place=" CEO, CloudInnovate"
              src={test4}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
