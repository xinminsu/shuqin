import React, { useState } from 'react';
import type { NextPageWithLayout } from './_app'
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import ULayout from '../components/ulayout'
import Sidebar from '../components/sidebar'

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '实验编号',
    dataIndex: 'index',
  },
  {
    title: '实验名称',
    dataIndex: 'name',
  },
  {
    title: '实验类型',
    dataIndex: 'type',
  },
  {
    title: '实验位置',
    dataIndex: 'place',
  },{
    title: '实验材料',
    dataIndex: 'material',
  },{
    title: '材料厂商',
    dataIndex: 'factory',
  },{
    title: '实验位置',
    dataIndex: 'location',
  },{
    title: '实验人',
    dataIndex: 'tester',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const ExperimentalList: NextPageWithLayout = () => {

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <section>
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    </section>
  )
}

export default ExperimentalList

ExperimentalList.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ULayout>
      <Sidebar />
      {page}
    </ULayout>
  )
}
