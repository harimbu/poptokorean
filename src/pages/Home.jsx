import SongItem from '../components/SongItem'
import { MdAdd } from 'react-icons/md'

export default function Home({ songs }) {
  return (
    <>
      <main>
        <div className='btn_area'>
          <div className='write_btn'>
            <MdAdd />
          </div>
        </div>
        <ul className='song_list'>
          {songs.map(song => (
            <SongItem song={song} key={song.id} />
          ))}
        </ul>
      </main>
    </>
  )
}
