import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import theme from '../themes/index'

import {Link, ThemeProvider, CSSReset, ColorModeProvider, Flex} from '@chakra-ui/core'

import Header from "./Header"
import { useIntl } from "gatsby-plugin-intl"


const Layout = ({ children }) => {
  
  const intl = useIntl()

  return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset/>
          <main>{children}</main>
          <Flex align="center" justify="center" pb={4}>
            <footer>
              © {new Date().getFullYear()}, {intl.formatMessage({id:"built_with"})}
              {` `}
              <Link
                href="https://www.gatsbyjs.org"
                >
                Gatsby
              </Link>
            </footer>
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
  )
}


export default function({children}) {
  return (
      <Layout>
        {children}
      </Layout>
  )
}
