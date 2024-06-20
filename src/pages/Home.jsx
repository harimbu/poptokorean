import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='wrap'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
