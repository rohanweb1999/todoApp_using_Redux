import { Button, Checkbox } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import {
  addList,
  changeCheckboxState,
  deleteItem,
  showCheckedItems,
  removeAllItems,
  changeUserInp,
} from "../src/actions/index";
import reactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectEditItem, showAllItems, showUncheckedItems, updateList } from "./actions";
// import "./App.css";
// import DeleteIcon from "@material-ui/icons/Delete";
// import "/home/dataexim/Documents/Rohan/addtodo/node_modules/materialize-css/dist/css/materialize.min.css"

function App() {
  // const [userInp, setuserInp] = useState("");
  const [toggleSubmit, settoggleSubmit] = useState(true)
  const list = useSelector((state) => state.todoReducers.list);
  const userInp = useSelector((state) => state.todoReducers.userInp);

  const dispatch = useDispatch();

  return (
    <main>
      <div className="main-class">
        <div className="sub-class">
          <h1>Add Todo</h1>
          <div className="div-for-inp">
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                placeholder="Write Todo here"
                value={userInp}
                // onChange={(e) => setuserInp(e.target.value)}
                onChange={(e) => dispatch(changeUserInp(e.target.value))}
              />
              {
                toggleSubmit ? <button
                  className="addList"
                  class="btn-floating btn-medieum waves-effect waves-light red"
                  onClick={() => {
                    if (!userInp) {
                      alert("Plz Enter Some valid Input");
                    }
                    else {
                      dispatch(addList(userInp));
                    }
                  }}
                >
                  +
                </button> : <button
                  className="updateList"
                  class="btn-floating btn-medieum waves-effect waves-light red"
                  onClick={() => {
                    dispatch(updateList(), settoggleSubmit(true));
                  }}
                >
                  UPDATE-TODO
                </button>
              }




              <div className="showItems">
                {list.map((element, index) => {
                  return (
                    <div className="view" key={element.id}>
                      <h5 className="solid">{element.data}</h5>
                      <button
                        className="trash"
                        onClick={() => dispatch(deleteItem(index))}
                      >
                        Delete
                      </button>
                      <button
                        className="edit"
                        onClick={() => dispatch(selectEditItem(element.id, element.data), console.log("Edit Item:-", element.id), settoggleSubmit(false))}
                      >
                        Edit
                      </button>
                      <div>
                        <Checkbox
                          type="checkbox"
                          className="chekBox"
                          checked={element.isChecked}
                          onChange={() => {
                            dispatch(changeCheckboxState(index));
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="last-Buttons">
              <Button
                className="checkButton"
                variant="outlined"
                onClick={() => dispatch(showCheckedItems())}
              >
                Cheked
              </Button>
              <Button
                variant="outlined"
                onClick={() => dispatch(showUncheckedItems())}
              >
                Uncheked
              </Button>
              <Button
                variant="outlined"
                onClick={() => dispatch(showAllItems())}
              >
                All
              </Button>
              <Button
                variant="outlined"
                onClick={() => dispatch(removeAllItems())}
              >
                Remove all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;