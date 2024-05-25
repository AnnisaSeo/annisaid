import React from "react"
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  
    const data = useStaticQuery(graphql`
    query {
        site {
        siteMetadata {
        author
            }
        }
    }
`)

    return (
        <footer className="text-center py-96">
           <p>©{data.site.siteMetadata.author} - 2024</p>
        </footer>
    )
}

export default Footer