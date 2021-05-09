import PropTypes from 'prop-types'
import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CCardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CCardFooter = forwardRef<HTMLDivElement, CCardFooterProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-footer', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CCardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CCardFooter.displayName = 'CCardFooter'