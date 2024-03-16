"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";

export default function Home() {

  const [sections, setSections] = useState([])
  const [headerSection, setHeaderSection] = useState()
  const [serviceSection, setServiceSection] = useState()
  const [aboutSection, setAboutSection] = useState()

  const client = createClient({
    projectId: 'smqf21u1',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03'
  })

  async function getHomeSections() {
    const sections = await client.fetch('*[_type == "home"]')
    console.log(sections)
    setSections(sections)
    const header = sections.find(x => x.Section == 'Header')
    const services = sections.find(x => x.Section == 'OUR SERVICES')
    const about = sections.find(x => x.Section == 'ABOUT US')
    setHeaderSection(header)
    setServiceSection(services)
    setAboutSection(about)
    return sections
  }

  useEffect(() =>{
    getHomeSections()
  }, [])
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <h1>LOGO</h1>
        </div>
        <div className={styles.navLinks}>
          <a>Home</a>
          <div>
            <a>About Us</a>
          </div>
          <div className={styles.navServices}>
            <a className={styles.groupTitle}>Services</a>
            <div>
              <a>Fire and Safety Solutions</a>
              <a>Security Solutions</a>
              <a>Facility Management Services</a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.contactButton}>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.headerContent}>
            <h3>{headerSection?.Section_Title}</h3>
            {/* <h3>Secure Today, Thrive Tomorrow</h3> */}
            <p>{headerSection?.Section_Description}</p>
            {/* <p>Elevate Your Safety with Tsur Business Solutions! Experience peace of mind with our unrivaled solutions. Contact us now for a safer, smarter, and more efficient tomorrow!</p> */}
            <div className={styles.headerButton}>
              <p>{headerSection?.Section_Button}</p>
              {/* <p>Get In Touch</p> */}
            </div>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div>
            <img src="/fire.jpg" />
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.sectionHead}>
          <div></div>
          <p>{serviceSection?.Section}</p>
          {/* <p>OUR SERVICES</p> */}
        </div>
        <div className={styles.sectionSubtitle}>
          <p>{serviceSection?.Section_Title}</p>
          {/* <p>Enhance Your Environment: Unmatched Fire, Security, and Facility Management Solutions</p> */}
        </div>
        <div className={styles.carousel}>
          <div className={styles.carouselCont}>
            <div className={styles.carouselItem}>
              <img src='/facility.jpg' />
              <p>FACILITY MANAGEMENT</p>
            </div>
            <div className={styles.carouselItem}>
              <img src='/security.jpg' />
              <p>SECURITY SOLUTIONS</p>
            </div>
            <div className={styles.carouselItem}>
              <img src='/fireSolution.jpg' />
              <p>FIRE SOLUTIONS</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.leftAbout}>
        <div className={styles.sectionHead}>
          <div></div>
          <p>{aboutSection?.Section}</p>
          {/* <p>ABOUT US</p> */}
        </div>
        <div className={styles.aboutContent}>
          <h3>{aboutSection?.Section_Title}</h3>
          {/* <h3>Transformative Fire, Security, and Facility Management Solutions</h3> */}
          <p>{aboutSection?.Section_Description}</p>
          {/* <p>With a relentless pursuit of excellence, we have positioned ourselves as industry pioneers, offering tailored solutions to meet the unique needs of our clients. Our team is fueled by a passion for safety, efficiency, and unparalleled customer satisfaction</p> */}
          <div className={styles.aboutButton}>
            <p>{aboutSection?.Section_Button}</p>
            {/* <p>Talk To Us</p> */}
          </div>
        </div>
        </div>
        <div className={styles.rightAbout}>
          <div>
          <img src='/cctv.jpg' />
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <div>
            <div></div>
            <p>CONTACT US</p>
          </div>
          <h1>It starts with a conversation</h1>
          <p></p>
          <div>
            <p>Contact Us</p>
          </div>
        </div>
        <div></div>
      </div> */}
      {/* <div>
        <p>Subscribe to our Newsletter!</p>
        <p>For more information or to schedule a tour, contact a sales consultant who can help you decide which community</p>
        <div>
          <input />
          <div>
            <p>Subscribe</p>
          </div>
        </div>
      </div> */}
      <div className={styles.footer}>
        <div>
          <p>LOGO</p>
          <p></p>
        </div>
        <div>
          <h3>Helpful Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h3>What we do</h3>
          <p>Fire Solutions</p>
          <p>Security Solutions</p>
          <p>Facility Management</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
    </main>
  );
}
