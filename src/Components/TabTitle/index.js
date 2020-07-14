import React, { Component } from 'react';
import './styles.scss';

export default class TabTitle extends Component {
  handleClick = (e) => {
    const { setCurrentTab, index } = this.props;
    setCurrentTab(index);
  }

  render() {
    const { text, isSelected } = this.props;
    return (
      <li 
        className={`Tab${isSelected ? ' is-selected' : ''}`} 
        onClick={this.handleClick}>
        {text}
      </li>
    );
  }
}
