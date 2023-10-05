const Course = (props) => {
  const displayCourses = (courses) => {
    const courseElements = [];
    console.log(courses);
    for (const course of courses) {
      console.log(course);
      const { id, name, parts } = course;
      const displayParts = (parts) => {
        return parts.map((x) => (
          <div key={x.id}>
            {x.name} {x.exercises}
          </div>
        ));
      };
      courseElements.push(
        <div key={Math.random()}>
          <h1>{name}</h1>
          {displayParts(parts)}
          <b>
            total of {parts.reduce((acc, x) => acc + x.exercises, 0)} exercises
          </b>
        </div>
      );
    }
    return courseElements;
  };
  return <>{displayCourses(props.courses)}</>;
};

export default Course;
