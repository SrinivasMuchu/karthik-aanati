import React from 'react';
import styles from './WhyUs.module.css';
import Image from 'next/image';

function WhyUs() {
  return (
    <section className={styles.whyUsSection} id="whyus">
         <div className={styles.whyUsImageContainer}>
        <Image src="/why-us.png" alt="Why Choose Us" width={350} height={350} className={styles.whyUsImage} />
      </div>
      <div className={styles.whyUsText}>
        <h2 style={{marginTop:0, marginBottom:'1.2rem', fontSize:'2rem', color:'#256029', fontWeight:700, letterSpacing:'0.5px'}}>Why Us</h2>
        With 5 years of dedicated experience as a Chartered Accountant, Karthik Aanati combines professional expertise with personalized service to support your financial success. Committed to accuracy and integrity, he offers trusted solutions in audit, taxation, financial planning, business consulting, and GST filing. His approach ensures clear, compliant, and strategic financial management, helping clients grow their businesses confidently. Choose us for accountable, timely, and insightful financial guidance tailored to your unique needs.
      </div>
     
    </section>
  );
}

export default WhyUs;