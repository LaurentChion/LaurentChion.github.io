import React from "react"

import {Box, Flex, Text, Heading} from '@chakra-ui/core'

import Layout from "../layouts/DefaultLayout"
import Image from "../components/Image"
import SEO from "../components/Seo"

import { useIntl } from "gatsby-plugin-intl"
import Header from "../layouts/Header"
import ResumeChart from "../components/ResumeChart"

export default function(){
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "title" })} />
      <Flex
        justify="space-around"
        align="center"
        bg="teal.500"
      >

        <Box>
          <Heading as="h1">
            {intl.formatMessage({ id: "hello" })}
          </Heading>
          <Text>{intl.formatMessage({ id: "welcome" })}</Text>
        </Box>

        <Box style={{
              minWidth: "300px",
              maxWidth: `300px`
            }}>
          <Image />
        </Box>
      </Flex>
      
      <Header siteTitle="Laurent Chion" />

      <Box pl={4} pr={4}>
        <ResumeChart/>
      </Box>
    </Layout>
  )
}
