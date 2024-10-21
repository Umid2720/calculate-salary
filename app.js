const DAROMAD_SOLIGI = 0.12;
const ENG_KAM_ISH_HAQQI = 1155000;
const list = document.querySelector("ul");
const degree = document.querySelector("select");
const button = document.querySelector("button");
const planCount = document.getElementById("planCount");
const lessonCount = document.getElementById("lessonCount");
const studentCount = document.getElementById("studentCount");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (!(planCount.value && studentCount.value && lessonCount.value)) {
    alert("Iltimos barcha maydonlarni to'ldiring!!!");
    return;
  }

  let salary = calculationSalary(
    studentCount.value,
    planCount.value,
    lessonCount.value,
    degree.value
  );

  let tax = calculationTax(salary);

  list.style.opacity = "1";

  list.innerHTML = `
    <li>Talabalar: <big>${studentCount.value}</big> ta</li>
    <li>O'tilishi kerak darslar: <big>${planCount.value}</big> ta</li>
    <li>Haqiqatda o'tilgan darslar: <big>${lessonCount.value}</big> ta</li>
    <li>Oylik kissaga: <big>${useMoneyFormatter(salary - tax)}</big></li>
    <li>Soliq: <big>${useMoneyFormatter(tax)}</big></li>
    <li>Aslida oylik😎: <big>${useMoneyFormatter(salary)}</big></li>
  `;
});

function calculationSalary(talabalar, rejaDars, dars, daraja) {
  let salary = ((talabalar * daraja * ENG_KAM_ISH_HAQQI) / rejaDars) * dars;

  return salary;
}

function calculationTax(salary) {
  return salary * DAROMAD_SOLIGI;
}

function useMoneyFormatter(price) {
  let USDollar = new Intl.NumberFormat("en-DE");
  return USDollar.format(price) + " so'm";
}
