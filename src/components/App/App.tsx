import { AsideNavBar } from '../AsideNavBar';
import { Dashboard } from '../Dashboard';
import { Layout } from '../Layout';
import { Summary } from '../Summary';
import './App.module.css';

const App = () => (
    <Layout>
        <AsideNavBar />
        <Dashboard />
        <Summary />
    </Layout>
);

export default App;
