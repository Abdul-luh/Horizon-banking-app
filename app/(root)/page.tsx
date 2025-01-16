import HeaderBox from '@/components/HeaderBox'
import React from 'react'

export default function page() {
  const LoggedIn = {firstName: "Abdullah" }
  return (
    <section className='home'>
      <div className="home-content">
        <HeaderBox
        type="greeting"
        title="Welcome"
        user={LoggedIn.firstName || "Guest"}
        subtext="Access and manage your account and transactions efficiently"
        />
      </div>
    </section>
  )
}
