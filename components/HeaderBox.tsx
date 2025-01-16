import React from 'react'

export default function HeaderBox({type = "title", title, subtext, user}: HeaderBoxProps) {
  return (
    <header className="home-header">
          <h1 className='header-box-title'>
            {title}
            {type === "greeting" && <span className='text-bankGradient'> {user}!</span>}
          </h1>
         <p className='header-box-subtext'>{subtext}</p>
    </header>
  )
}
