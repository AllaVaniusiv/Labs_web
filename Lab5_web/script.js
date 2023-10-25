const main = document.getElementById('main');
const sortBtn = document.getElementById('sort');
const searchInput = document.getElementById('search');
let printersData = [];

function updateDOM() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredPrinters = printersData.filter(item => item.name.toLowerCase().includes(searchTerm));

  main.innerHTML = '<h2>Printers List</h2>';

  filteredPrinters.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('printer');
    element.innerHTML = `
      <strong>${item.name}</strong> - Type: ${item.type}, PaperTrayCapacity: ${item.paperTrayCapacity}
      <button class="edit-button" onclick="redirectToEditPage(${item.id})">Edit</button>
      <button class="remove-button" onclick="removePrinter(${item.id})">Remove</button>
    `;
    main.appendChild(element);
  });
}

function redirectToEditPage(printerId) {
  window.location.href = `edit_printer.html?id=${printerId}`;
}

function redirectToAddPage() {
  window.location.href = `add_printer.html`;
}

function loadPrinters() {
  fetch('http://localhost:5000/printers')
    .then(response => response.json())
    .then(data => {
      printersData = data.printers;
      updateDOM();
    })
    .catch(error => console.error('Error fetching printers:', error));
}

function removePrinter(printerId) {
  fetch(`http://localhost:5000/printers/${printerId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Remove the printer from printersData
      printersData = printersData.filter(item => item.id !== printerId);

      // Update the DOM to reflect the changes
      updateDOM();
    })
    .catch(error => console.error('Error deleting printer:', error));
}

function sortPrinters(field) {
  fetch('http://localhost:5000/sort-printers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ field })
  })
    .then(response => response.json())
    .then(data => {
      printersData = data.printers;
      // Використовуйте localeCompare для сортування регістронезалежно
      printersData.sort((a, b) => a[field].localeCompare(b[field], undefined, { sensitivity: 'base' }));
      updateDOM(); // Оновіть DOM після сортування, щоб показати відсортовані дані
    })
    .catch(error => console.error('Error sorting printers:', error));
}


function init() {
  sortBtn.addEventListener('click', () => {
    sortPrinters('name');
  });

  searchInput.addEventListener('input', updateDOM);

  loadPrinters();
}

const calculateBtn = document.getElementById('calculate');
const totalPaperElement = document.getElementById('total-paper');

calculateBtn.addEventListener('click', calculateTotalPaper);

function calculateTotalPaper() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredPrinters = printersData.filter(item => item.name.toLowerCase().includes(searchTerm));

  fetch('http://localhost:5000/calculate-paper', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filteredPrinters)
  })
    .then(response => response.json())
    .then(data => {
      totalPaperElement.textContent = `Total Paper: ${data.totalPaper} sheets`;
    })
    .catch(error => console.error('Error calculating total paper:', error));
}

function resetPage() {
  // Очистити поле пошуку
  searchInput.value = '';

  // Скасувати підрахунок Total Paper
  totalPaperElement.textContent = 'Total Paper: ';

  // Скасувати сортування (повернутися до початкового стану)
  fetch('http://localhost:5000/printers', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      printersData = data.printers;
      updateDOM(); // Оновіть DOM, щоб відобразити початковий список принтерів
    })
    .catch(error => console.error('Error resetting the page:', error));
}

// Додайте обробник подій для кнопки "Cancel"
const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', resetPage);

// Додайте обробники подій для кнопок "Cancel" на сторінках редагування та додавання
const cancelEditBtn = document.getElementById('cancel-edit');
if (cancelEditBtn) {
  cancelEditBtn.addEventListener('click', cancelEdit);
}

const cancelAddBtn = document.getElementById('cancel-add');
if (cancelAddBtn) {
  cancelAddBtn.addEventListener('click', cancelAdd);
}


init();