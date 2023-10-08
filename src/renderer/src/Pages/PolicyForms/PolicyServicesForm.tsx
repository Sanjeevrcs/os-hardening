import { Button, Input, InputRef, Space, Tag } from 'antd'
import { useRef, useState } from 'react'
import { valueType } from 'antd/es/statistic/utils'

const PolicyServicesForm = () => {
  const [blockedServices, setBlockedServices] = useState<valueType[]>([])
  const [servicesInputValue, setServicesInputValue] = useState<valueType>()
  const servicesInputRef = useRef<InputRef>(null)

  const handleServicesInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServicesInputValue(e.target.value)
  }
  const handleServicesInputConfirm = () => {
    if (servicesInputValue && blockedServices.indexOf(servicesInputValue) === -1) {
      setBlockedServices([...blockedServices, servicesInputValue])
    }
    setServicesInputValue('')
  }

  const handleClose = (removedservice: valueType) => {
    const newTags = blockedServices.filter((service) => service !== removedservice)
    setBlockedServices(newTags)
  }

  return (
    <>
      <Space.Compact style={{ width: '100%' }} size="large">
        <Input
          ref={servicesInputRef}
          value={servicesInputValue}
          placeholder="Type a service name to add it to blocked list"
          onChange={handleServicesInputChange}
          onBlur={handleServicesInputConfirm}
          onPressEnter={handleServicesInputConfirm}
        />
        <Button type="primary">Block</Button>
      </Space.Compact>

      <Space style={{ padding: '1rem 0', width: '100%' }} wrap>
        {blockedServices.map((service) => (
          <Tag
            style={{ margin: '0.5rem' }}
            closable
            onClose={(e) => {
              e.preventDefault()
              handleClose(service)
            }}
          >
            {service}
          </Tag>
        ))}
      </Space>
    </>
  )
}

export default PolicyServicesForm
