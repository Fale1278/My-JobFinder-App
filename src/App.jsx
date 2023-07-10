import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/Search/Search'
import JobDiv from './Components/JobDiv/JobDiv'
import ValueDiv from './Components/ValueDiv/ValueDiv'
import Footer from './Components/FooterDiv/Footer'
const App = () => {
  return (
    <div className=' w-[85%] m-auto '>
      <NavBar />
      <Search />
      <JobDiv />
      <ValueDiv />
      <Footer />
    </div>
  )
}

export default App