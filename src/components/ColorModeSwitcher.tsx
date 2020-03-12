import React from 'react'
import {IconButton, useColorMode} from '@chakra-ui/core'
import {FaMoon, FaSun} from "react-icons/fa"
export default function(){
    const {colorMode, toggleColorMode} = useColorMode()
    const opposite = colorMode === "light" ? "dark" : "light"
    const icon = colorMode === "light" ? FaMoon : FaSun
    
    return <IconButton
            aria-label={`Switch to ${opposite} mode`}
            icon={icon}
            onClick={toggleColorMode}
        />
}