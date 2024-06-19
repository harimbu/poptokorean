import { Link } from 'react-router-dom'
import { MdPerson } from 'react-icons/md'

export default function Header() {
  return (
    <header>
      <div className='inner'>
        <Link to={'/'}>
          <h1>🎃🧶👢</h1>
        </Link>
        <MdPerson className='login_btn' />
      </div>
    </header>
  )
}
