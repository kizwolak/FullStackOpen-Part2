const Course = (props) => {
  console.log(props.course);
  const { id, name, parts } = props.course;
  console.log(name);
  const displayParts = (parts) => {
    return parts.map((x) => (
      <div key={x.id}>
        {x.name} {x.exercises}
      </div>
    ));
  };

  return (
    <>
      <h1>{name}</h1>
      {displayParts(parts)}
      <b>total of {parts.reduce((acc, x) => acc + x.exercises, 0)} exercises</b>
    </>
  );
};

export default Course;
