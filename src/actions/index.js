import {
    ADD_LIST,
    CHANGE_CHECKBOX_STATE,
    DELETE_ITEM,
    SHOW_CHECKED_ITEMS,
    SHOW_ALL_ITEMS,
    REMOVE_ALL_ITEMS,
    SHOW_UNCHECKED_ITEMS,
    CHANGE_USER_INPUT,
    SELECT_EDIT_ITEM,
    UPDATE_SELECT_TODO
} from "./types";
export const changeUserInp = (value) => {
    return {
        type: CHANGE_USER_INPUT,
        value,
    };
};
export const addList = (data) => {
    return {
        type: ADD_LIST,
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            isChecked: false,
        },
    };
};
export const changeCheckboxState = (index) => {
    return {
        type: CHANGE_CHECKBOX_STATE,
        index,
    };
};
export const deleteItem = (index) => {
    return {
        type: DELETE_ITEM,
        index,
    };
};
export const selectEditItem = (id, data) => {
    return {
        type: SELECT_EDIT_ITEM,
        payload: {
            id,
            data
        }

    };
};
export const showCheckedItems = () => {
    return {
        type: SHOW_CHECKED_ITEMS,
    };
};
export const showAllItems = () => {
    return {
        type: SHOW_ALL_ITEMS,
    };
};
export const removeAllItems = () => {
    return {
        type: REMOVE_ALL_ITEMS,
    };
};
export const showUncheckedItems = () => {
    return {
        type: SHOW_UNCHECKED_ITEMS,
    };

};
export const updateList = () => {
    return {
        type: UPDATE_SELECT_TODO,
    }
}