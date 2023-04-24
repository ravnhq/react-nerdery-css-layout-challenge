import { PropsWithChildren } from "react";
import './index.css'


const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => (
    <main>
        { children }
    </main>
)

export default Layout