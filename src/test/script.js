const users = [
  { id: 1, name: "Vova" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Anastasia" },
  { id: 4, name: "Daria" },
  { id: 5, name: "Artur" },
  { id: 6, name: "Artem" },
  { id: 7, name: "Dmytro" },
];

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

console.log(users.sort(compare));
