import * as React from "react"
import { Link } from 'gatsby'

const HeaderItem = ({link, activeLink}) =>
  <div className='headerItem'>
    <Link key={link.url} to={link.url} className={activeLink === link.text ? 'active' : "inactive"}>
      {link.text}
    </Link>
    
    {
      link.sublinks ? <ul>{link.sublinks.map(sublink => <Link to={sublink.url}><li className='headerSublink'>{sublink.text}</li></Link>)}</ul> : null
    }
    
  </div>

export default HeaderItem
