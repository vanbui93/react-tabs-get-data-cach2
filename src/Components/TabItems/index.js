import React, { Component } from 'react'
import TabTitle from '../TabTitle';
import TabContent from './../TabContent';
import './styles.scss';


class TabItems extends Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      currentTab: this.props.defaultTab,
    };

  }

  setCurrentTab = (currentTab) => {
    // Don't re-render if current tab is clicked again
    if (this.state.currentTab === currentTab) {
      return;
    }
    this.setState({ currentTab });
  }
  render() {
    // Map data to Tab component. 
    // Pass index down so we can send it up to this.state later.
    const { tabData } = this.props;
    const { currentTab } = this.state;
    return (
      <div className="TabItems">
        <ul className="TabTitle">
          {
            tabData.map((tab, index) => {
              return (
                <TabTitle
                  key={index}
                  index={index}
                  text={tab.name}
                  isSelected={currentTab === index}
                  setCurrentTab={this.setCurrentTab}
                />
              )
            })
          }
        </ul>
        <TabContent currentTab={currentTab} tabData ={tabData}/>
      </div>
    )
  }
}
export default TabItems;