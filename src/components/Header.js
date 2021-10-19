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
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path></svg> */}
    </div>
  </header>

export default Header
