import * as React from "react"
import { Link } from 'gatsby'
import { HeaderLinks } from '../helpers/constants'
import SiteLogo from "../images/eew-logo.png"
import {
  active,
  centerContainer
} from '../styles/global.module.scss'

const Header = ({activeLink}) =>
  <header>
    <div className={centerContainer}>
      <Link to="/">
        <img src={SiteLogo} alt="please include an alt" />
      </Link>
      <nav>
      {
        HeaderLinks.map(link => 
          link.url.includes("https://") ? 
            <a key={link.url} href={link.url} className={activeLink === link.text ? active : "inactive"} target="_blank" rel='noreferrer'>{link.text}</a> : 
            <Link key={link.url} to={link.url} className={activeLink === link.text ? active : "inactive"}>{link.text}</Link>)
      }
      </nav>
    </div>
  </header>

export default Header
