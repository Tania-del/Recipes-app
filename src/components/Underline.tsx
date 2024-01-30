import React, { FC } from 'react'
interface IUnderline {
    className: string;
}
const Underline: FC<IUnderline> = ({ className }) => {
  return (
               <div className={className}></div>

  )
}

export default Underline
