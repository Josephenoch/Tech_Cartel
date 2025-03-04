import React from 'react'

const Button = ({width, children, height, primary, ...rest}) => {
  const primaryStyles = primary? "bg-primary text-white " : "bg-white text-primary"
  return (
    <button
      className={`${primaryStyles} ${width} ${height} min-h-[38px] font-[400] rounded-[8px] text-[18px] border-[1px] border-primary outline-none cursor-pointer hover:bg-primary hover:text-white transition-all duration-300`}
      {...rest}
    >
        {children}
    </button>
  )
}

export default Button