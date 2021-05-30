import React, { useMemo } from 'react';
import { Form } from 'antd';
import * as T from './type';
import _ from 'lodash';
import UserInfoField from './user-info-field';
const getInitDefaultValue = (initValues: T.IFormInitValue) => {
  return initValues;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

interface IProps {
  setData: (value: T.IFormInitValue) => void;
}

export const initDefaultValue:T.IFormInitValue = {
  name: 'James Blues',
  age: 32,
  job: 'fe'
}
const CurrentStateForm = (props: IProps) => {
  const {setData} = props;
  const [formRef] = Form.useForm();
  const initValues = useMemo(() => getInitDefaultValue(initDefaultValue), [])
  return (
    <React.Fragment>
      <Form
        {...layout}
        form={formRef}
        initialValues={initValues}
        onValuesChange={(_, values) => {
          setData(values);
        }}
        style={{
          width: '60%',
          margin: '128px auto'
        }}
      >
        <UserInfoField />
      </Form>
    </React.Fragment>
  )
};


export default CurrentStateForm;
