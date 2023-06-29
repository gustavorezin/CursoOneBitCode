const dayjs = require("dayjs");

// idade hoje, prox data de aniversario ("dd/MM/yyyy"), quantos dias faltam pro aniversario
function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const age = today.diff(birthday, "year");
  console.log(`Idade atual: ${age} anos`);

  const nextBirthday = birthday.add(age + 1, "year") + 1;
  console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);

  const daysToNextBirthday = nextBirthday.diff(today, "day");
  console.log(`Dias até o próximo aniversário: ${daysToNextBirthday} dias`);
}

birthday("2003-10-28");
