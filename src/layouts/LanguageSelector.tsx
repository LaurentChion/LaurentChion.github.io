import React from 'react'
import {Select} from '@chakra-ui/core'
import {changeLocale, useIntl} from 'gatsby-plugin-intl'

const languages = [ "en", "fr"]

export default function(){
    const intl = useIntl()
    return <Select onChange={e => changeLocale(e.target.value)}>
            {
                languages.map(
                    (name, i) => <option selected={name===intl.locale} key={i} value={name}>{name}</option>
                )
            }
        </Select>
}