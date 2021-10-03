import * as Actions from './constantes'
import axios from 'axios';
export const loadTasks = (id) => (dispatch) => {
    console.log('id to tesks : ', id)
    dispatch({ type: Actions.LOADING_TASKS })
    const data = { id }
    axios({
        method: "post",
        url: `http://localhost:5000/api/allTasks`,
        data,
        withCredentials: true
    }).then((res) => {
        console.log('response de tasks : ', res)
        dispatch({ type: Actions.TASKS_LOADED, payload: res.data });
        dispatch({ type: Actions.TASKS_LOADED_SUCCESS, });

    }
    ).catch((err) => {
        dispatch({ type: Actions.LOADED_TASKS_FAIL })

    });
}
export const updateTaskStatus = (task_id, newStatus) => (dispatch) => {
    const data = {
        id: task_id,
        newStatus: newStatus
    }
    axios({
        method: "post",
        url: `http://localhost:5000/api/update_task`,
        data,
        withCredentials: true
    }).then((res) => {
        console.log('response de tasks : ', res)
        dispatch({ type: Actions.UPDATE_TASKS_STATUS })
        dispatch({ type: Actions.LOADING_TASKS })

    }
    ).catch((err) => {
        dispatch({ type: Actions.UPDATE_TASKS, payload: err })

    });



}