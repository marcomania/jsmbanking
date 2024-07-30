import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstName: "Marco", lastName: "Untiveros", email:"marcow85m@gmail.com" }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type= "greeting" 
            title= "Welcome" 
            user= {loggedIn.firstName || "Guest"} 
            subtext= "Access and manage your transactions efficiently."
          />
          <TotalBalanceBox
            accounts= {[]}
            totalBanks= {1} 
            totalCurrentBalance= {1250.20}
          />
        </header>

        RECENT TRANSACTIONS 
      </div>
      <RightSidebar 
        user={loggedIn} 
        transactions={[]} 
        banks={[{ currentBalance: 124.50 }, {currentBalance: 200.50 }]}
      />
    </section> 
  )
}

export default Home