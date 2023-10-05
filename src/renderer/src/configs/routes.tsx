import { ReactNode } from 'react'
import Dashboard from '../Pages/Dashboard'
import CreatePolicy from '../Pages/CreatePolicy'
import UserLogs from '../Pages/UserLogs'
import RemoteTroubleShooter from '../Pages/RemoteTroubleShooter'
import { MdOutlineDashboard } from 'react-icons/md'
import HardenSystems from '@renderer/Pages/HardenSystems'

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
    icon: <MdOutlineDashboard size={24} />
  },
  {
    label: 'Create Policy',
    path: '/createPolicy',
    element: <CreatePolicy />,
    isNavItem: true,
    icon: <MdOutlineDashboard size={24} />
  },
  {
    label: 'Harden Systems',
    path: '/hardenSystems',
    element: <HardenSystems />,
    isNavItem: true,
    icon: <MdOutlineDashboard size={24} />
  },
  {
    label: 'Remote TroubleShooter',
    path: '/troubleShooter',
    element: <RemoteTroubleShooter />,
    isNavItem: true,
    icon: <MdOutlineDashboard size={24} />
  },
  {
    label: 'User Logs',
    path: '/userLogs',
    element: <UserLogs />,
    isNavItem: true,
    icon: <MdOutlineDashboard size={24} />
  }
]

export default routes
