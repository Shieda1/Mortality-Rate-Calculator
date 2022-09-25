// https://www.omnicalculator.com/health/mortality-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mortalityrateRadio = document.getElementById('mortalityrateRadio');
const deathsRadio = document.getElementById('deathsRadio');
const populationsizeRadio = document.getElementById('populationsizeRadio');

let mortalityrate;
let deaths = v1;
let populationsize = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

mortalityrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Deaths';
  variable2.textContent = 'Population size';
  deaths = v1;
  populationsize = v2;
  result.textContent = '';
});

deathsRadio.addEventListener('click', function() {
  variable1.textContent = 'Mortality rate';
  variable2.textContent = 'Population size';
  mortalityrate = v1;
  populationsize = v2;
  result.textContent = '';
});

populationsizeRadio.addEventListener('click', function() {
  variable1.textContent = 'Mortality rate';
  variable2.textContent = 'Deaths';
  mortalityrate = v1;
  deaths = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mortalityrateRadio.checked)
    result.textContent = `Mortality rate = ${computemortalityrate().toFixed(2)}`;

  else if(deathsRadio.checked)
    result.textContent = `Deaths = ${computedeaths().toFixed(2)}`;

  else if(populationsizeRadio.checked)
    result.textContent = `Population size = ${computepopulationsize().toFixed(2)}`;
})

// calculation

function computemortalityrate() {
  return (Number(deaths.value) / Number(populationsize.value)) * 100000;
}

function computedeaths() {
  return (Number(mortalityrate.value) / 100000) * Number(populationsize.value);
}

function computepopulationsize() {
  return Number(deaths.value) / (Number(mortalityrate.value) / 100000);
}