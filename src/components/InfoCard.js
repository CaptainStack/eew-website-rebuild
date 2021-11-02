import * as React from "react"
import Map from "../images/eew-map.png"

const InfoCard = ({title, link, image, description}) =>
  <a href='https://www.google.com' target='_blank' rel='noopener'>
    <div className='InfoCard'>
        <h1>{title}</h1>
        {image ? <img src={Map} /> : null}
        <p>{description}</p>
    </div>
  </a>

export default InfoCard
