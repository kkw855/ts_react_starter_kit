const ADD_TODO = 'ADD_TODO' as const;
const TOGGLE_TODO = 'TOGGLE_TODO' as const;

let nextId = 1;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
    done: false,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
});

const initialState = {
  todos: [] as { id: number; text: string; done: boolean }[],
};

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>;

export default function todos(state = initialState, action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    default:
      return state;
  }
}
