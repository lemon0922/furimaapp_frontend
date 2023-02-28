import React from "react";

export const InputForm = () => {
  return (
    <div>
      <form className="inputForm" action="#">
        <input className="inputBox" type="text" placeholder="キーワードから探す"/>
        <button className="inputButton">
          <i className="fa-magnifying-glass" class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}

export default InputForm;