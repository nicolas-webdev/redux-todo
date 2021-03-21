import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: [
    {
      list: "ホーム",
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
        tasks: [],
      });
    },
    addTask: (state, action) => {
      state = state.map((section) => ({
        ...section,
        tasks: [action.payload.task, ...section.tasks],
      }));
    },
    deleteSection: (state, action) => {
      state = state.filter((section) => section.list !== action.payload);
    },
    cleanTasks: (state, action) => {
      state = state.map((section) => {
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
  addTask,
  deleteSection,
  cleanTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
