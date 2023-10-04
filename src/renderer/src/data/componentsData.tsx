import { ReactNode } from 'react'
import { UserOutlined } from '@ant-design/icons'

export const dashboadCards: { title: string; data: number; isPercentage: boolean }[] = [
  {
    title: 'Security Process Status',
    data: 70,
    isPercentage: true
  },
  {
    title: 'Logins',
    data: 70,
    isPercentage: true
  },
  {
    title: 'Security Process Status',
    data: 70,
    isPercentage: true
  },
  {
    title: 'Security Process Status',
    data: 70,
    isPercentage: true
  }
]
export const activitiesData: { title: string; description: string; profile: ReactNode }[] = [
  {
    title: 'Security Process Status',
    description: '3 hours ago',
    profile: <UserOutlined />
  },
  {
    title: 'Security Process Status',
    description: '3 hours ago',
    profile: <UserOutlined />
  },
  {
    title: 'Security Process Status',
    description: '3 hours ago',
    profile: <UserOutlined />
  },
  {
    title: 'Security Process Status',
    description: '3 hours ago',
    profile: <UserOutlined />
  }
]
