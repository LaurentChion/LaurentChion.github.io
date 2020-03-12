import React from "react"

import Layout from "../layouts/DefaultLayout"
import SEO from "../components/Seo"
import { useIntl } from "gatsby-plugin-intl"

export default function(){
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({id:"notfound.error"})}/>
      <h1>{intl.formatMessage({id:"notfound.header"})}</h1>
      <p>{intl.formatMessage({id:"notfound.description"})}</p>
    </Layout>
  )  
} 
