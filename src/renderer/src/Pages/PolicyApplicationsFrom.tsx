import { Input } from 'antd'

const { Search } = Input
import { Space, Tag, List } from 'antd'
import { blockTagData } from '@renderer/data/componentsData'

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault()
  console.log('Clicked! But prevent default.')
}

const PolicyApplicationsFrom = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Search
          placeholder="input search text"
          style={{ width: '40rem' }}
          allowClear
          enterButton="Block"
          size="large"
        />
      </div>
      <Space style={{ margin: '1rem' }}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={blockTagData}
          renderItem={(item) => (
            <List.Item>
              <Tag closeIcon onClose={preventDefault}>
                {item.title}
              </Tag>
            </List.Item>
          )}
        />
      </Space>
    </>
  )
}

export default PolicyApplicationsFrom
