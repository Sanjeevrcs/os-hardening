import PageHeader from '@renderer/components/PageHeader'
import { Button, Card, Form, Input, Select, SelectProps } from 'antd'

const HardenSystems = () => {
  const options: SelectProps['options'] = [
    {
      label: '10.1.75.43',
      value: '10.1.75.43'
    },
    {
      label: '10.1.75.44',
      value: '10.1.75.44'
    },
    {
      label: '10.1.75.45',
      value: '10.1.75.45'
    }
  ]

  return (
    <div>
      <PageHeader
        title="Harden Systems"
        subTitle="Here you can harden your system by applying the policy you created earlier"
      />
      <Card
        style={{
          padding: '3px'
        }}
      >
        <Form name="Policy Apply" layout="vertical" autoComplete="off">
          <Form.Item label="Select a Policy" name="selctPolicy">
            <Select placeholder="Select a Policy">
              <Select.Option value="Policy 1">Developer Policy</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Enter IP Address or Hostname" name="ipAddress">
            <Select mode="multiple" placeholder="Please select" options={options} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Apply Policy
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default HardenSystems
