import './Layout.css'

function App() {
  return (
    <>
    <div className="layout-container">
      <aside className="navigation-bar">
        <nav>
          <ul>
            <li>Home</li>
            <li>My Files</li>
            <li>Recent Files</li>
            <li>Shared Files</li>
            <li>File Request</li>
            <li>Trash</li>
          </ul>
        </nav>
      </aside>


      <section className='content'>
        <div className='search-bar'>
          <input type="search" name="search" id="search" />
        </div>

        <div className='recently-used'> 
          <h2 className='primary-color title'>Recently Used</h2>
        </div>

        <div className='recent-files'> 
          <h2 className='primary-color title'>Recent Files</h2>
        </div>

        <div className='share-w-me'> 
          <h2 className='primary-color title'>Share with me</h2>
        </div>
      </section>

      <section className='widget-area'>
        <div className='widget-profile'>
          Profile stuff
        </div>
      </section>
    </div>
    </>
  )
}

export default App
