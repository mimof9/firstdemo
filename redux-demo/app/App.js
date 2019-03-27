import { connect } from 'react-redux';
import MyComponent from './myComponent';

// 容器组件

// 定义state到组件属性的映射
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  };
}

// 定义dispatch到组件属性的映射
// dispatch参数可以传递自己定义的东西，因此按照自己的规则，可以在一个reducer函数里处理
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({
      type: 'change',
      payload: e.target.value
    })
  }
}

// MyConponent是纯UI组件 给纯UI组件配备上state和dispatch
// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

export default App;
