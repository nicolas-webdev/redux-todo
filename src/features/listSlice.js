import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: [
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
  ],
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
      return state.map((section) => ({
        ...section,
        tasks: [action.payload.task, ...section.tasks],
      }));
    },

    deleteSection: (state, action) => {
      return state.filter((section) => section.list !== action.payload);
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
  cleanTasks,
} = listSlice.actions;

export default listSlice.reducer;