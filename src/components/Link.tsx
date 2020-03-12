import React from 'react'
import {Link} from 'gatsby-plugin-intl'

export default function(props) {

    return (
        <Link
            {...props}
            activeClassName='active'
            sx={{
                color: 'inherit',
                '&.active': {
                    color: 'primary',
                }
            }}
      >
          {props.children}
      </Link>
    )
}