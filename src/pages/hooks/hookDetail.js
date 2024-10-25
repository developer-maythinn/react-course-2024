import React from "react";
import { useParams } from "react-router-dom";
import ComponentA from "../../components/Hooks/PropsDrillingAndUseContext/ComponentA";
import InputFormUseState from "../../components/Hooks/UseState/InputFormUseState";
import SimpleUseState from "../../components/Hooks/UseState/SimpleUseState";
import InputWithUseState from "../../components/Hooks/UseState/InputWithUseState";
import UseStateCompontent from "../../components/Hooks/UseState/UseStateCompontent";
import SelectedImage from "../../components/Hooks/UseState/SelectedImage";
import CRUD from "../../components/Hooks/UseState/CRUD";
import UseReducerShowHide from "../../components/Hooks/UseReducer/UseReducerShowHide";
import InputFocus from "../../components/Hooks/UseRef/InputFocus";
import VideoPlayer from "../../components/Hooks/UseRef/VideoPlayer";
import ProductSearch from "../../components/Hooks/UseMemo/ProductSearch";
import WithoutUseMemo from "../../components/Hooks/UseMemo/WithoutUseMemo";
import Hooks from ".";
// import Todo from "../../components/Hooks/UseCallback/Todo";
// import WithoutUseCallback from "../../components/Hooks/UseCallback/WithoutUseCallback";
import WithoutUseCallbackProduct from "../../components/Hooks/UseCallback/WithoutUseCallbackProduct";
import UseCallbackProduct from "../../components/Hooks/UseCallback/UseCallbackProduct";
import AgeChild from "../../components/Hooks/UseReducer/AgeChild";
import Counter from "../../components/Hooks/UseCallback/Counter";
import APIData from "../../components/Hooks/UseEffect/APIData";
import WithAxios from "../../components/Hooks/UseEffect/WithAxios";
// import Clock from "../../components/Hooks/UseEffect/Clock";

function HookDetail() {
  const { id } = useParams();
  console.log("id", id);
  return (
    <>
      {/* <Hooks /> */}
      {id === "useState" ? (
        <div style={{ padding: "3rem 0" }}>
          <SimpleUseState />
          <hr />
          <UseStateCompontent />
          <hr />
          <SelectedImage />
          <hr />
          <InputWithUseState />
          <hr />
          <InputFormUseState />
          <hr />
          <CRUD />
        </div>
      ) : id === "useContext" ? (
        <ComponentA />
      ) : id === "useEffect" ? (
        <>
          {/* <Clock /> */}
          <APIData />
          <WithAxios />
        </>
      ) : id === "useReducer" ? (
        <>
          {<AgeChild />}
          {<UseReducerShowHide />}
        </>
      ) : id === "useRef" ? (
        <>
          {<InputFocus />}
          <hr />
          {<VideoPlayer />}
        </>
      ) : id === "useMemo" ? (
        <>
          {<ProductSearch />}
          {<WithoutUseMemo />}
        </>
      ) : id === "useCallback" ? (
        <>
          <Counter />
          {/* <p>
            Parent Component: Manages the product list and the filter state.
          </p>
          <p>
            Child Component: Filter component that allows the user to select a
            category.
          </p>
          {<UseCallbackProduct />}
          {<WithoutUseCallbackProduct />} */}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default HookDetail;
