let nextToDoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addToDo = (text) => ({
  type: ADD_TODO,
  id: ++ nextToDoId,
  text,
});

export const setVisibilityFilter = (filter) => ({
   type: SET_VISIBILITY_FILTER,
   filter
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const VISIBILITY_FILTERS = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
