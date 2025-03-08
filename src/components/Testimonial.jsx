import React from "react";
import styles from "../styles/testimonial.module.css";
function Testimonial({ src, para, name, place }) {
  return (
    <div className="group relative bg-[#742424] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
      {/* <!-- Border Effect --> */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#D82828] to-[#1E1E1E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-4 border-transparent"></div>
      <div className="relative z-10">
        <div className="text-[#D82828] text-5xl leading-none mb-4 font-serif">
          “
        </div>
        <p
          className={`${styles.testimonial_test} text-[#fff] text-lg leading-relaxed mb-4`}
        >
          “{para}”
        </p>
        <div className={`${styles.testi_name} flex items-center mt-6`}>
          <img
            src={src}
            alt="Client 1"
            className="w-16 h-16 rounded-full border-4 border-[#B2E5D9] shadow-md mr-4"
          />
          <div className={styles.testi_name}>
            <h6 className="text-lg font-bold text-[#C8C8C8]">{name}</h6>
            <span className="text-sm text-[#C8C8C8]">{place}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
