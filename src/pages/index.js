import React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";

const indexpage = ({data}) => {
    return ( 
  <Layout>
    <p className="text-slate-900 text-base ml-20 mt-6 text-blue">{data.site.siteMetadata.description}</p> 
  </Layout>
  )
}

export const query = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        description 
        }
      }
    }
`
export default indexpage