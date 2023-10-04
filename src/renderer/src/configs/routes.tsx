import { ReactNode } from 'react'
import Dashboard from '../Pages/Dashboard'
import CreatePolicy from '../Pages/CreatePolicy'
import { MdOutlineDashboard } from 'react-icons/md'

interface routesType {
  label: string
  path: string
  element: JSX.Element
  isNavItem: boolean
  icon?: ReactNode
}

const routes: routesType[] = [
  {
    label: 'Dashboard',
    path: '/',
    element: <Dashboard />,
    isNavItem: true,
    icon: <MdOutlineDashboard />
  },
  {
    label: 'CreatePolicy',
    path: '/CreatePolicy',
    element: <CreatePolicy />,
    isNavItem: true,
    icon: <MdOutlineDashboard />
  }
]

export default routes
