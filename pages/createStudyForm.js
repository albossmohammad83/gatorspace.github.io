import React from "react";
import { Form, Input, Button,Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';



export default function createEventForm() {
  const [sStorage, setSStorage] = React.useState(null);
  const [lStorage, setLStorage] = React.useState(null);
  React.useEffect(() => {
    if (!sessionStorage.getItem('user') && localStorage.getItem('user')) {
      sessionStorage.setItem('user', localStorage.getItem('user'));
    }
    setSStorage(sessionStorage.getItem('user'));
    setLStorage(localStorage.getItem('user'));
  }, [sStorage, lStorage]);

  return (
     <Form id="form" className="form">
          <h1>Create an Event here!</h1>
          <Form.Item>
            <Input
              type="text"
              id="username"
              placeholder="Class name"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="text"
              id="EventDescrition"
              size="large"
              placeholder="subject to study"
            />
          </Form.Item>
          <Form.Item label="Add image">
        <Form.Item name="dragger" valuePropName="fileList" noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              id="submit"
              className="registration-form-button"
            >
              Create event
            </Button>
          </Form.Item>
        </Form>
  );
}
