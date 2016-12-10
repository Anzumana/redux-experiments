var state = {
	todos:[{
		text:'Eat food',
		completed:true
	},{
		text:'Exercise',
		completed:false
	}],
	visibilityFilter:'SHOW_COMPLETED'
}
var action1 = { type:'ADD_TODO', text:'Go to swimming pool'}
var action2 = { type:'TOGGLE_TODO', index:1}
var action3 = { type:'SET_VISIBILITY_FILTER', filter:'SHOW_ALL'}


function visibilityFilter(state , action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

function todos(state, action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([{ text: action.text, completed: false }]);
  case 'TOGGLE_TODO':
    return state.map((todo, index) =>
      action.index === index ?
        { text: todo.text, completed: !todo.completed } :
        todo
   )
  default:
    return state;
  }
}
function todoApp(state, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}
console.log(state);
console.log(action1);
console.log(todoApp(state, action1));
console.log(action2);
console.log(todoApp(state, action2));

	
