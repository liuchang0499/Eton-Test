import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Form, Menu, Icon, Switch, Col, Row, Dropdown, Input, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

const styles = {
  link:{
    fontSize:'20px',
  },
  menu: {
    fontSize:'20px',
  },
  ul:{
    textAlign:'center'
  },
  li:{
    fontSize:'20px',
    fontWeight:'bold'
  },
  supportlog:{
    float:'left',
    width:'40px',
    height:'40px',
    marginLeft:'20px',
    marginRight:'20px'
  }
}

const Mymenu = (
      <Menu>
        <Menu.Item >
          <a style={styles.menu} target="_blank" href="http://www.alipay.com/">China</a>
        </Menu.Item>
        <Menu.Item>
          <a style={styles.menu} target="_blank" href="http://www.taobao.com/">US</a>
        </Menu.Item>
        <Menu.Item>
          <a style={styles.menu} target="_blank" href="http://www.tmall.com/">UK</a>
        </Menu.Item>
      </Menu>
    )
    
const Footer = React.createClass ({
  render(){
    return (
      <footer>
      <Row style={styles.link}>
        <Col span={3} offset={8}>Stores</Col>
        <Col span={3}>Login</Col>
        <Col span={3}><Dropdown overlay={Mymenu}>
          <a className="ant-dropdown-link" href="/">Sweden <Icon type="down" /></a>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col span={4} offset={8}><Input addonBefore={<Icon type="user" />} placeholder="Username" /></Col>
        <Col span={2}><Button type="primary" htmlType="submit"> Log in </Button></Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <img style={styles.supportlog} src='/images/facebook.png'/>
          <img style={styles.supportlog} src='/images/parking.png' />
          <img style={styles.supportlog} src='/images/twitter.png'/>
        </Col>
      </Row>
      <Row>
      <Col span1={24}>
        <ul style={styles.ul}>
          <li style={styles.li}> CUSTOMER CARE</li>
          <li style={styles.li}> PRESS</li>
          <li style={styles.li}> PR AGENCIES</li>
          <li style={styles.li}> CAREER</li>
          <li style={styles.li}> RETAILERS</li>
        </ul>
      </Col>
      </Row>
      <Row >
        <Col span={3} offset={5}><img src="http://fakeimg.pl/150x65/"/></Col>
        <Col span={3} offset={1}><img src="http://fakeimg.pl/150x65/"/></Col>
        <Col span={3} offset={1}><img src="http://fakeimg.pl/150x65/"/></Col>
        <Col span={3} offset={1}><img src="http://fakeimg.pl/150x65/"/></Col>
      </Row>
      <Row>
        <Col span={4} offset={10}>@2015 Eton All rights reserved</Col>
      </Row>
      </footer>
    )
  }
});
export default Footer ;