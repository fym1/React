import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from '../container/AppHome'
import LingGan from '../container/LingGan'
import ShangCheng from '../container/ShangCheng'
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22,lineHeight:"22px"}} className='iconfont icon-fangzi'></i>
            }
            selectedIcon={
              <i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-fangzi-copy"></i>
            }
            selected={this.state.selectedTab === 'home'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            // data-seed="logId"
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:"22px"}} className='iconfont icon-dengpao'></i>
            }
            selectedIcon={
              <i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-dengpao-copy"></i>
            }
            title="灵感"
            key="Linggan"
            // badge={'new'}
            selected={this.state.selectedTab === 'lingGan'}
            onPress={() => {
              this.setState({
                selectedTab: 'lingGan',
              });
            }}
            // data-seed="logId1"
          >
           <LingGan/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:"22px"}} className='iconfont icon-store_icon'></i>
            }
            selectedIcon={
              <i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-store_icon-copy"></i>
            }
            title="商城"
            key="Shangcheng"
            // badge={'new'}
            selected={this.state.selectedTab === 'shangCheng'}
            onPress={() => {
              this.setState({
                selectedTab: 'shangCheng',
              });
            }}
            // data-seed="logId1"
          >
           <ShangCheng/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:"22px"}} className='iconfont icon-wode'></i>
            }
            selectedIcon={
              <i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-wode-copy"></i>
            }
            title="我的"
            key="Wode"
            // badge={'new'}
            selected={this.state.selectedTab === 'woDe'}
            onPress={() => {
              this.setState({
                selectedTab: 'woDe',
              });
            }}
            // data-seed="logId1"
          >
           口碑
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}