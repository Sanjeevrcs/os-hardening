import { ReactNode } from "react"
import Dashboard from "../Pages/Dashboard"
import { MdOutlineDashboard } from 'react-icons/md'
import CreatePolicy from "@renderer/Pages/CreatePolicy"

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
        icon: <MdOutlineDashboard size={24} />,
    },
    {
        label: 'Create Policy',
        path: '/createPolicy',
        element: <CreatePolicy />,
        isNavItem: true,
        icon: <MdOutlineDashboard size={24} />,
    }
]

export default routes