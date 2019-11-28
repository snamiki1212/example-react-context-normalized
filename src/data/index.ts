export const todos =
[
  {id: 1, checked: false, title: 'buy milk'},
  {id: 2, checked: false, title: 'buy coffe'},
  {id: 3, checked: false, title: 'buy toy'},
  {id: 4, checked: false, title: 'buy iphone'},
  {id: 5, checked: false, title: 'buy android'},
  {id: 6, checked: false, title: 'buy water'},
  {id: 7, checked: false, title: 'buy peper'},
]

export const fetchFromResource = (page: number, per:number) => {
  const from = page * per;
  const to = from + per;
  return todos.slice(from, to);
};