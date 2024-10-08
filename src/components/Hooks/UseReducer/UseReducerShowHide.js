import React, { useReducer } from "react";

const initialState = {
  showText: false,
  changeStyleFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

function reducer(state, action) {
  switch (action.type) {
    case HIDE_TEXT:
      return {
        ...state,
        showText: false,
      };
    case SHOW_TEXT:
      return {
        ...state,
        showText: true,
      };
    case CHANGE_TEXT_STYLE:
      return {
        ...state,
        changeStyleFlag: !state.changeStyleFlag,
      };
    default:
      return state;
  }
}
function UseReducerShowHide() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showText, changeStyleFlag } = state;
  return (
    <>
      {/* {showText ? (
        <h3 style={{ background: changeStyleFlag ? "blueviolet" : "#fff" }}>
          Text Component
        </h3>
      ) : null} */}
      <h3
        style={{
          background: changeStyleFlag ? "blueviolet" : "#fff",
          visibility: showText ? "visible" : "hidden",
        }}
      >
        Text Component
      </h3>
      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button
        onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}
        disabled={showText ? false : true}
      >
        Toggle Change Text Styles
      </button>
    </>
  );
}

export default UseReducerShowHide;
