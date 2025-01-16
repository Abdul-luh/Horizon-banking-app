import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
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

        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={5000.34}
        />

      </div>
    </section>
  )
}
