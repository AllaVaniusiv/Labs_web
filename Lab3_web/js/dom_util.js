const nameInput = document.getElementById("name_input");
const typeInput = document.getElementById("type_input");
const paperTrayCapacityInput = document.getElementById("paperTrayCapacity_input");

const itemsContainer = document.getElementById("printer_container");


const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, name, type, paperTrayCapacity  }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
  <img
    src="https://img.freepik.com/free-photo/top-view-still-life-printer-composition_23-2149120739.jpg"
    class="item-container__image card-img-top" alt="card">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Type is ${type}</p>
    <p class="card-text">${paperTrayCapacity} sheet</p>
  </div>
</li>`;


export const clearInputs = () => {
  nameInput.value = "";
  typeInput.value = "";
  paperTrayCapacityInput.value = "";
};

export const addItemToPage = ({ id, name, type, paperTrayCapacity }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, type, paperTrayCapacity  })
  );

  const element = document.getElementById(id);


};

export const renderItemsList = (items) =>{
  itemsContainer.innerHTML="";

  for (const item of items){
    addItemToPage(item);
  }
}



export const getInputValues = () => {
  return {
    name: nameInput.value,
    type: typeInput.value,
    paperTrayCapacity: paperTrayCapacityInput.value,
  };
};
