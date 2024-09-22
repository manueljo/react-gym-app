import React from 'react'

const Button = ({text, func}) => {
  return (
    <button onClick={func} className="px-8 py-4 rounded-md border border-blue-400 border-solid border-[2px] bg-slate-950 blueshadow duration-200 mx-auto">
        <p>{text}</p>
      </button>
  )
}

export default Button