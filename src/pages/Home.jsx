import React from "react";
import styles from "../styles/home.module.css";
import SmallCards from "../components/cards/SmallCards";
import img1 from "../assets/images/grid1.png";
import img2 from "../assets/images/grid2.png";
import img3 from "../assets/images/grid3.png";
import img4 from "../assets/images/grid4.png";
import LargeCard from "../components/cards/LargeCard";
import featureImg1 from '../assets/images/featured-img01.png'
import featureImg2 from '../assets/images/featured-img02.png'
import featureImg3 from '../assets/images/featured-img03.png'
import Companies from "../components/sliders/Companies";
import comImg1 from '../assets/images/industry-img01.svg'
import comImg2 from '../assets/images/industry-img02.svg'
import comImg3 from '../assets/images/industry-img03.svg'
import comImg4 from '../assets/images/industry-img04.svg'
import comImg5 from '../assets/images/industry-img05.svg'
import usimg1 from '../assets/images/us-img01.png'
import usimg2 from '../assets/images/us-img02.png'
import usimg3 from '../assets/images/us-img03.png'
import usimg4 from '../assets/images/us-img04.png'
import ImageCard from "../components/cards/ImageCard";
import client from '../assets/images/client.png'
import us_left_img from '../assets/images/cyber-security-left-img.png'
import ClientCard from "../components/cards/ClientCard";
import threatImg from '../assets/images/threat-grid-img.svg'
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
            para="Ut ut sapien nec mi tincidunt sagittis faucibus at eros. In egesta."
          />
          <SmallCards
            src={img2}
            heading="consultation"
            para="Ut ut sapien nec mi tincidunt sagittis faucibus at eros. In egesta."
          />
          <SmallCards
            src={img3}
            heading="consultation"
            para="Ut ut sapien nec mi tincidunt sagittis faucibus at eros. In egesta."
          />
          <SmallCards
            src={img4}
            heading="consultation"
            para="Ut ut sapien nec mi tincidunt sagittis faucibus at eros. In egesta."
          />
        </div>
      </section>

      {/* -----> what we do section <----- */}
      <section className={styles.featured_section}>
        <div className={styles.featured_bg}>
        <div className={styles.featured_heading}>
        <h1>What We Offer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam veniam, autem facere earum facilis maxime vel? Consectetur itaque distinctio corporis?</p>
        </div>
        <div className={styles.featured_grid}>
          <LargeCard src={featureImg1}heading="Security Services" para="Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"/>
          <LargeCard src={featureImg2} heading="Data Privacy" para="Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"/>
          <LargeCard src={featureImg3} heading="Industry Certified" para="Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"/>
        </div>
        </div>
      </section>

    {/* -----> industry pioneers section <----- */}
    {/* <section className={styles.company_section}>
        <div className={styles.company_heading}>
          <h1>Trusted by industry pioneers</h1>
          <div>
            <h1>marquee</h1>
          </div>
        </div>

    </section> */}


     {/* -----> why choose us section <----- */}
    <section className={styles.whyChooseUs_section}>
      <div className={styles.chooseUs_container}>
        <div className={styles.chooseUs_heading}>
          <h1>Why Choose Us</h1>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, corrupti!</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur error, voluptatem nisi laudantium dignissimos culpa. Molestias deserunt numquam inventore assumenda, perspiciatis exercitationem laborum aliquid earum hic tempore. Dignissimos deserunt laboriosam corrupti facere cumque, mollitia enim saepe, error ratione ex qui.</p>

          <div className={styles.card_wrap}>
            <ImageCard src={usimg1} heading="Trusted Company"/>
            <ImageCard src={usimg2} heading="Strong Network"/>
            <ImageCard src={usimg3} heading="Best Partner"/>
            <ImageCard src={usimg4} heading="System Provider"/>
          </div>
        </div>
        <div className={styles.chooseUs_img} >
          <img src={us_left_img} alt="image"/>
        </div>
      </div>
    </section>

     {/* -----> progress section <----- */}
    <section className={styles.progress_section}>
    <div className={styles.progress_container}>
      <div className={styles.progress_lhs}>
        <h1>We have impactful <span>results</span> </h1>
        <figure>
          <img src={client} alt="image"/>
        </figure>
      </div>
      <div className={styles.progress_rhs}>
        <p>Join the hundreds of businesses protected by Cybersec.</p>
        <a>Get started today</a>
        <div className={styles.clientCard_wrap}>
            <ClientCard number="2,000" heading="Client protected"/>
            <ClientCard number="30" heading="global research"/>
            <ClientCard number="250" heading="Cyber security experts"/>
            <ClientCard number="15" heading="Years of experience"/>
        </div>
      </div>
    </div>
    </section>


    {/* -----> threat section <----- */}
    <section className={styles.threat_section}>
        <div className={styles.content_container}>
          <div className={styles.thread_text}>
            <h4>Need Immediate help?</h4>
            <h1>Stay ahead of cyber <span>threats</span> </h1>
            <p>Download our comprehensive guide for free and start securing your data today.</p>
            <a>Know More</a>
          </div>

        </div>
    </section>
    </main>
  );
}

// filter: brightness(0%) contrast(1%) saturate(100%) blur(0px) hue-rotate(0deg);

export default Home;
