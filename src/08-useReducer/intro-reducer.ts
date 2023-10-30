interface State {
    id: number;
    todo: string; 
    done: boolean;
}

interface Action {
    type: string;
    payload?: State,
}


const initialState: State[] = [{
    id: 1,
    todo: 'Searching soul stone',
    done: false,
}];

const todoReducer = (state: State[] = initialState , action?: Action): State[] => {
    if (action && action?.type === '[TODO] add todo' && action.payload) {
        return [...state, action.payload];
    }

    return state;
}

let todos: State[] = todoReducer();

console.log('=== intro-reducer.ts [26] ===', todos);

const newTodo: State = {
    id: 2,
    todo: 'Searching power stone',
    done: false
} 

const addTodoAction: Action = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log('=== intro-reducer.ts [40] ===', todos);
