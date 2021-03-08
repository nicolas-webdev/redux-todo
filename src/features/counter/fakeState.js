export const sections = {
  0: {
    id: 0,
    name: "マイセクション",
    isActive: true,
    todos: {
      0: {
        id: 0,
        title: "これはやった",
        isDone: true,
      },
      1: {
        id: 1,
        title: "これはやらないと行けない",
        isDone: false,
      },
      2: {
        id: 2,
        title: "そのうちにこれもやる",
        isDone: false,
      },
      3: {
        id: 3,
        title: "これもやらなくちゃ行けないことで・・・",
        isDone: false,
      },
    },
  },
  1: {
    id: 1,
    name: "もう一つ",
    isActive: false,
    todos: {
      0: {
        id: 0,
        title: "これはやった",
        isDone: true,
      },
      1: {
        id: 1,
        title: "これはやらないと行けない",
        isDone: false,
      },
      2: {
        id: 2,
        title: "そのうちにこれもやる",
        isDone: false,
      },
      3: {
        id: 3,
        title: "これもやらなくちゃ行けないことで・・・",
        isDone: false,
      },
    },
  },
  2: {
    id: 2,
    name: "これで３つ",
    isActive: false,
    todos: {
      0: {
        id: 0,
        title: "これはやった",
        isDone: true,
      },
      1: {
        id: 1,
        title: "これはやらないと行けない",
        isDone: false,
      },
      2: {
        id: 2,
        title: "そのうちにこれもやる",
        isDone: false,
      },
      3: {
        id: 3,
        title: "これもやらなくちゃ行けないことで・・・",
        isDone: false,
      },
    },
  },
};

// export const sectionsArray = () => {
//   return Object.keys(sections).map((sectionKey) => ({name: sections[sectionKey].name, key: sections[sectionKey].id}));
// };

// export const sectionTodos = (sectionKey) => {
//   return Object.keys(sections[sectionKey].todos).map(
//     (todo) => ({todo: sections[sectionKey].todos[todo]})
//   );
// };

export const sectionSelector = () => {
  return Object.keys(sections).map((sectionKey) => sections[sectionKey]);
};
