import { PropsWithChildren } from 'react';
import './Layout.module.css';

const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => (
    <main>{children}</main>
);

export default Layout;
