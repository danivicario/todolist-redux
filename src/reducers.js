import { createStore } from "redux";

// STORE - CAJA AMARILLA DIAGRAMA - PREPARACION
let currentNewTask = 1;

const initialState = {
  tasks: [...Array(5)].map((x, idx) => ({
    value: "New " + Math.round(Math.random() * 100000),
    date: new Date("5/" + (Math.round(Math.random() * 20) + 1) + "/2020"),
    done: false,
    id: idx
  }))
};

// STORE - CAJA AMARILLA DIAGRAMA
const store = createStore((state = initialState, action) => {
  let tasks;
  let taskIndex;

  // REDUCERS - CAJA VERDE DIAGRAMA
  switch (action.type) {
    case "CREATE_NEW_TASK":
      tasks = [...state.tasks];
      tasks.push({
        value: `New ${currentNewTask++}`,
        date: new Date(),
        done: false,
        id: Math.round(Math.random() * 100000)
      });
      return {
        ...state,
        tasks: tasks
      };

    case "DISABLE_ALL_TASKS":
      tasks = [...state.tasks];
      tasks = tasks.map(task => ({
        ...task,
        done: true
      }));
      return {
        ...state,
        tasks: tasks
      };

    case "ENABLE_ALL_TASKS":
      tasks = [...state.tasks];
      tasks = tasks.map(task => ({
        ...task,
        done: false
      }));
      return {
        ...state,
        tasks: tasks
      };

    case "SET_TASK_AS_DONE":
      tasks = [...state.tasks];
      taskIndex = tasks.findIndex(el => el.id === action.id);
      tasks[taskIndex] = {
        ...tasks[taskIndex],
        done: true
      };

      return {
        ...state,
        tasks: [...tasks]
      };

    case "SET_TASK_AS_UNDONE":
      tasks = [...state.tasks];
      taskIndex = tasks.findIndex(el => el.id === action.id);
      tasks[taskIndex] = {
        ...tasks[taskIndex],
        done: false
      };

      return {
        ...state,
        tasks: [...tasks]
      };

    case "REMOVE_ONE_TASK":
      tasks = [...state.tasks];
      taskIndex = tasks.findIndex(el => el.id === action.id);
      tasks.splice(taskIndex, 1);

      return {
        ...state,
        tasks: [...tasks]
      };

    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
