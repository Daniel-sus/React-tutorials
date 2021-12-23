import React from "react";

const Tab = ({ opened, toggleTab, title, description, id }) => {
  return (
    <div className={opened ? "tab active" : "tab"}>
      <input id="tab-one" type="checkbox" name="tabs" />
      <label onClick={() => toggleTab(id)} for="tab-one">
        {title}
      </label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Tab;
