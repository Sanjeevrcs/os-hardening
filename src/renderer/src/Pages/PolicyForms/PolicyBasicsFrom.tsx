import { Col, Form, Input, Row, Select, Switch } from "antd"
import { useState } from "react"

const PolicyBasicsFrom = () => {
  const [createUserPreference, setCreateUserPreference] = useState<Boolean>(true)
  const [grubPasswordPreference, setGrubPasswordPreference] = useState<Boolean>(true)
  return (
    <>
      <Form layout="vertical">
        <Row>
          <Col flex="auto" >
            <Form.Item
              label="Do you want to create a user ?"
              name="createUserPreference"
            >
              <Switch onChange={() => setCreateUserPreference(!createUserPreference)} />
            </Form.Item>

            <Form.Item
              label="Disable USB Ports"
              name="usbPortsPreference">
              <Switch />
            </Form.Item>
            <Form.Item
              label="Disable Root Login"
              name="rootLoginPreference">
              <Switch />
            </Form.Item>
          </Col>
          <Col flex="auto" >
            <Form.Item
              label="Do you want to set a GRUB Password"
              name="grubPasswordPreference"
            >
              <Switch onChange={() => setGrubPasswordPreference(!grubPasswordPreference)} />
            </Form.Item>

            <Form.Item
              label="Enable MAC Randomization"
              name="macRandomizationPreference">
              <Switch />

            </Form.Item>
            <Form.Item
              label="Is a Sudoer"
              name="sudoerPreference"
            >
              <Switch />
            </Form.Item>
          </Col>

          <Col flex="auto">
            <Form.Item
              label="Username"
              name="username"
            >
              <Input disabled={createUserPreference} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
            >
              <Input type="password" disabled={createUserPreference} />
            </Form.Item>
            <Form.Item
              label="User Group"
              name="userGroup"
            >
              <Select disabled={createUserPreference} >
                <Select.Option value="admin">Admin</Select.Option>
                <Select.Option value="user">User</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="GRUB Password"
              name="grubPassword"
            >
              <Input name="grubPassword" type="password" disabled={grubPasswordPreference} />
            </Form.Item>
          </Col>
        </Row >
      </Form>
    </>
  )
}

export default PolicyBasicsFrom
