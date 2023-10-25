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
let printerToEdit = null;

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
  if (name.trim() === "") {
    alert("Name is important!");
    return;
  }

  if (type.trim() === "") {
    alert("Type is important!");
    return;
  }

  if (paperTrayCapacity.trim() === "") {
    alert("PaperTrayCapacity is important!");
    return;
  }

  if (parseInt(paperTrayCapacity) < 0) {
    alert("PaperTrayCapacity cannot be negative!");
    return;
  }

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
  displayedPrinters = printers;

  const totalPaperTrayCapacity = displayedPrinters.reduce(
    (total, printer) => Number(total) + Number(printer.paperTrayCapacity),
    0
  );
  summaryPaper.textContent = `Summary amount paper: ${totalPaperTrayCapacity} sheets`;
});

sortPrinters.addEventListener("click", () => {
  displayedPrinters = printers;

  displayedPrinters.sort((first, second) => {
    return second.name.localeCompare(first.name);
  });

  renderItemsList(printers);
  addEventListenersForEditButtons();
});
renderItemsList(printers);


function handleEditClick(id) {
  const printer = printers.find((p) => p.id === id);

  if (printer) {
    const editNameInput = document.getElementById("edit_name_input");
    const editTypeInput = document.getElementById("edit_type_input");
    const editPaperTrayCapacityInput = document.getElementById("edit_paperTrayCapacity_input");


    editNameInput.value = printer.name;
    editTypeInput.value = printer.type;
    editPaperTrayCapacityInput.value = printer.paperTrayCapacity;

    printerToEdit = printer;

    const editForm = document.getElementById("edit_form");
    editForm.style.display = "block";
  }
}

function handleSaveEditClick() {
  if (printerToEdit) {
    const editedName = document.getElementById("edit_name_input").value;
    const editedType = document.getElementById("edit_type_input").value;
    const editedPaperTrayCapacity = document.getElementById("edit_paperTrayCapacity_input").value;

    if (editedName.trim() === "") {
      alert("Name is important!");
      return;
    }

    if (editedType.trim() === "") {
      alert("Type is important!");
      return;
    }

    if (editedPaperTrayCapacity.trim() === "") {
      alert("PaperTrayCapacity is important!");
      return;
    }

    if (parseInt(editedPaperTrayCapacity) < 0) {
      alert("PaperTrayCapacity cannot be negative!");
      return;
    }


    printerToEdit.name = editedName;
    printerToEdit.type = editedType;
    printerToEdit.paperTrayCapacity = editedPaperTrayCapacity;

    renderItemsList(printers);

    const editForm = document.getElementById("edit_form");
    editForm.style.display = "none";

    printerToEdit = null;

    saveDataToLocalStorage();

    addEventListenersForEditButtons();
  }

}

function addEventListenersForEditButtons() {
  const editButtons = document.querySelectorAll(".edit-button");
  const saveEditButton = document.getElementById("edit_submit_button");
  const cancelEditButton = document.getElementById("cancel_edit_button");

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const printerId = button.getAttribute("data-id");
      handleEditClick(printerId);
    });
  });


  saveEditButton.addEventListener("click", () => {
    handleSaveEditClick();
  });

  cancelEditButton.addEventListener("click", () => {
    const editForm = document.getElementById("edit_form");
    editForm.style.display = "none";
    printerToEdit = null;
  });
}

addEventListenersForEditButtons();

const deleteSection = document.querySelector(".delete-section");

deleteSection.addEventListener("dragover", (event) => {
  event.preventDefault();
});

deleteSection.addEventListener("drop", (event) => {
  event.preventDefault();
  const printerId = event.dataTransfer.getData("text/plain");
  deletePrinter(printerId);
});
function deletePrinter(printerId) {

  const printerIndex = printers.findIndex((printer) => printer.id === printerId);

  if (printerIndex !== -1) {

    printers.splice(printerIndex, 1);


    const displayedPrinterIndex = displayedPrinters.findIndex(
      (printer) => printer.id === printerId
    );
    if (displayedPrinterIndex !== -1) {
      displayedPrinters.splice(displayedPrinterIndex, 1);
    }


    const printerElement = document.getElementById(printerId);
    if (printerElement) {
      printerElement.remove();
    }


    saveDataToLocalStorage();
  }
}
const itemElements = document.querySelectorAll(".item-card");

itemElements.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", item.id);
  });
});
