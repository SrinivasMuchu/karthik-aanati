import React from 'react';
import styles from './Services.module.css';
import { FaRegFileAlt, FaCalculator, FaChartLine, FaLightbulb, FaBalanceScale } from 'react-icons/fa';

const services = [
  {
    icon: <FaBalanceScale className={styles.serviceIcon} />, 
    title: 'Audit and Assurance Services',
    desc: 'Comprehensive audits and assurance for transparent, reliable financial reporting.'
  },
  {
    icon: <FaCalculator className={styles.serviceIcon} />, 
    title: 'Taxation Services (Income Tax, Corporate Tax)',
    desc: 'Expert tax planning, filing, and compliance for individuals and businesses.'
  },
  {
    icon: <FaRegFileAlt className={styles.serviceIcon} />, 
    title: 'GST Filing and Compliance',
    desc: 'Accurate GST registration, filing, and compliance for peace of mind.'
  },
  {
    icon: <FaChartLine className={styles.serviceIcon} />, 
    title: 'Financial Planning and Analysis',
    desc: 'Strategic financial planning and analysis to drive your business growth.'
  },
  {
    icon: <FaLightbulb className={styles.serviceIcon} />, 
    title: 'Business Consulting and Advisory',
    desc: 'Insightful business consulting and advisory for confident decision-making.'
  },
];

function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.servicesHeading}>Our Services</h2>
      <div className={styles.servicesSubheading}>
        Explore our range of professional services designed to support your financial and business success.
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, idx) => (
          <div className={styles.serviceBox} key={idx}>
            {service.icon}
            <div className={styles.serviceTitle}>{service.title}</div>
            <div className={styles.serviceDesc}>{service.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;