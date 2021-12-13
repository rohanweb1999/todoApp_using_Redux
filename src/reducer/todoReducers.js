const initialData = {
    list: [],
    list2: [],
    tempItems: [],
    tempItems2: []
}



const todoReducers = (state = initialData, action, index) => {

    switch (action.type) {
        case "ADD_LIST":

            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ],
                list2: [
                    ...state.list2,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_ROW":


            const newList = state.list.filter((Element) => Element.id !== action.id)
            return {
                ...state,
                list: newList,
                list2: newList
            }

        case "CHECK_LIST":

            const checkedItems = state.list.filter((Element) => Element.id === action.id)
            return {
                ...state,
                tempItems: [
                    ...state.tempItems,
                    checkedItems
                ]

            }


        case "CHEKED_ITEMS_VIEW":
            return {
                list: [state.tempItems]
            }
        case "UNCHECKED_ITEMS_VIEW":
            return {

            }
        case "VIEW_ALL_ITEMS":
            return {
                list: state.list2
            }
        case "REMOVE_ALL_ITEMS":

            return {
                list: [],
                list2: [],
                tempItems: [],
                tempItems2: []
            }
        default: return state;
    }



}

export default todoReducers;