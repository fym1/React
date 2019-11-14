import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Badge,WhiteSpace,Carousel,Grid} from 'antd-mobile'
export default class LingGan extends Component {
    state = {
        tabs :[
            { title: <Badge>推荐</Badge> },
            { title: <Badge>冬季</Badge> },
            { title: <Badge>宜家</Badge> },
            { title: <Badge>小清新</Badge> },
            { title: <Badge>小户型</Badge> },
            { title: <Badge>个性色彩</Badge> },
            { title: <Badge>+</Badge> }
        ],
        data1:[
            {icon:'./images/灵感1.png',tit:'橙色律动',icon2:'./images/p1.png'},
            {icon:'./images/灵感2.png',tit:'儿童房',icon2:'./images/p2.png'},
            {icon:'./images/灵感3.jpg',tit:'翻滚吧，地毯君',icon2:'./images/p3.png'},
            {icon:'./images/灵感4.jpg',tit:'角落里的幻想',icon2:'./images/p4.png'},
            {icon:'./images/灵感5.jpg',tit:'橙色律动',icon2:'./images/p1.png'},
            {icon:'./images/灵感6.png',tit:'橙色律动',icon2:'./images/p2.png'}
        ],
        // data1:Array.from(new Array(6)).map(() => ({
        //     icon: './images/灵感1.png',
        // }))
    }
    render() {
        return (
            <div >
                <NavBar
                style={{backgroundColor:'#3fcccb',color:"#fff",height:"50px"}}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                  ]}
                >灵感</NavBar>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div> */}
                </Tabs>
                <div>
                    <Grid data={this.state.data1}
                        columnNum={2}
                        hasLine={false}    
                        itemStyle={{backgroundColor:'#eee'}}          
                        renderItem={dataItem => (
                            <div>
                                <img src={dataItem.icon} style={{ width: '90%', height: '140px' }} alt="" />
                                <div style={{ color: '#000', fontSize: '14px',height:'30px',width:'98%',marginLeft:'2%'}}>          
                                    <div style={{backgroundColor:'#fff',width:'92%',height:'100%',marginLeft:'3%'}}>
                                        <img src={dataItem.icon2} style={{float:'left',height:'100%',marginLeft:'2%'}}/>
                                        <p style={{float:'left',marginLeft:'5%',fontSize:'10%',color:'#686868',marginTop:'5%'}}>{dataItem.tit}</p>
                                        {
                                            <i className='iconfont icon-xin' style={{float:'right',marginRight:'5%',color:'red',marginTop:'3%'}}></i>
                                        }
                                    </div>
                                    
                                </div>
                                    
                            </div>
                        )}
                    />
                </div>
                
            </div>
        )
    }
}
