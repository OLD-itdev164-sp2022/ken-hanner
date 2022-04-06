import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Box, Card, Image, Heading } from "rebass"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem } from "../components/List"

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Grid>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <Card key={edge.node.id} width={256} p={3}>
          <Link to={edge.node.slug}>
            <GatsbyImage image={edge.node.heroImage.gatsbyImageData} alt="hero image" />
          </Link>
          <Heading>{edge.node.title}</Heading>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </Card>
      ))
    }
    </Grid>
  </Layout>
)

export default IndexPage

//fixed issue in Contentful where images were returning null value by publishing 
//drafted photos in published blog content, then republishing blog content
export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 960
            )
          }
        }
      }
    }
  }
`