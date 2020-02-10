import { VISIBILITY_FILTERS, toggleTodo } from "../actions";
import { connect } from "react-redux";
import TodoList from './../components/TodoList';

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case VISIBILITY_FILTERS.SHOW_ALL:
            return todos;
        case VISIBILITY_FILTERS.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case VISIBILITY_FILTERS.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default:
            throw Error('Invalid Filter type');
    }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
   toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

