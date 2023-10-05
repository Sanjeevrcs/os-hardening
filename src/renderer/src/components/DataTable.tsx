import React, { useState } from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface'

interface DataType {
  key: React.Key
  systemName: string
  ipAddress: number
  actions: string
  time: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'System Name',
    dataIndex: 'systemName'
  },
  {
    title: 'IP Address',
    dataIndex: 'ipAddress'
  },
  {
    title: 'Actions',
    dataIndex: 'actions'
  },
  {
    title: 'Time',
    dataIndex: 'time'
  }
]

const data: DataType[] = []
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    systemName: `Edward King ${i}`,
    ipAddress: 32,
    actions: `London, Park Lane no. ${i}`,
    time: `11.11`
  })
}

const DataTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true
            }
            return false
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      }
    ]
  }

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
}

export default DataTable
