import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <header>
        <div className='inner'>
          <h1>🎈 팝송가사 </h1>
          <input type='text' placeholder='Search song...' />
        </div>
      </header>

      <main>
        <ul>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>
              {' '}
              And I wish time would slow down. So I could keep your And I wish time would slow down. So I could keep
              your...
            </div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
          <li>
            <div className='thumb'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYYzsaeLVnwKEXkyfZp-Jbgr5oouyK3Eu3g&s'
                alt=''
              />
            </div>
            <div className='title'>My Funny Valentine</div>
            <div className='singer'>Chet Baker</div>
            <div className='text'>And I wish time would slow down. So I could keep your...</div>
            <button>보기</button>
          </li>
        </ul>
      </main>

      <footer>
        <div className='inner'>
          <span>(c) 2024. harimbu@gmail.com</span>
          <div className='footer_menu'>
            <span>about</span>
            <span>login</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
