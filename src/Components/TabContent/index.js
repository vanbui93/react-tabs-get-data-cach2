import React, { Component } from 'react';
import './styles.css';

class TabContent extends Component {
  render() {
    const { tabData, currentTab } = this.props;
    return (
      <div className="TabContent">
        {
          tabData.map((tabContent, index) => {
            if (currentTab === index) {
              return (
                <div key={index}>
                  {tabContent.content}
                </div>
              );
            }
            return null;
          })
        }
      </div>
    );
  };
};
export default TabContent;