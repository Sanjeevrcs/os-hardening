import PolicyApplicationsFrom from '@renderer/Pages/PolicyApplicationsFrom'
import PolicyBasicsFrom from '@renderer/Pages/PolicyBasicsFrom'
import { CollapseProps } from 'antd'

const collapseItems: CollapseProps['items'] = [
  {
    key: '0',
    label: <h2>Basics</h2>,
    children: <PolicyBasicsFrom />
  },
  {
    key: '1',
    label: <h2>Applications</h2>,
    children: <PolicyApplicationsFrom />
  },
  {
    key: '2',
    label: <h2>Services</h2>,
    children: <p>text</p>
  }
]

export default collapseItems
