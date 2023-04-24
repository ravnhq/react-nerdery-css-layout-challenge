import { AsideNavBar } from '../AsideNavBar'
import { Layout } from '../Layout'
import './App.module.css'

const App = () => (
  <Layout>
    <AsideNavBar/>
    <div className="">
      <h1>Content</h1>
    </div>
    <div className="">
      <h1>Graph</h1>
    </div>
  </Layout>
)

export default App
