import * as React from "react"
import {
  centerContainer,
} from '../styles/global.module.scss'

const Footer = () =>
  <footer>
    <div className={centerContainer}>
      <span>© 2021 by EDGI</span>
      <ul>
        <li><a href='https://twitter.com/EEW_Network'>Twitter</a></li>
        <li><a href='https://www.facebook.com/envirodgi'>Facebook</a></li>
        <li><a href='https://github.com/edgi-govdata-archiving/Environmental-Enforcement-Watch'>Github</a></li>
        <li><a href='mailto:info@environmentalenforcementwatch.org'>Email</a></li>
      </ul>
    </div>
  </footer>

export default Footer
