import { Departments } from "../types";
import { Link } from "react-router-dom";

interface DepartmentProps {
  department: Departments;
}

export default function DepartmentCard(props: DepartmentProps) {
  const { department } = props;

  return (
    <Link
      className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
      to={"/Department/" + department.departmentId}
    >
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">
              {department.displayName}
            </h3>
          </div>
          <div className="ps-3">
            <svg
              className="flex-shrink-0 size-5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
