import { Button, Input, Space, Tag } from "antd"
import { useRef, useState } from "react";
import type { InputRef } from "antd";
import { valueType } from "antd/es/statistic/utils";

const PolicyApplicationsFrom = () => {


  const [blockedApps, setBlockedApps] = useState<valueType[]>([])
  const [appsInputValue, setAppsInputValue] = useState<valueType>()
  const appsInputRef = useRef<InputRef>(null);

  const handleAppsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppsInputValue(e.target.value)
  }
  const handleAppsInputConfirm = () => {
    if (appsInputValue && blockedApps.indexOf(appsInputValue) === -1) {
      setBlockedApps([...blockedApps, appsInputValue]);
    }
    setAppsInputValue('');
  }

  const handleClose = (removedApp: valueType) => {
    const newTags = blockedApps.filter((app) => app !== removedApp);
    setBlockedApps(newTags);
  };


  return (
    <>
      <Space.Compact style={{ width: '100%' }} size="large">
        <Input
          ref={appsInputRef}
          value={appsInputValue}
          placeholder="Type a application name to add it to blocked list"
          onChange={handleAppsInputChange}
          onBlur={handleAppsInputConfirm}
          onPressEnter={handleAppsInputConfirm}
        />
        <Button type="primary">Block</Button>
      </Space.Compact>

      <Space style={{ padding: '1rem 0', width: '100%' }} wrap>
        {blockedApps.map((app) => (
          <Tag
            style={{ margin: '0.5rem' }}
            closable
            onClose={(e) => {
              e.preventDefault();
              handleClose(app);
            }}
          >{app}</Tag>
        ))}
      </Space>
    </>
  )
}

export default PolicyApplicationsFrom
