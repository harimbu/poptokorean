import { Link } from 'react-router-dom'
import { MdInfo, MdCopyright } from 'react-icons/md'

export default function Footer() {
  return (
    <footer>
      <div className='inner'>
        <div className='copyright'>
          <MdCopyright /> 2024 harimbu@gmail.com
        </div>
        <Link to={'/about'} className='info_btn'>
          <MdInfo />
        </Link>
      </div>
    </footer>
  )
}
