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
    </>
  );
};

export default Course;
