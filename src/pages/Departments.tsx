import { useDepartmentsQuery } from "../metApi";
import DepartmentCard from "../components/DepartmentCard";

export default function Departments() {
  const departmentsQuery = useDepartmentsQuery();
  if (departmentsQuery.isLoading) {
    return <p>Chargement en cours</p>;
  }
  const { data: departments } = departmentsQuery;
  if (departmentsQuery.isError || !departments) {
    return (
      <div>
        <p>Erreur au Chargement</p>
        <button onClick={() => departmentsQuery.refetch()}>Recharger</button>
      </div>
    );
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {departments.map((department) => (<DepartmentCard key={department.departmentId} department={department} />))}
      </div>
    </div>
  );
}
