import {
    ADD_LIST,
    CHANGE_CHECKBOX_STATE,
    DELETE_ITEM,
    SHOW_ALL_ITEMS,
    SHOW_CHECKED_ITEMS,
    REMOVE_ALL_ITEMS,
    SHOW_UNCHECKED_ITEMS,
    CHANGE_USER_INPUT,
    SELECT_EDIT_ITEM,
    UPDATE_SELECT_TODO,
} from "../actions/types";
const initialState = {
    userInp: "",
    list: [],
    tempList: [],
    isEditItems: "",
};
const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_INPUT:
            return {
                ...state,
                userInp: action.value,
            };
        case ADD_LIST:
            let { id, data, isChecked } = action.payload;
            console.log(id);
            return {
                ...state,
                userInp: "",

                list: [
                    ...state.list,
                    {
                        id,
                        data,
                        isChecked,
                    },
                ],

                tempList: [
                    ...state.tempList,
                    {
                        id,
                        data,
                        isChecked,
                    },
                ],
            };

        case CHANGE_CHECKBOX_STATE:
            let index = action.index;
            console.log(index);
            let tempList = [...state.list];
            console.log("check 1", tempList[index]);
            tempList[index] = {
                ...tempList[index],
                isChecked: !tempList[index].isChecked,
            };
            console.log("check 1", tempList[index]);
            return {
                ...state,
                list: [...tempList],
                tempList: [...tempList],
            };
        case DELETE_ITEM:
            return {
                ...state,
                list: state.list.filter((e, i) => i !== action.index),
                tempList: state.tempList.filter((e, i) => i !== action.index),
            };
        case SHOW_CHECKED_ITEMS:
            return {
                ...state,
                list: state.tempList.filter((e, i) => e.isChecked),
            };
        case SHOW_UNCHECKED_ITEMS:
            return {
                ...state,
                list: state.tempList.filter((e, i) => !e.isChecked),
            };
        case SHOW_ALL_ITEMS:
            return {
                ...state,
                list: state.tempList,
            };

        case REMOVE_ALL_ITEMS:
            return initialState;

        case SELECT_EDIT_ITEM:
            let editId = action.payload.id;
            let editData = action.payload.data;
            // console.log("editid", editId)
            // console.log("editData", editData)

            return {
                ...state,
                userInp: editData,
                isEditItems: editId
            }
        case UPDATE_SELECT_TODO:
            const newList = state.list.map((e) => e.id === state.isEditItems ? { ...e, data: state.userInp } : e)
            console.log("newlist", newList)
            return {
                ...state,
                list: newList
            }

        default:
            return state;
    }
};
export default todoReducers;