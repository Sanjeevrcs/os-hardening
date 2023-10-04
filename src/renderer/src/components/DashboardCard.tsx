import { Card, Space } from 'antd'
import { Progress } from 'antd'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { Typography } from 'antd'
interface CardProps {
  title: string
  data: number
  isPercentage: boolean
}

const DashboardCard = (props: CardProps): JSX.Element => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        hoverable
        style={{ width: 300, boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography level={4}>{props.title}</Typography>
          <a href="#">
            <HiOutlineInformationCircle />
          </a>
        </div>
        <Typography.Title level={2}>
          {props.data}
          {props.isPercentage ? '%' : ''}
        </Typography.Title>
        <Progress percent={props.data} showInfo={false} />
      </Card>
    </Space>
  )
}

export default DashboardCard
