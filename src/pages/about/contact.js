// Step 1: Import React
import * as React from 'react'
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'

const ContactPage = () => 
  <Layout pageTitle="Contact" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <p><strong>Press Contact: <a href='environmentalenforcementwatch@gmail.com'>environmentalenforcementwatch@gmail.com</a></strong></p>
    <h1>Contact</h1>
      <form action="https://submit-form.com/y28zl2Mj">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required="" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required="" />
          <label htmlFor="message">Message</label>
          <textarea
              id="message"
              name="message"
              placeholder="Message"
              required=""
          ></textarea>
          <button type="submit">Send</button>
      </form>
  </Layout>

// Step 3: Export your component
export default ContactPage
