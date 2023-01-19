import React from "react";
import Select from "react-select";
const Sortby = ({ setQuery }) => {
  const options = [
    { value: "created_at", label: "Date of Review" },
    { value: "votes", label: "Votes" },
    { value: "comment_count", label: "Amount of Comments" },
  ];
  function handleChange(e) {
    setQuery(`?sort_by=${e.value}`);
  }

  return (
    <div>
      <Select className="sortbox"
        options={options}
        defaultValue={[options[0]]}
        onChange={handleChange}
      />
    </div>
  );
};

export default Sortby;
