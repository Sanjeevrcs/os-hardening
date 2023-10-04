import { Card, Space } from 'antd'
import { Typography } from 'antd'

interface TroubleShooterCardProps {
  title: string
  description: string
}

const TroubleShooterCard = (props: TroubleShooterCardProps): JSX.Element => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        hoverable
        style={{
          width: 250,
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
          padding: '3px'
        }}
        title={
          <Typography level={4} strong>
            {props.title}
          </Typography>
        }
      >
        <Typography level={4}>{props.description}</Typography>
      </Card>
    </Space>
  )
}

export default TroubleShooterCard
