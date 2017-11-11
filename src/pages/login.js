import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import style from '@/style/login.scss';

const FormItem = Form.Item;

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className={style.header}>
          PLEASE LOG IN
        </div>
        <div className="body">
          <Row>
            <Col span={12}>
              this is left side
            </Col>
            <Col span={12}>
              <div className={style['login-form']}>
                <Form>
                  <FormItem>
                    <Input type="text"/>
                  </FormItem>
                  <FormItem>
                    <Input type="password"/>
                  </FormItem>
                  <FormItem>
                    <Button type="primary">
                      LOG IN
                    </Button>
                  </FormItem>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
