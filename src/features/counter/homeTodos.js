export const homeTodos = {
  0: {
    id: 0,
    title: "ここがホーム",
    isDone: false,
  },
  1: {
    id: 1,
    title: "タスクを追加してみよう",
    isDone: true,
  },
};

export const homeTodoSelector = () => {
  return Object.keys(homeTodos).map((key) => homeTodos[key]);
};
