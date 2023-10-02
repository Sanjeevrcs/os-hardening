import { ReactNode } from "react"
import Dashboard from "../Pages/Dashboard"
import { MdOutlineDashboard } from 'react-icons/md'

interface routesType {
    label: string,
    path: string,
    element: JSX.Element,
    isNavItem: boolean,
    icon?: ReactNode,
}

const routes: routesType[] = [
    {
        label: 'Dashboard',
        path: '/',
        element: <Dashboard />,
        isNavItem: true,
        icon: <MdOutlineDashboard />,
    },
    {
        label: 'dis',
        path: '/dis',
        element: <Dashboard />,
        isNavItem: true,
        icon: <MdOutlineDashboard />,
    }
]

export default routes