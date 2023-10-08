import PageHeader from '@renderer/components/PageHeader'
import { troubleShooterCards, troubleShootOptions } from '@renderer/data/TroubleShooterData'
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
      {isSelected && <></>}
    </>
  )
}

export default RemoteTroubleShooter
