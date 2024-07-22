import { Link } from "react-router-dom";

// this enables dynamic segment params
import { useParams } from "react-router-dom";

const DynamicSegment = () => {
  const { segmentId } = useParams();

  return (
    <div>
      <h1>Dynamic segment route page</h1>
      <hr />
      <p>Can adjust the content of the component any way you like</p>
      {segmentId === "1" ? <p>Segment is "1"</p> : <p>Segment is not "1"</p>}
      Proof!: {segmentId}
      <hr />
      <p>
        <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default DynamicSegment;
