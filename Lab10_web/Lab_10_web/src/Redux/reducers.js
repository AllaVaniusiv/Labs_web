const searchPrinterId = (printers, expectingId) => {
    return printers.findIndex((statePrinter) => statePrinter.printer.id === expectingId);
};

const initialState = {
    printers: [],
};

const printerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRINTER':
            const existingIdAdd = searchPrinterId(state.printers, action.data.printer.id);
            if (existingIdAdd !== -1) {
                const updatedState = [...state.printers];
                updatedState[existingIdAdd].quantity += action.data.quantity;
                
                return { ...state, printers: updatedState };
            } else {
                return { ...state, printers: state.printers.concat(action.data) };
            }
        
        case 'INCREASE_QUANTITY':
            const existingIdInc = searchPrinterId(state.printers, action.data);
            const increasedState = [...state.printers];
            
            if (existingIdInc !== -1) {
                increasedState[existingIdInc].quantity += 1;
            }

            return { ...state, printers: increasedState };
        
        case 'DECREASE_QUANTITY':
            const existingIdDec = searchPrinterId(state.printers, action.data);
            const decreasedState = [...state.printers];

            if ( existingIdDec !== -1 && decreasedState[existingIdDec].quantity > 1){
                decreasedState[existingIdDec].quantity -= 1;
            }

            return { ...state, printers: decreasedState };

        case 'DELETE_PRINTER':
            const existingIdDel = searchPrinterId(state.printers, action.data);
            const deletedState = [...state.printers];

            if (existingIdDel !== -1) {
                deletedState.splice(existingIdDel, 1);
            }
            
            return { ...state, printers: deletedState };

        default:
            return state;

    }
    
};

export default printerReducer;