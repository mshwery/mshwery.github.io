import * as React from 'react'
import classnames from 'clsx'
import { css } from 'otion'

interface Props {
  className?: string
}

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={classnames(className, css({
      display: 'flex',
      minWidth: '100px',
      width: '100%',
      borderRadius: 'var(--border-radius)',
      backgroundColor: 'white',
      boxShadow: 'var(--elevation-mid)',
      overflow: 'hidden'
    }))} >
      {children}
    </div>
  )
}

export default Card