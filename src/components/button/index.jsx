import React, { createElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({
  as: Component = 'button',
  size = 'normal',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  return createElement(
    Component,
    {
      type: 'button',
      className: classNames(
        'rounded-full flex items-center justify-center font-bold transition-all',
        {
          'px-4 h-8 text-sm': size === 'small',
          'px-4 h-9': size === 'normal',
          'px-4 text-[1.063rem] h-[3.25rem] w-full': size === 'large',
          'bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white': variant === 'primary',
          'bg-[#eff3f4] hover:bg-[#d7dbdc] text-black': variant === 'white',
          'border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]':
            variant === 'white-outline',
        },
        className
      ),
      ...props,
    },
    children
  );
}

Button.propTypes = {
  as: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  as: 'button',
  size: 'normal',
  variant: 'primary',
};
