import * as React from "react"

const Footer = () =>
  <footer>
    <div className='container'>
      <div>
        <a href='https://twitter.com/EEW_Network'>Twitter</a>
        <a href='https://www.facebook.com/envirodgi'>Facebook</a>
        <a href='https://github.com/edgi-govdata-archiving/Environmental-Enforcement-Watch'>Github</a>
        <a href='mailto:info@environmentalenforcementwatch.org'>Email</a>
      </div>
      <span>© {new Date().getFullYear()} by EDGI</span>
    </div>
  </footer>

export default Footer
