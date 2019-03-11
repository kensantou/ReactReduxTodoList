import {connect} from 'react-redux';
import TodoApp from '../components/TodoApp';
import {inputTask, addTask} from '../actions/tasks';

// Storeにあるtask,tasksというStateをPropsに渡す
function mapStateToProps({task, tasks}) {
  return {
    task,
    tasks
  };
}

// Actionをdispatchさせる関数をPropsに渡す
function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    }
  };
}

// コンポーネントのTodoApp関数がreturnされている
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
