import * as React from "react"
import { Link } from 'gatsby'
import { HeaderLinks } from '../helpers/constants'
import HeaderItem from '../components/HeaderItem'
import SiteLogo from "../images/eew-logo.png"
import {
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
        HeaderLinks.map(link => <HeaderItem link={link} activeLink={activeLink} />)
      }
      </nav>
    </div>
  </header>

export default Header
