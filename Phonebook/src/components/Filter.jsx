import { useState } from "react";

const Filter = (props) => {
  const persons = props.persons;
  const [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    setFilter(e.target.value);
    const filterResults = [];
    for (const person of persons) {
      for (let i = 0; i < e.target.value.length; i++) {
        if (person.name.toLowerCase()[i] !== e.target.value.toLowerCase()[i]) {
          break;
        }
        if (i === e.target.value.length - 1) {
          filterResults.push(person);
        }
      }
    }
    console.log(e.target.value);
    props.setDisplayedPersons(e.target.value === "" ? persons : filterResults);
  };
  return (
    <div>
      filter shown with{" "}
      <input type="text" value={filter} onChange={handleFilter} />
    </div>
  );
};

export default Filter;
