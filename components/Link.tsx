import * as React from 'react'
import RouterLink, { LinkProps } from 'next/link'
import classnames from 'clsx'
import { css } from 'otion'

const Link: React.FC<LinkProps & { className?: string }> = ({ children, className, ...props }) => {
  return (
    <RouterLink {...props}>
      <a
        className={classnames(css({
          color: 'var(--link-color)',
          ':hover': {
            color: 'var(--link-hover-color)'
          }
        }), className)}
      >
        {children}
      </a>
    </RouterLink>
  )
}

export default Link