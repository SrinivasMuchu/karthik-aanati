import React from 'react'
import Topbar from '../Topbar/Topbar'
import Slogan from '../Slogan/Slogan'
import WhyUs from '../WhyUs/WhyUs'
import Services from '../Services/Services'
import Faq from '../FAQs/Faq'
import Footer from '../Footer/Footer'

function HomePage() {
  return (
    <div>
        <Topbar/>
        <Slogan/>
        <WhyUs/>
        <Services/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default HomePage