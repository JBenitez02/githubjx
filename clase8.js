const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const images = document.querySelectorAll(".img");
let currentImageIndex = 0;

prevButton.addEventListener("click", function() {
  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }
  updateSlider();
});

nextButton.addEventListener("click", function() {
  if (currentImageIndex === images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  updateSlider();
});

function updateSlider() {
  images.forEach(function(image, index) {
    if (index === currentImageIndex) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

updateSlider();
let countries = [
  { name: 'País 1', score: 500 },
  { name: 'País 2', score: 800 },
  { name: 'País 3', score: 200 },
  { name: 'País 4', score: 600 },
  { name: 'País 5', score: 400 }
];

const tableBody = document.getElementById('table-body');
let currentTableState = [...countries];

function renderTable() {
  tableBody.innerHTML = '';
  currentTableState.forEach(country => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = country.name;
    row.appendChild(nameCell);
    const scoreCell = document.createElement('td');
    scoreCell.textContent = country.score;
    row.appendChild(scoreCell);
    tableBody.appendChild(row);
  });
}

function sortTable(column) {
  currentTableState.sort((a, b) => {
    if (a[column] < b[column]) {
      return -1;
    }
    if (a[column] > b[column]) {
      return 1;
    }
    return 0;
  });
  renderTable();
}

function addRow() {
  const name = prompt('Ingrese el nombre del país');
  const score = prompt('Ingrese el puntaje del país');
  if (name && score) {
    const country = { name, score: Number(score) };
    countries.push(country);
    currentTableState.push(country);
    renderTable();
  }
}

function resetTable() {
  currentTableState = [...countries];
  renderTable();
}

function saveTableState() {
  const selectInput = document.getElementById('saved-states');
  const newState = [...currentTableState];
  const option = document.createElement('option');
  option.value = JSON.stringify(newState);
  option.textContent = `Versión ${selectInput.options.length + 1}`;
  selectInput.appendChild(option);
}

function loadSavedState() {
  const selectInput = document.getElementById('saved-states');
  const selectedState = selectInput.value;
  if (selectedState) {
    currentTableState = JSON.parse(selectedState);
    renderTable();
  }
}
