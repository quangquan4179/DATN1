const cards = [
  {
    id: 'card-1',
    title: 'Learning how to cook',
  },
  {
    id: 'card-2',
    title: 'Making sandwich',
  },
  {
    id: 'card-3',
    title: 'Taking the trash out',
  },
];

export const store = {
  lists: {
    'name': {
      id: 'name',
      title: 'Todo',
      cards,
    },
     'done': {
      id: 'done',
      title: 'Doing',
      cards: [],
    },
    'progress': {
      id: 'progress',
      title: 'Doing',
      cards: [],
    },
     'issue': {
      id: 'issue',
      title: 'Doing',
      cards: [],
    },

  },
  listIds: ['name','done', 'progress','issue'],
};

