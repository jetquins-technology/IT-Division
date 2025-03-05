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
        <h1>What we offer</h1>
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
    <section className={styles.company_section}>
        <div className={styles.company_heading}>
          <h1>Trusted by industry pioneers</h1>
          <div>
            <h1>marquee</h1>
          </div>
        </div>

    </section>

    <section className={styles.whyChooseUs_section}>
      
    </section>
    </main>
  );
}

// filter: brightness(0%) contrast(1%) saturate(100%) blur(0px) hue-rotate(0deg);

export default Home;
