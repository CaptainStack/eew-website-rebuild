import * as React from "react"
import Header from '../components/Header'
// import Notification from '../components/Notification'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/styles.scss'

const Layout = ({pageTitle, children, sidebarLinks, activeHeaderLink}) => 
  <div className={`Layout ${pageTitle}`}>
    {/* Metadata */}
    <title>{pageTitle} | Environmental Enforcement Watch</title>
    <meta content='https://environmentalenforcementwatch.org/static/1c753d31dbdd94ab2b736e4da6ae656a/0a47e/eew-map.png' property="og:image" />
    <meta property="og:description" content="A data accessibilty project from the Environmental Data Governance Initiative" />
    
    <Header activeLink={activeHeaderLink}/>
    {/* <Notification /> */}
    <div className='middle'>
      <div className='container'>
        {sidebarLinks ? <Sidebar links={sidebarLinks} pageTitle={pageTitle}/> : null}
        <main>
          {children}
        </main>
      </div>
    </div>
    <Footer />
  </div>

export default Layout
