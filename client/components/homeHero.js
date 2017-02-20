import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Collapse, Col, Row, Button } from 'antd';
const Panel = Collapse.Panel;
const des = 'This is a good shirt!';
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
  },
  button:{
    width:'250px',
    height:'40px',
    backgroundColor:'#000',
    fontSize:'16px',
    color:'#fff',
    textAlign:'center'
  },
    productcomponet:{
    paddingBottom:'20px'
  }
};

const ProductSpots = function ProductSpots(props) {
  function render() {
    return (
      <Row >
        <Col span={24}><img src={props.imgurl}/></Col>
        <Col span={24} style={styles.title}>{props.title}</Col>
        <Col span={24} style={styles.des}>{props.des}</Col>
      </Row>
    )
  }
  return render();
}

const ProductTop = function ProductTop(props) {
  function render() {
    return (
      <Row style={styles.productcomponet}>
        <Col span={24}><img src="http://fakeimg.pl/1000x525/"/></Col>
        <Col span={24} style={styles.title}>{props.title}</Col>
        <Col span={24} style={styles.des}>{props.des}</Col>
        <Col span={5} offset={9}><Button style={styles.button}>EXPLORE COLLECTION</Button></Col>
      </Row>
    )
  }
  return render();
}

const HomeHero = React.createClass ({
  render(){
    return (
      <div style= {{ 'paddingBottom': 50, 'backgroundColor': '#ECECEC' }}>
        <Row >
          <Col style={styles.productcomponet}>
            <ProductTop title="Spring / Summer 16" des={des} />
          </Col>
        </Row>
        <Row>
          <Col style={styles.productcomponet}>
            <ProductSpots title="Closel No 1" des={des} imgurl="http://fakeimg.pl/1000x525/"/>
          </Col>
        </Row>
        <Row>
          <Col style={styles.productcomponet}>
            <ProductSpots title="Closel No 2" des={des} imgurl="http://fakeimg.pl/1000x525/"/>
          </Col>
        </Row>
        <Row>
          <Col span={9} offset={2}><ProductSpots title="Closel No 5" des={des} imgurl="http://fakeimg.pl/350x400/"/></Col>
          <Col span={9} offset={2}><ProductSpots title="Closel No 6" des={des} imgurl="http://fakeimg.pl/350x400/"/></Col>
        </Row>
         <Row>
          <Col span={9} offset={2}><ProductSpots title="Closel No 7" des={des} imgurl="http://fakeimg.pl/350x400/"/></Col>
          <Col span={9} offset={2}><ProductSpots title="Closel No 8" des={des} imgurl="http://fakeimg.pl/350x400/"/></Col>
        </Row>
      </div>
    )
  }
});

export default HomeHero;
