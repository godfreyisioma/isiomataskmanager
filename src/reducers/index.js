import { CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "../actions/types"

const initialState = [
    // {
    //     id: 1,
    //     title: "Learn React",
    //     description: "Learn React Today",
    //     status: "Completed"
    // },
    // {
    //     id: 2,
    //     title: "Learn Redux",
    //     description: "Learn Redux Today",
    //     status: "In Progress"
    // },
    // {
    //     id: 3,
    //     title: "Learn MERN",
    //     description: "Let's Learn MERN, this is my next stop",
    //     status: "Unstarted"
    // }
]


export const tasks = (state = { tasks: initialState }, action) => {
     /*******************************************************
                    if else version
     *******************************************************/
    // if(action.type === EDIT_TASK ) {
    //     const {payload} = action 
    //     return {
    //         tasks: state.tasks.map(task => {
    //             if(task.id === payload.id) {
    //                 return Object.assign({}, task, payload.params)
    //             }
    //             return task
    //         })
    //     }
    // }
    /*******************************************************
                        switch version
     *******************************************************/
    const {payload} = action 
    switch(action.type) {
        case EDIT_TASK : {
            return {
                tasks: state.tasks.map(task => {
                    if(task.id === payload.id) {
                        return Object.assign({}, task, payload.params)
                    }
                return task
                })
            }
        }
        case CREATE_TASK : {
            return {
                tasks: state.tasks.concat(action.payload)
            }
        }
        case REMOVE_TASK : {
            return {
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }
        default:
            return state
    }
}
