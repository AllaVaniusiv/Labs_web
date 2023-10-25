import {
  addItemToPage,
  clearInputs,
  getInputValues,
  renderItemsList,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const calculateButton = document.getElementById("calculate_button");
const summaryPaper = document.getElementById("summary_paper");
const sortPrinters = document.getElementById("sort_button");

let printers = [];
let displayedPrinters = [];


const saveDataToLocalStorage = () => {
  localStorage.setItem("printers", JSON.stringify(printers));
  localStorage.setItem("displayedPrinters", JSON.stringify(displayedPrinters));
};


const loadDataFromLocalStorage = () => {
  const storedPrinters = JSON.parse(localStorage.getItem("printers"));
  const storedDisplayedPrinters = JSON.parse(
    localStorage.getItem("displayedPrinters")
  );

  if (storedPrinters) {
    printers = storedPrinters;
  }

  if (storedDisplayedPrinters) {
    displayedPrinters = storedDisplayedPrinters;
  }
};


loadDataFromLocalStorage();

const addItem = ({ name, type, paperTrayCapacity }) => {
  const generatedId = uuid.v1();

  const newItem = {
    id: generatedId,
    name,
    type,
    paperTrayCapacity,
  };

  printers.push(newItem);
  if (displayedPrinters.length === 0 || findInput.value === "") {
    displayedPrinters.push(newItem);
  }

  addItemToPage(newItem);

  
  saveDataToLocalStorage();
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const { name, type, paperTrayCapacity } = getInputValues();

  clearInputs();

  addItem({
    name,
    type,
    paperTrayCapacity,
  });
});

findButton.addEventListener("click", () => {
  const searchTerm = findInput.value.toLowerCase(); 

  displayedPrinters = printers.filter((printer) =>
    printer.name.toLowerCase().includes(searchTerm)
  );

  renderItemsList(displayedPrinters);
});


cancelFindButton.addEventListener("click", () => {
  displayedPrinters = [...printers];

  renderItemsList(displayedPrinters);

  findInput.value = "";
});

calculateButton.addEventListener("click", () => {
  const totalPaperTrayCapacity = displayedPrinters.reduce(
    (total, printer) => total + Number(printer.paperTrayCapacity),
    0
  );
  summaryPaper.textContent = `Summary amount paper: ${totalPaperTrayCapacity} sheets`;
});

sortPrinters.addEventListener("click", () => {
  displayedPrinters.sort((first, second) => {
    return second.name.localeCompare(first.name);
  });

  renderItemsList(displayedPrinters);
});

renderItemsList(displayedPrinters);
