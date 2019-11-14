import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Badge,Carousel,Grid} from 'antd-mobile'
import '../index.css'
export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
        data1:[
            {icon:'./images/home3.jpg',tit:'热门品牌'},
            {icon:'./images/home4.jpg',tit:'私人搭配师'},
            {icon:'./images/home5.png',tit:'选购指南'},
        ]
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['1', '2'],
            });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:"#fff",height:"50px"}}
                >住吧家居</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                            <img
                                src={'./images/home'+val+'.png'}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <Grid data={this.state.data1}
                    columnNum={3}
                    hasLine={false}
                    itemStyle={{backgroundColor:'#eee'}}
                    renderItem={dataItem => (
                        <div style={{width: '100px', height: '100px',marginLeft:'12px'}}>
                            <div>
                                <img src={dataItem.icon} style={{ width: '100px', height: '100px' }} alt="" />
                            </div>
                            <div style={{ color: '#000', fontSize: '14px', marginTop: '-100px' ,width:'100%',height:'100%',backgroundColor:'#00000029',position:'relative'}}>
                                <p style={{lineHeight: '100px'}}>{dataItem.tit}</p>
                            </div>
                        </div>
                    )}
                />
                <div style={{backgroundColor:'#fff'}}>
                    <div style={{borderLeft:'4px #3fcccb solid'}}>
                        <p style={{marginLeft:'2px'}}>热门推荐</p>
                    </div>
                    <div >
                        <div>
                            <img src='./images/tuijian.jpg' style={{ width: '100%', height: '200px' }} alt="" />
                        </div>
                        <div style={{ color: '#000', fontSize: '14px', marginTop: '-30px' ,position:'relative',marginLeft:'10px'}}>
                            <p style={{color:'#fff'}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}