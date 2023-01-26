import Spinner from "react-bootstrap/esm/Spinner";



function BaseLoading() {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
      );
}


export default BaseLoading;