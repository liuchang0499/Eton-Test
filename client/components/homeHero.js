import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Collapse, Col, Row, Button } from 'antd';
const Panel = Collapse.Panel;
const des = 'this is a good shirt';
const styles = {
  title:{
    fontSize:'24px',
    fontWeight: 'bold',
    textAlign:'center'
  },
  des:{
    fontSize:'24px',
    fontWeight: 'bold',
    textAlign:'center'
  }
};

const FullscreenSpots = function FullscreenSpots(props) {
  function render() {
    return (
      <Row>
        <Col span={24}><img src={props.imgurl}/></Col>
        <Col span={24} style={styles.title}>{props.title}</Col>
        <Col span={24} style={styles.des}>{props.des}</Col>
      </Row>
    )
  }
  return render();
}

const FullscreenTop = function FullscreenTop(props) {
  function render() {
    return (
      <Row>
        <Col span={24}><img src="http://fakeimg.pl/1200x725/"/></Col>
        <Col span={24} style={styles.title}>{props.title}</Col>
        <Col span={24} style={styles.des}>{props.des}</Col>
        <Col span={8} offset={8}><Button></Button></Col>
      </Row>
    )
  }
  return render();
}


const HomeHero = React.createClass ({
  render(){
    return (
      <div style= {{ 'paddingBottom': 100, 'backgroundColor': '#ECECEC' }}>
       <Row type="flex" justify="center">
          <Col><FullscreenTop title="Spring / Summer 16" des={des} /></Col>
        </Row>
        <Row type="flex" justify="center">
          <Col><FullscreenSpots title="Closel No 1" des={des} imgurl="http://fakeimg.pl/1000x625/"/></Col>
        </Row>
        <Row type="flex" justify="center">
          <Col><FullscreenSpots title="Closel No 2" des={des} imgurl="http://fakeimg.pl/1000x625/"/></Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={9} offset={2}><FullscreenSpots title="Closel No 5" des={des} imgurl="http://fakeimg.pl/325x400/"/></Col>
          <Col span={9} offset={2}><FullscreenSpots title="Closel No 6" des={des} imgurl="http://fakeimg.pl/325x400/"/></Col>
        </Row>
         <Row type="flex" justify="center">
          <Col span={9} offset={2}><FullscreenSpots title="Closel No 7" des={des} imgurl="http://fakeimg.pl/325x400/"/></Col>
          <Col span={9} offset={2}><FullscreenSpots title="Closel No 8" des={des} imgurl="http://fakeimg.pl/325x400/"/></Col>
        </Row>
      </div>
    )
  }
});

export default HomeHero;
