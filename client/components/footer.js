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
    paddingTop:'30px',
    paddingBottom:'30px'
  },
  menu: {
    fontSize:'20px',
  },
  ul:{
    textAlign:'center',
    paddingTop:'30px',
    paddingBottom:'30px'
  },
  li:{
    fontSize:'20px',
    fontWeight:'bold'
  },
  subscribe:{
    height:'25px',
    paddingTop:'10px',
    paddingBottom:'30px'
  },
  supportlog:{
    float:'left',
    width:'40px',
    height:'40px',
    marginTop:'20px',
    marginLeft:'30px',
    marginRight:'30px',
  },
  brand:{
    paddingTop:'30px',
    paddingBottom:'20px'
  },
  bottomLine:{
    height: '1px',
    backgroundColor: '#BFBFBF'
  },
  copyright:{
    fontSize:'14px',
    textAlign:'center',
    paddingTop:'10px',
    paddingBottom:'10px'
  }
}
const Mymenu = (
  <Menu>
    <Menu.Item >
      <a style={styles.menu} href="http://www.alipay.com/">China</a>
    </Menu.Item>
    <Menu.Item>
      <a style={styles.menu} href="http://www.taobao.com/">US</a>
    </Menu.Item>
    <Menu.Item>
      <a style={styles.menu} href="http://www.tmall.com/">UK</a>
    </Menu.Item>
  </Menu>
)
    
const Footer = React.createClass ({
  render(){
    return (
      <footer>
        <Row style={styles.link}>
          <Col span={4} offset={6}>Stores</Col>
          <Col span={4}>Login</Col>
          <Col span={4}><Dropdown overlay={Mymenu}>
            <a className="ant-dropdown-link" href="/">Sweden <Icon type="down" /></a>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col span={18} offset={2}><Input placeholder="Your Email" /></Col>
          <Col span={2}><Button type="primary" htmlType="submit">SUBSCRIBE</Button></Col>
        </Row>
        <Row>
          <Col stype={styles.social}span={8} offset={8}>
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
        <Row>
           <Col span={24} style={styles.bottomLine}></Col>
        </Row>
        <Row style={styles.brand}>
          <Col span={3} offset={5}><img src="http://fakeimg.pl/150x65/"/></Col>
          <Col span={3} offset={1}><img src="http://fakeimg.pl/150x65/"/></Col>
          <Col span={3} offset={1}><img src="http://fakeimg.pl/150x65/"/></Col>
          <Col span={3} offset={1}><img src="http://fakeimg.pl/150x65/"/></Col>
        </Row>
        <Row>
          <Col style={styles.copyright} span={24}>&#169;2015 Eton All rights reserved</Col>
        </Row>
      </footer>
    )
  }
});
export default Footer ;