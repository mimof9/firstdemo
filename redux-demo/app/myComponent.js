import React from 'react';
import ReactDOM from 'react-dom';

// 纯UI组件
// Redux 要求 UI 的渲染组件都是纯组件，即不包含任何状态（this.state）的组件。
class MyComponent extends React.Component {
  render() {
    return (
		<div className="index">
			<p>{this.props.text}</p>
			<input defaultValue={this.props.name} onChange={this.props.onChange} />
		</div>
    );
  }
}

export default MyComponent;
