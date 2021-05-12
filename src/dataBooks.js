const data = [
  {
    id: 1,
    name: 'Евгений Онегин',
    authors: 'Пушкин А.С.',
    publisher: 'ООО "Счастливый мир"',
    year: '2018',
    rating: 543,
    isChangeRating: true,
    favourite: false,
  },
  {
    id: 2,
    name: 'Война и мир',
    authors: 'Толстой Л. Н.',
    publisher: 'ООО "Москва"',
    year: '2020',
    rating: 444,
    isChangeRating: true,
    favourite: false,
  },
  {
    id: 3,
    name: 'Война машин',
    authors: 'Далин А. Б.',
    publisher: 'Ромашка',
    year: '2005',
    rating: 28,
    isChangeRating: true,
    favourite: false,
  },
  {
    id: 4,
    name: 'Интересная книга',
    authors: 'Баширов А. А., Петров Б. Б.',
    publisher: 'Ромашка',
    year: '2008',
    rating: 59,
    isChangeRating: true,
    favourite: false,
  },
  {
    id: 5,
    name: 'Интересная книга',
    authors: 'Баширов А. А., Петров Б. Б.',
    publisher: 'Ромашка',
    year: '2000',
    rating: 135,
    isChangeRating: true,
    favourite: false,
  },
  {
    id: 6,
    name: 'Приключение',
    authors: 'Абрикосов А. А',
    publisher: 'Ромашка',
    year: '2000',
    rating: -3,
    isChangeRating: true,
    favourite: false,
  },
];

const dataToJson = data.map((obj) => JSON.stringify(obj));

export default dataToJson;
