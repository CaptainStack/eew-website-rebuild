import * as React from 'react'
import {
    layout,
    centerContainer,
    pageContentContainer
  } from '../styles/global.module.scss'
  import Header from '../components/Header'
  import Sidebar from '../components/Sidebar'
  import Footer from '../components/Footer'

  
const Layout = ({pageTitle, children, sidebarLinks, activeHeaderLink}) => 
  <div className={layout}>
    <title>{pageTitle} | Environmental Enforcement Watch</title>
    <Header activeLink={activeHeaderLink}/>
    <div className={`${centerContainer} ${pageContentContainer}`}>
      {sidebarLinks ? <Sidebar links={sidebarLinks} pageTitle={pageTitle}/> : null}
      <main>{children}</main>
    </div>
    <Footer />
    </div>

export default Layout
