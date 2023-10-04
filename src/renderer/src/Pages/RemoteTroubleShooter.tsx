import PageHeader from '@renderer/components/PageHeader'
import TroubleShooterCard from '@renderer/components/TroubleShooterCard'
import { TroubleShooterCards } from '@renderer/data/componentsData'
import { List, Input } from 'antd'

const { Search } = Input

const RemoteTroubleShooter = (): JSX.Element => {
  return (
    <>
      <PageHeader
        title="Remote TroubleShooter"
        subTitle="Troubleshoot issues in the systems over the network"
      />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
        <Search
          placeholder="input search text"
          style={{ width: '40rem' }}
          allowClear
          enterButton="Search"
          size="large"
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={TroubleShooterCards}
          renderItem={(item) => (
            <List.Item>
              <TroubleShooterCard title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </div>
    </>
  )
}

export default RemoteTroubleShooter
