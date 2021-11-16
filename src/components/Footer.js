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
      <span>© Environmental Data Governance Initiative (EDGI) {new Date().getFullYear()}.</span>
      <span>EDGI is a project of Multiplier, a tax-exempt nonprofit 501(c)3 umbrella organization (Tax ID 91-2166435).</span>
    </div>
  </footer>

export default Footer
