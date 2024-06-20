import { db } from '../firebase'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import YouTube from 'react-youtube'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Write() {
  const [image, setImage] = useState('')
  const [videoID, setVideoID] = useState('')
  const [title, setTitle] = useState('')
  const [singer, setSinger] = useState('')
  const [text, setText] = useState('')

  const navigate = useNavigate()

  const opts = {
    width: '560',
    playerVars: {
      autoplay: 1,
    },
  }

  async function write() {
    if (image == '' || videoID == '' || title == '' || singer == '' || text == '') return
    const docRef = doc(collection(db, 'songs'))
    const data = {
      id: docRef.id,
      title: title,
      singer: singer,
      image: image,
      movieID: videoID,
      text: text,
      date: serverTimestamp(),
    }

    // later...
    await setDoc(docRef, data)
    navigate('/')
  }

  return (
    <div className='song_contents'>
      <div className='left_input'>
        <input type='text' placeholder='이미지 url' value={image} onChange={e => setImage(e.target.value)} />
        <div className='image'>
          <img src={image} alt='' />
        </div>
        <input type='text' placeholder='youtube video ID' value={videoID} onChange={e => setVideoID(e.target.value)} />
        <YouTube
          videoId={videoID}
          opts={opts}
          onEnd={e => {
            e.target.stopVideo(0)
          }}
        />
      </div>
      <div className='right_input'>
        <input type='text' placeholder='제목' value={title} onChange={e => setTitle(e.target.value)} />
        <input type='text' placeholder='가수' value={singer} onChange={e => setSinger(e.target.value)} />
        <ReactQuill theme='snow' style={{ height: '600px' }} value={text} onChange={setText} />
        <button className='do_write' onClick={write}>
          작성하기
        </button>
      </div>
    </div>
  )
}
