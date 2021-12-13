import { Button } from "@material-ui/core"
import React from "react";
import { useState } from "react";
import { addList, deleteRow, editRow, checkList, checkedItemsView, uncheckedItemsView, viewAllItems, removeAllItems } from '../src/actions/index';
import reactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
// import "./App.css";
// import DeleteIcon from "@material-ui/icons/Delete";
// import "/home/dataexim/Documents/Rohan/addtodo/node_modules/materialize-css/dist/css/materialize.min.css"



function App() {

  const [userInp, setuserInp] = useState("");
  const list = useSelector((state) => state.todoReducers.list);

  const dispatch = useDispatch()



  return (
    <main>
      <div className="main-class">
        <div className="sub-class">
          <h1>Add Todo</h1>
          <div className="div-for-inp">
            <div class="input-field col s6">

              <input id="last_name" type="text" class="validate" placeholder="Write Todo here"
                value={userInp}
                onChange={(e) => setuserInp(e.target.value)} />

              <button className="addList" class="btn-floating btn-medieum waves-effect waves-light red"
                onClick={() => {
                  if (userInp) {
                    dispatch(addList(userInp),
                      setuserInp(''))
                  } else {
                    alert("Plz Enter Some valid Input")
                  }


                }}>
                +
              </button>

              <div className="showItems">
                {
                  list.map((Element, index) => {
                    return (
                      <div className="view" key={Element.id}>
                        <h5 className="solid">
                          {Element.data}
                        </h5>
                        <button className="trash" onClick={() => dispatch(deleteRow(Element.id))} >Delete</button>
                        <button className="edit" onClick={() => dispatch(editRow(Element.id))} >Edit</button>
                        <div>
                          <input
                            type="checkbox"
                            className="chekBox"
                            onChange={() => {
                              dispatch(checkList(Element.id))
                              // console.log(index);

                            }

                            }

                          ></input>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="last-Buttons">
              <Button className="checkButton" variant="outlined" onClick={() =>
                dispatch(checkedItemsView(Element))}>Cheked</Button>
              <Button variant="outlined" onClick={() =>
                dispatch(uncheckedItemsView())}>Uncheked</Button>
              <Button variant="outlined" onClick={() =>
                dispatch(viewAllItems())}>All</Button>
              <Button variant="outlined" onClick={() =>
                dispatch(removeAllItems())}> Remove all</Button>
            </div>


          </div>
        </div>
      </div>
    </main >
  );
}

export default App;
