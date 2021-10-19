import * as React from "react"
import { Link } from 'gatsby'
import {
  active,
} from '../styles/global.module.scss'

const Sidebar = ({links, pageTitle}) =>
  <aside>
      {
        links.map(link => 
          link.url.includes("http://") ?
            <React.Fragment key={link.url}><a key={link.url} href={link.url} className={link.text === pageTitle ? active : "inactive"}>{link.text}</a><hr /></React.Fragment> :
            <React.Fragment key={link.url}><Link key={link.url} to={link.url} className={link.text === pageTitle ? active : "inactive"}>{link.text}</Link><hr /></React.Fragment>)
      }
  </aside>

export default Sidebar
