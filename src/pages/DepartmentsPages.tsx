import { useDepartmentsQuery } from "../queries/useDepartmentsQuery";
import DepartmentCard from "../components/DepartmentCard";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fad } from "@awesome.me/kit-b1390146c4/icons";

export default function DepartmentsPage() {
  const departmentsQuery = useDepartmentsQuery();
  if (departmentsQuery.isLoading) {
    return (
      <>
        <div className="flex justify-center mx-auto mt-4">
          <Alert className="h-16 w-auto rounded-xl ">
            <FontAwesomeIcon icon={fad.faSync} spin size="lg" />
            <AlertTitle>Chargement en cours</AlertTitle>
          </Alert>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {Array.from({ length: 8 }).map(() => (
              <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition p-4 md:p-5 h-24">
                <div className="animate-pulse bg-gray-200 rounded-xl h-16"></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
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
        {departments.map((department) => (
          <DepartmentCard
            key={department.departmentId}
            department={department}
          />
        ))}
      </div>
    </div>
  );
}
