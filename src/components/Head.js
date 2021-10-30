import * as React from "react"
import { Helmet } from 'react-helmet';

const Head = ({pageTitle}) =>
  <Helmet>
    <html lang="en" />
    <title>{pageTitle} | Environmental Enforcement Watch</title>
    <meta content='https://environmentalenforcementwatch.org/static/1c753d31dbdd94ab2b736e4da6ae656a/0a47e/eew-map.webp' property="og:image" />
    <meta property="og:description" content="A data accessibilty project from the Environmental Data Governance Initiative" />
    <meta name="description" content="A data accessibilty project from the Environmental Data Governance Initiative" />
  </Helmet>

export default Head
