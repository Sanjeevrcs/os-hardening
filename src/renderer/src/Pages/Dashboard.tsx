import PageHeader from '@renderer/components/PageHeader'
import { MdOutlineDashboard } from 'react-icons/md'
import DashboardCard from '@renderer/components/DashboardCard'
import { List, Typography } from 'antd'
import { Avatar, Card } from 'antd'
import { dashboadCards, activitiesData } from '@renderer/data/componentsData'

const { Meta } = Card

const Dashboard = (): JSX.Element => {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subTitle="Here we have all the analytics and activities of the users"
        icon={<MdOutlineDashboard />}
      />
      <div style={{ marginTop: '1rem' }}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={dashboadCards}
          renderItem={(item) => (
            <List.Item>
              <DashboardCard title={item.title} data={item.data} isPercentage={item.isPercentage} />
            </List.Item>
          )}
        />
      </div>
      <List
        style={{ marginTop: '1rem', boxShadow: '20px 20px 34px 20px rgba(208, 216, 243, 0.6)' }}
        header={<p>Activities</p>}
        bordered
        dataSource={activitiesData}
        renderItem={(item) => (
          <Card>
            <List.Item style={{ height: '2rem' }}>
              <Meta
                avatar={<Avatar icon={item.profile} />}
                title={<Typography.Text>{item.title}</Typography.Text>}
                description={<Typography.Text>{item.description}</Typography.Text>}
              />
            </List.Item>
          </Card>
        )}
      />
    </div>
  )
}

export default Dashboard
