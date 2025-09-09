


"use client";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';


const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    "service_6zr249n",      // ✅ Your Service ID
    "template_chrwq5l",     // ✅ Your Template ID
    e.target,
    "CV0NNybnluRcjwMA_"          // ✅ Your Public Key
  ).then(
    (result) => {
      alert("✅ Demo request sent! We’ll contact you soon.");
      e.target.reset();
    },
    (error) => {
      alert("❌ Error: " + error.text);
    }
  );
};

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol} style={{alignItems:'center', textAlign:'center', gap:'1.5rem'}}>
          <div style={{width:'100%', display:'flex', justifyContent:'center', marginBottom:'0.5rem'}}>
            <Image src="/karthik-aanati.png" alt="Karthik Aanati Logo"
             width={180} height={100}
              />
          </div>
          <div>
            <div className={styles.footerTitle} style={{marginBottom:'0.6rem'}}>Location</div>
            <div className={styles.footerContactList}>
              <span className={styles.footerContactItem}>
                <FaMapMarkerAlt /> Kavali, Andhra Pradesh
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerTitle}>Contact</div>
          <div className={styles.footerContactList}>
            <a href="tel:+919999999999" className={styles.footerContactItem}><FaPhoneAlt /> +91 99999 99999</a>
            <a href="https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener" className={styles.footerContactItem}><FaWhatsapp /> WhatsApp</a>
            <a href="mailto:info@karthikaanati.com?subject=Enquiry%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." className={styles.footerContactItem}><FaEnvelope /> info@karthikaanati.com</a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerTitle}>Contact Form</div>
          <form className={styles.footerForm} onSubmit={sendEmail}>
  <input className={styles.footerInput} name="name" type="text" placeholder="Your Name" required />
  <input className={styles.footerInput} name="phone" type="tel" placeholder="Your Phone Number" required />
  <input className={styles.footerInput} name="email" type="email" placeholder="Your Email" required />
  <textarea className={styles.footerTextarea} name="message" placeholder="Your Message" rows={3} required />
  <button className={styles.footerButton} type="submit">Send</button>
</form>

        </div>
      </div>
      
      {/* <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
            
          <div className={styles.footerTitle}>Location</div>
          <div className={styles.footerContactList}>
            <span className={styles.footerContactItem}>
              <FaMapMarkerAlt /> Kavali, Andhra Pradesh
            </span>
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerTitle}>Contact</div>
          <div className={styles.footerContactList}>
            <a href="tel:+919999999999" className={styles.footerContactItem}><FaPhoneAlt /> +91 99999 99999</a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className={styles.footerContactItem}><FaWhatsapp /> WhatsApp</a>
            <a href="mailto:info@karthikaanati.com" className={styles.footerContactItem}><FaEnvelope /> info@karthikaanati.com</a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerTitle}>Contact Form</div>
          <form className={styles.footerForm} action={handleContact} method="POST">
            <input className={styles.footerInput} name="name" type="text" placeholder="Your Name" required />
            <input className={styles.footerInput} name="email" type="email" placeholder="Your Email" required />
            <textarea className={styles.footerTextarea} name="message" placeholder="Your Message" rows={3} required />
            <button className={styles.footerButton} type="submit">Send</button>
          </form>
        </div>
      </div> */}
      <div className={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} Karthik Aanati. All rights reserved.
      </div>
    </footer>
  );
}