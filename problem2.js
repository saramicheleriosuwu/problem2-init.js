function humanizeDate() {
  const date = new Date("2022-12-18");
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const humanizedDate = date.toLocaleDateString('es-AR', options);
  return humanizedDate;
}

console.log(humanizeDate()); // "Domingo, 18 de diciembre de 2022"
