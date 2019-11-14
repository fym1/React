import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Badge,Carousel,Grid,SearchBar} from 'antd-mobile'
export default class ShangCheng extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
        data1:[
            {icon:'./images/home3.jpg',tit:'热门品牌'},
            {icon:'./images/home4.jpg',tit:'私人搭配师'},
            {icon:'./images/home5.png',tit:'选购指南'},
        ],
        data2:[
            {tit:'桌',class:'iconfont icon-zhuozi',back:'#fd3d78'},
            {tit:'床',class:'iconfont icon-chuang',back:'#2fc3fd'},
            {tit:'椅',class:'iconfont icon-yizi',back:'#fda22b'},
            {tit:'几',class:'iconfont icon-chaji',back:'#38d2d1'},
            {tit:'柜',class:'iconfont icon-iconset0499',back:'#fc2b29'},
            {tit:'书架',class:'iconfont icon-shujia',back:'#4e4ef8'},
            {tit:'沙发',class:'iconfont icon-tubiaoCSban-',back:'#ab13ff'},
            {tit:'家居饰品',class:'iconfont icon-shanzi',back:'#3fdf85'},
            {tit:'户外家具',class:'iconfont icon-youpinjiaju_danxian_diaodeng',back:'#8a81c1'},
            {tit:'全部分类',class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-',back:'#75747a'}
        ],
        data3:[
            {icon:'./images/store1.png',tit:'Top Art Studio 欧式风格精细...',price:'￥39.95'},
            {icon:'./images/store2.png',tit:'顺顺工艺欧式风格塑料外框黑...',price:'￥83.99'},
            {icon:'./images/store1.png',tit:'Top Art Studio 欧式风格精细...',price:'￥39.95'},
            {icon:'./images/store2.png',tit:'顺顺工艺欧式风格塑料外框黑...',price:'￥83.99'}
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
                rightContent={
                <i style={{fontSize:22,lineHeight:'22px',marginRight: '16px'}} className='iconfont icon-gouwuche'></i>
                    }

                >商城</NavBar>
                <div style={{position:'relative',width:'100%',height:'190px'}}>
                    <div style={{position:'absolute',zIndex:'3',top:'0px',width:'100%',height:'25%',background:"rgba(36,41,44,0.5)"}}>
                        {<i className='iconfont icon-caidan' style={{marginTop:'2.5%',float:'left',marginLeft:'3%',width:'6%',height:'70%',float:'left'}}></i>}               
                        <SearchBar placeholder="输入关键字搜索" style={{width:'90%',background:"rgba(36,41,44,0.5)",textAlign: "left",float:'left'}}/>
                    </div>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        style={{zIndex:'2'}}
                        >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="#"
                                style={{ display: 'inline-block', width: '100%', height: 200 }}
                            >
                                <img
                                    src={'./images/s'+val+'.png'}
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
                </div>
                <Grid data={this.state.data2}
                    columnNum={5}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{marginLeft:'20%',width:'100%',height:'100%'}}>
                            <div style={{width:'50%',height:'70%',borderRadius:'50%',backgroundColor:`${dataItem.back}`}}>
                            {
                                <i className={dataItem.class} style={{marginBottom:'50%'}}></i>
                            }
                            </div>
                            <div style={{ color: '#000', fontSize: '10px',marginLeft:'-50%'}}>
                                <p>{dataItem.tit}</p>
                            </div>
                        </div>
                    )}
                />
                <Grid data={this.state.data3}
                    columnNum={2}
                    hasLine={false}
                    itemStyle={{backgroundColor:'#eee'}}
                    renderItem={dataItem => (
                        <div >
                            <img src={dataItem.icon} style={{width:'80%',height:'100%'}}/>
                            <div style={{ color: '#000', fontSize: '10%'}}>
                                <p style={{float:'left',marginLeft:'10%',marginTop:'3%'}}>{dataItem.tit}</p>
                                <p style={{float:'left',marginLeft:'10%'}}>{dataItem.price}</p>
                            </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}
