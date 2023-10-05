import { Col, Form, Row, Switch } from "antd"

const PolicySecurityFrom = () => {
  return (
    <>
      <Form layout="vertical">
        <Row>
          <Col flex="6">
            <Form.Item
              label="Address Based Layout Randomization"
              name="ABLRPreference"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="IP Forwarding"
              name="IPFrowardingPreference"
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col flex="6">
            <Form.Item
              label="CRON Jobs"
              name="CRONJobsPreference"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="User GPG Key configuration"
              name="GPGKeyPreference"
            >
              <Switch />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default PolicySecurityFrom

/*
Security
  - Address Based Layout Randomization
  - IP Forwarding
  - Kernel Hardening
  - disable CRON JOBS
  - User GPG Key configuration
  - /boot partition readonly
*/