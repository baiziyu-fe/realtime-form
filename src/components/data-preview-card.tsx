import React from 'react';
import { Descriptions, Progress, Tag } from 'antd';
import * as T from './type';
import { padEnd } from 'lodash';

interface IProps {
  formData: T.IFormInitValue;
}

const DataPreviewCard = (props: IProps) => {
  const {
    name, age, job
  } = props.formData;
  return (
    <Descriptions
      style={{
        width: '60%',
        margin: '0 auto',
        border: '1px solid #aaa',
        padding: '10px'
      }}
      title="User Info">
      <Descriptions.Item label="UserName">{name}</Descriptions.Item>
      <Descriptions.Item label="Job Type">
        {
          ['be', 'fe'].includes(job) ? (
            <Tag color="magenta">研发</Tag>
          ) : (
              <Tag color="orange">产品</Tag>
            )
        }
      </Descriptions.Item>
      <Descriptions.Item label="age">{age}</Descriptions.Item>
      <Descriptions.Item label="Remark">{job}</Descriptions.Item>
      <Descriptions.Item label="age process">
        <Progress percent={age} steps={10} />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default DataPreviewCard;