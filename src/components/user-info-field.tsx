import React from 'react';
import { Form, Input, Select } from 'antd';
const FormField = Form.Item;

const JobSelectOpts = [
  {
    label: '前端开发工程师',
    value: 'fe'
  },
  {
    label: '后端开发工程师',
    value: 'be'
  },
  {
    label: '产品经理',
    value: 'pm'
  },
  {
    label: 'UE',
    value: 'UI 设计工程师'
  }
]


const UserInfoField = () => {
  return (
    <React.Fragment>
      <FormField
        name="name"
        label="姓名"
      >
        <Input />
      </FormField>
      <FormField
        name="age"
        label="年龄"
      >
        <Input />
      </FormField>
      <FormField
        name="job"
        label="工作"
      >
        <Select
          options={JobSelectOpts}
        />
      </FormField>
    </React.Fragment>
  )
}

export default UserInfoField;