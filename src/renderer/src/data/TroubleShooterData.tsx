import { DefaultOptionType } from 'antd/es/select'

export const TroubleShooterCards: { title: string; description: string }[] = [
  {
    title: 'Security Process Status',
    description: 'Troubleshoot connectivity issues '
  },
  {
    title: 'Network Process Status',
    description: 'Troubleshoot Network issues '
  },
  {
    title: 'Disk Process Status',
    description: 'Troubleshoot Disk issues '
  },
  {
    title: 'User Process Status',
    description: 'Troubleshoot User issues '
  },
  {
    title: 'Firewall Process Status',
    description: 'Troubleshoot Firewall issues '
  },
  {
    title: 'Antivirus Process Status',
    description: 'Troubleshoot Antivirus '
  }
]

export const troubleShootOptions: { label: string; value: string }[] = [
  {
    label: '',
    value: ''
  },
  {
    label: 'Network',
    value: 'network'
  },
  {
    label: 'Security',
    value: 'security'
  }
]
