export const addList = (data) => {
    return {
        type: "ADD_LIST",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteRow = (id) => {
    return {
        type: "DELETE_ROW",
        id

    }
}

export const editRow = (id) => {
    return {
        type: "EDIT_ROW",
        id
    }
}
export const checkList = (id) => {
    return {
        type: "CHECK_LIST",
        id
    }
}
export const checkedItemsView = (data) => {
    return {
        type: "CHEKED_ITEMS_VIEW",
        payload: {
            data: data
        }
    }
}
export const uncheckedItemsView = () => {
    return {
        type: "UNCHECKED_ITEMS_VIEW"
    }
}
export const viewAllItems = () => {
    return {
        type: "VIEW_ALL_ITEMS"
    }
}
export const removeAllItems = () => {
    return {
        type: "REMOVE_ALL_ITEMS",

    }
}