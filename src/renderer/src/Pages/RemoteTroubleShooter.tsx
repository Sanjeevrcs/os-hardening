import PageHeader from '@renderer/components/PageHeader'
import TroubleShooterCard from '@renderer/components/TroubleShooterCard'
import { TroubleShooterCards, troubleShootOptions } from '@renderer/data/TroubleShooterData'
import { List, Select, SelectProps } from 'antd'
import { useState, SetStateAction } from 'react'
const options: SelectProps['options'] = troubleShootOptions

const RemoteTroubleShooter = (): JSX.Element => {
  const [isSelected, setisSelected] = useState<SetStateAction<string>>('')
  const handleChange = (value: SetStateAction<string>) => {
    setisSelected(value)
  }
  return (
    <>
      <PageHeader
        title="Remote TroubleShooter"
        subTitle="Troubleshoot issues in the systems over the network"
      />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
        <Select
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          onChange={handleChange}
          options={options}
          size="large"
        />
      </div>
      {isSelected && (
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
      )}
    </>
  )
}

export default RemoteTroubleShooter
