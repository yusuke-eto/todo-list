import { Reducer } from 'redux';
import { TodoAction } from './actions/todo';
import * as ActionType from './actions/Constants';

export interface Todo {
  id: number;
  title: string;
  body: string;
  check: boolean;
  deadline: string;
}

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: [
    {
      id: 1,
      title: 'title-1',
      body: 'body-1',
      check: false,
      deadline: '2019-12-12',
    },
    {
      id: 2,
      title: 'title-2',
      body: 'body-2',
      check: false,
      deadline: '2019-12-12',
    },
  ],
};

const TodosReducer: Reducer<TodosState, TodoAction> = (
  state: TodosState = initialState,
  action: TodoAction,
): TodosState => {
  switch (action.type) {
    case ActionType.ADD: {
      const NextId = state.todos.length;
      const NewTodo: Todo = {
        id: NextId,
        title: action.payload.title,
        body: action.payload.body,
        check: false,
        deadline: '2019-12-12',
      };

      return {
        ...state,
        todos: state.todos.concat(NewTodo),
      };
    }
    case ActionType.UPDATE: {
      const UpdatedTodos = state.todos.map(el =>
        el.id === action.payload.id ? action.payload : el,
      );

      return {
        ...state,
        todos: UpdatedTodos,
      };
    }
    case ActionType.SUCCESS: {
      console.log('成功した');

      return {
        ...state,
        todos: state.todos,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default TodosReducer;
