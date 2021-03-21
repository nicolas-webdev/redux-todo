import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return [
        {
          list: "ホーム",
          active: true,
          id: 0,
          tasks: [
            {
              id: 0,
              title: "タスクを追加しよう",
              completed: false,
            },
          ],
        },
      ];
    }
    return JSON.parse(serializedState).list;
  } catch (err) {
    return [
      {
        list: "ホーム",
        active: true,
        id: 0,
        tasks: [
          {
            id: 0,
            title: "タスクを追加しよう",
            completed: false,
          },
        ],
      },
    ];
  }
};

export const listSlice = createSlice({
  name: "list",
  initialState: loadState(),
  reducers: {
    addList: (state, action) => {
      state.push({
        list: action.payload,
        id: state.length,
        active: true,
        tasks: [],
      });
    },

    setActive: (state, action) => {
      return state.map((section) => {
        if (section.list === action.payload) {
          return {
            ...section,
            active: true,
          };
        }
        return {
          ...section,
          active: false,
        };
      });
    },

    addTask: (state, action) => {
      return state.map((section) => {
        if (section.list === action.payload.list) {
          return {
            ...section,
            tasks: [action.payload.task, ...section.tasks],
          };
        }
        return { ...section };
      });
    },

    deleteSection: (state, action) => {
      return state.filter((section) => section.list !== action.payload);
    },

    toggleComplete: (state, action) => {
      return state.map((section) => {
        if (section.list !== action.payload.list) {
          return section;
        }
        return {
          ...section,
          tasks: section.tasks.map((task) => {
            if (task.id === action.payload.id) {
              return {
                ...task,
                completed: !task.completed,
              };
            }
            return {
              ...task,
            };
          }),
        };
      });
    },

    cleanTasks: (state, action) => {
      return state.map((section) => {
        if (section.list !== action.payload) {
          return section;
        }
        return {
          ...section,
          tasks: section.tasks.filter((task) => !task.completed),
        };
      });
    },
  },
});

export const {
  addList,
  setActive,
  addTask,
  deleteSection,
  toggleComplete,
  cleanTasks,
} = listSlice.actions;

export default listSlice.reducer;
