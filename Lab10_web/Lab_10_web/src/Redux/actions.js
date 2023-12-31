const addPrinter = (printer, quantity) => ({
    type: 'ADD_PRINTER',
    data: {
        printer,
        quantity,
    },
});

const increaseQuantity = (printerId) => ({
    type: 'INCREASE_QUANTITY',
    data: printerId,
});

const decreaseQuantity = (printerId) => ({
    type: 'DECREASE_QUANTITY',
    data: printerId,
});

const deletePrinter = (printerId) => ({
    type: 'DELETE_PRINTER',
    data: printerId,
});

export { addPrinter, increaseQuantity, decreaseQuantity, deletePrinter };