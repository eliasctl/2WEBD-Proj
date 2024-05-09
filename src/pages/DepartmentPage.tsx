import { useParams } from "react-router-dom";

import Error from "../components/Error";

export default function DepartmentPage() {
  const { id } = useParams();
  if (id === undefined) {
    return (
      <Error
        errorType="400"
        errorTitle="Bad Request"
        errorDescription="The id of the work to display is missing the page cannot be displayed"
        errorReturnLink="/"
      />
    );
  }

  if (isNaN(parseInt(id))) {
    return (
      <Error
        errorType="400"
        errorTitle="Bad Request"
        errorDescription="The id of the work to display is not a number the page cannot be displayed"
        errorReturnLink="/"
      />
    );
  }

    const departmentId = parseInt(id);

    console.log(departmentId);
}
