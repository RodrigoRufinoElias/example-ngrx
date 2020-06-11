import {
    Action,
    createAction,
    props,
    createReducer,
    on
} from '@ngrx/store';

enum ActionTypes {
    Increment = 'Increment',
    Decrement = 'Decrement'
}

// export class Decrement implements Action {
//     readonly type = ActionTypes.Decrement;
// }

export const increment = createAction (
    ActionTypes.Increment
);

export const decrement = createAction (
    ActionTypes.Decrement
);

const INITIAL_STATE = {
    counter: 0
};

// export const reducer = (state = INITIAL_STATE, action: any) => {
//     switch (action.type) {
//         case ActionTypes.Decrement:
//             return { ...state, counter: state.counter - 1};
//         case ActionTypes.Increment:
//             return { ...state, counter: state.counter + action.payload};
//         default:
//             return state;
//     }
// };

export const reducer = createReducer(
    INITIAL_STATE,
    on(increment, state => ({
        ...state,
        counter: state.counter + 1
    })),
    on(decrement, state => ({
        ...state,
        counter: state.counter - 1
    }))
);
