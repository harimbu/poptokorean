import { Link } from 'react-router-dom'
import { MdPerson } from 'react-icons/md'

export default function Header() {
  return (
    <header>
      <div className='inner'>
        <Link to={'/'}>
          <h1>🧶</h1>
        </Link>
        <Link to={'/login'}>
          <button>로그인</button>
        </Link>
      </div>
    </header>
  )
}
