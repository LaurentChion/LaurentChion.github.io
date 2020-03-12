import React from "react"
import {Flex, ButtonGroup, Button, IconButton} from '@chakra-ui/core'
import {FaBook, FaLaptopCode} from 'react-icons/fa'
import ColorModeSwitcher from "../components/ColorModeSwitcher"

import LanguageSelector from './LanguageSelector'
import { useIntl } from "gatsby-plugin-intl"

interface Props {
  siteTitle: string
}

function Header({ siteTitle }: Props){
  const intl = useIntl()
  return (
    <header
    >
      <Flex
        p="4"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex>
          <ButtonGroup spacing={2}>
            <Button leftIcon="email" variantColor="teal" variant="outline">
              {intl.formatMessage({id:"nav.resume"})}
            </Button>
            <Button leftIcon={FaLaptopCode} variantColor="teal" variant="outline">
              {intl.formatMessage({id:"nav.portfolio"})}
            </Button>
            <Button leftIcon={FaBook} variantColor="teal" variant="outline">
              {intl.formatMessage({id:"nav.papers"})}
            </Button>
          </ButtonGroup>
        </Flex>

        <Flex direction="column">
          <Flex>
            <LanguageSelector />
            <ColorModeSwitcher/>
          </Flex>
        </Flex>
      </Flex>
    </header>
  )
}

export default Header
