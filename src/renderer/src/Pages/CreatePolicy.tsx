import PageHeader from '@renderer/components/PageHeader'
import { MdOutlineDashboard } from 'react-icons/md'
import { Button, Col, Collapse, Form, Input, Row, theme } from 'antd'
import collapseItems from '@renderer/data/createPolicyCollapseData'

const CreatePolicy = (): JSX.Element => {
  const { token } = theme.useToken()
  return (
    <div>
      <PageHeader
        title="Create Policy"
        subTitle="Here we have all the analytics and activities of the users"
        icon={<MdOutlineDashboard />}
      />
      <Collapse
        accordion
        items={collapseItems}
        style={{ background: token.colorBgContainer, border: 'none', borderRadius: 'none' }}
      />
      <br />
      <Form layout="vertical">
        <Row>
          <Col span="12" offset="6" >
            <Form.Item
              label="Enter Policy Name"
              name="policyName"
            >
              <Input />
            </Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">Create Policy</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default CreatePolicy
