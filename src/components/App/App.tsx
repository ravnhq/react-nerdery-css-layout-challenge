import { AsideNavBar } from '../AsideNavBar'
import { Dashboard } from '../Dashboard'
import { Layout } from '../Layout'
import './App.module.css'

const App = () => (
  <Layout>
    <AsideNavBar/>
    <Dashboard />
    <div className="">
      <h1>Graph</h1>
    </div>
  </Layout>
)

export default App
