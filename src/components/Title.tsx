import React, { FC } from 'react'
interface ITitle {
  title: string;
  category: string;
}

const Title: FC<ITitle> = ({ title, category }) => {

  return (
    <div className='bg-violet p-2'>
      <h1 className='text-center text-white text-[18px] font-bold'>{title}&nbsp;
        <span className='text-green'>{category}</span>
      </h1>
    </div>
  )
}

export default Title
