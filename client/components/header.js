import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import { Row, Col, BackTop, Input, Menu, Icon } from 'antd';
import request from 'request';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const styles = {
  stickTop:{
    position: 'fixed',
    zIndex:'98',
    backgroundColor:'#fff',
    width:'1000px',
    marginRight:'400px'
  },
  logo:{
    fontSize:'40px'
  },
  menu:{
    fontSize:'20px',
    fontWeight: 'bold',
  },
  menuItem:{
    marginRight:'50px',
    marginLeft:'50px'
  },
  shopcar:{
    fontSize:'16px',
    textAlign:'right',
    paddingTop:'20px'
  },
  bottomLine:{
    height: '1px',
    backgroundColor: '#BFBFBF',
  }
}

const Header = inject('store')(function Header (props){

  function componentDidMount(){
    console.log('header mount');
  };

  function render(){
    return (
      <div style={styles.stickTop}>
        <Row>
          <Col span={21} ><a style={styles.logo} src="/">ETON</a></Col>
          <Col span={1} style={styles.shopcar}>
            <Icon type="pay-circle-o" />
          </Col>
          <Col span={2} style={styles.shopcar}>
            <span>0 SEK</span>
          </Col>
        </Row>
        <Row>
           <Col span={24} style={styles.bottomLine}></Col>
        </Row>
        <Row >
          <Col span={20} offset={2}>
            <Menu style={styles.menu} mode="horizontal">
              <SubMenu key="sub1" title={<span><span style={styles.menuItem}>SHIRTS</span></span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu  key="sub2" title={<span><span style={styles.menuItem}>ACCESSORIES</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><span style={styles.menuItem}>OUR WORLD</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
        <BackTop/>
        {this.props.children}
      </div>
    )
  };
  return observer({
    componentDidMount,
    render
  })
});

export default Header;