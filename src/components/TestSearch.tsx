import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, fad } from "@awesome.me/kit-b1390146c4/icons";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Select from "react-select";
import { GroupBase } from "react-select";
import { useDepartmentsQuery } from "@/queries/useDepartmentsQuery";
import { useArtworksSearchQuery } from "@/queries/useArtworksSearchQuery";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";

export default function TestSearch() {
  const [selectedFirstYear, setSelectedFirstYear] = useState<number>(
    new Date().getFullYear()
  );
  const [pageFirstYear, setPageFirstYear] = useState<number>(
    new Date().getFullYear() - 4
  );
  const [selectedSecondYear, setSelectedSecondYear] = useState<number>(
    new Date().getFullYear()
  );
  const [pageSecondYear, setPageSecondYear] = useState<number>(
    new Date().getFullYear() - 4
  );

  const [selectedDepartmentID, setSelectedDepartmentID] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departmentSelectChange = (newValue: any) => {
    setSelectedDepartmentID(newValue.value);
    setSelectedDepartment(newValue);
  };
  const departmentsQuery = useDepartmentsQuery();

  if (departmentsQuery.isLoading) {
    return (
      <>
        <div className="flex justify-center mx-auto mt-4">
          <Alert className="h-16 w-auto rounded-xl ">
            <FontAwesomeIcon icon={fad.faSync} spin size="lg" />
            <AlertTitle>Loading</AlertTitle>
          </Alert>
        </div>
      </>
    );
  }

  const { data: departments } = departmentsQuery;

  if (departmentsQuery.isError || !departments) {
    return (
      <>
        <div className="flex justify-center mx-auto mt-4">
          <Alert className="h-16 w-auto rounded-xl ">
            <FontAwesomeIcon icon={fad.faTriangleExclamation} beat size="lg" />
            <AlertTitle>Error loading</AlertTitle>
            <AlertDescription>
              <button
                className="rounded bg-red-700 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={() => departmentsQuery.refetch()}
              >
                Reload
              </button>
            </AlertDescription>
          </Alert>
        </div>
      </>
    );
  }

  console.log(departments);

  const options = departments.map((department) => ({
    value: department.departmentId,
    label: department.displayName,
  }));

  options.unshift({ value: 0 as number, label: "All departments" });

  const handleFirstYearChange = (year: number) => {
    setSelectedFirstYear(year);
  };

  const handlePageFirstYearChange = (year: number) => {
    setPageFirstYear(year);
  };

  const handleChangeFirstYear = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;

    const isValid = /^-?\d*$/.test(value);

    if (isValid) {
      if (value === "-") {
        setSelectedFirstYear(-1);
      } else if (value === "") {
        setSelectedFirstYear(0);
      } else if (
        value.length < 6 &&
        parseInt(value, 10) <= new Date().getFullYear()
      ) {
        const year = parseInt(value, 10);
        setSelectedFirstYear(isNaN(year) ? 0 : year);
        setPageFirstYear(isNaN(year) ? 0 : year);
      }
    }
  };

  const startFirstYear = pageFirstYear - 4;
  const endFirstYear = pageFirstYear + 4;

  const yearsFirst = Array.from(
    { length: endFirstYear - startFirstYear + 1 },
    (_, index) => startFirstYear + index
  );

  const handleSecondYearChange = (year: number) => {
    setSelectedSecondYear(year);
  };

  const handlePageSecondYearChange = (year: number) => {
    setPageSecondYear(year);
  };

  const handleChangeSecondYear = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;

    const isValid = /^-?\d*$/.test(value);

    if (isValid) {
      if (value === "-") {
        setSelectedSecondYear(-1);
      } else if (value === "") {
        setSelectedSecondYear(0);
      } else if (
        value.length < 6 &&
        parseInt(value, 10) <= new Date().getFullYear()
      ) {
        const year = parseInt(value, 10);
        setSelectedSecondYear(isNaN(year) ? 0 : year);
        setPageSecondYear(isNaN(year) ? 0 : year);
      }
    }
  };

  const startSecondYear = pageSecondYear - 4;
  const endSecondYear = pageSecondYear + 4;

  const yearsSecond = Array.from(
    { length: endSecondYear - startSecondYear + 1 },
    (_, index) => startSecondYear + index
  );

  function searchArtworks() {
    const search = document.getElementById("search") as HTMLInputElement;
    const department = selectedDepartmentID;
    const startYear = selectedFirstYear;
    const endYear = selectedSecondYear;
    const highlight = document.getElementById("highlight") as HTMLInputElement;
    const asImage = document.getElementById("asImage") as HTMLInputElement;
    const geoLocation = document.getElementById(
      "geoLocation"
    ) as HTMLInputElement;

    console.log("Search artworks");

    console.log({
      search: search.value,
      department: department,
      startYear: startYear,
      endYear: endYear,
      highlight: highlight.checked,
      asImage: asImage.checked,
      geoLocation: geoLocation.value,
    });
  }

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              className="block font-medium text-gray-500 mb-1"
              htmlFor="search"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={fas.faSearch}
                  className="text-gray-400"
                />
              </div>
              <input
                type="text"
                id="search"
                className="py-3 pl-10 pr-4 block w-full border border-neutral-900 rounded focus:ring-blue-500"
                placeholder="Enter your search"
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium text-gray-500 mb-1"
              htmlFor="department"
            >
              Department
            </label>
            <div className="py-1.5">
              <Select
                className="w-full"
                id="department"
                options={options as unknown as readonly (string | GroupBase<string>)[]}
                value={selectedDepartment}
                onChange={departmentSelectChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                className="block font-medium text-gray-500 mb-1"
                htmlFor="startYear"
              >
                Start Year
              </label>
              <div className="py-1.5">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="flex items-center gap-2 rounded"
                      variant="outline"
                    >
                      <FontAwesomeIcon
                        icon={fas.faCalendarDays}
                        className="text-gray-400"
                      />
                      <span>{selectedFirstYear}</span>
                      <FontAwesomeIcon
                        icon={fas.faChevronDown}
                        className="text-gray-400"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-2 bg-white rounded">
                    <input
                      type="text"
                      value={selectedFirstYear}
                      onChange={handleChangeFirstYear}
                      className="py-3 pl-10 pr-4 block w-full border border-neutral-900 rounded focus:ring-blue-500"
                      placeholder="Enter year"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      {yearsFirst.map((year) => (
                        <div
                          key={year}
                          className={`rounded px-2 py-1 text-center ${
                            year === selectedFirstYear
                              ? "bg-gray-200 font-medium cursor-pointer"
                              : "hover:bg-gray-100 cursor-pointer"
                          }`}
                          onClick={() => handleFirstYearChange(year)}
                        >
                          {year}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 pl-6 pr-6">
                      <button
                        onClick={() =>
                          handlePageFirstYearChange(pageFirstYear - 9)
                        }
                      >
                        <FontAwesomeIcon
                          icon={fas.faChevronLeft}
                          className="text-gray-500 hover:text-gray-400"
                        />
                      </button>
                      <button
                        onClick={() =>
                          handlePageFirstYearChange(pageFirstYear + 9)
                        }
                      >
                        <FontAwesomeIcon
                          icon={fas.faChevronRight}
                          className="text-gray-500 hover:text-gray-400"
                        />
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div>
              <label
                className="block font-medium text-gray-500 mb-1"
                htmlFor="endYear"
              >
                End Year
              </label>
              <div className="py-1.5">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="flex items-center gap-2 rounded"
                      variant="outline"
                    >
                      <FontAwesomeIcon
                        icon={fas.faCalendarDays}
                        className="text-gray-400"
                      />
                      <span>{selectedSecondYear}</span>
                      <FontAwesomeIcon
                        icon={fas.faChevronDown}
                        className="text-gray-400"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-2 bg-white rounded">
                    <input
                      type="text"
                      value={selectedSecondYear}
                      onChange={handleChangeSecondYear}
                      className="py-3 pl-10 pr-4 block w-full border border-neutral-900 rounded focus:ring-blue-500"
                      placeholder="Enter year"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      {yearsSecond.map((year) => (
                        <div
                          key={year}
                          className={`rounded-md px-2 py-1 text-center ${
                            year === selectedSecondYear
                              ? "bg-gray-100 font-medium cursor-pointer"
                              : "hover:bg-gray-100 cursor-pointer"
                          }`}
                          onClick={() => handleSecondYearChange(year)}
                        >
                          {year}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 pl-6 pr-6">
                      <button
                        onClick={() =>
                          handlePageSecondYearChange(pageSecondYear - 9)
                        }
                      >
                        <FontAwesomeIcon
                          icon={fas.faChevronLeft}
                          className="text-gray-500 hover:text-gray-400"
                        />
                      </button>
                      <button
                        onClick={() =>
                          handlePageSecondYearChange(pageSecondYear + 9)
                        }
                      >
                        <FontAwesomeIcon
                          icon={fas.faChevronRight}
                          className="text-gray-500 hover:text-gray-400"
                        />
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div>
            <label
              className="block font-medium text-gray-500 mb-1"
              htmlFor="highlight"
            >
              Highlght{" "}
              <FontAwesomeIcon icon={fas.faStar} className="text-gray-400" />
            </label>
            <div className="py-3 pl-10 pr-4 block w-full border border-neutral-900 rounded focus:ring-blue-500">
              <input type="checkbox" id="highlight" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-4"
              >
                Select for search only highlighted artworks
              </label>
            </div>
          </div>
          <div>
            <label
              className="block font-medium text-gray-500 mb-1"
              htmlFor="asImage"
            >
              Image{" "}
              <FontAwesomeIcon icon={fas.faImage} className="text-gray-400" />
            </label>
            <div className="py-3 pl-10 pr-4 block w-full border border-neutral-900 rounded focus:ring-blue-500">
              <input type="checkbox" id="asImage" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-4"
              >
                Select for search only artworks with images
              </label>
            </div>
          </div>
          <div>
            <label
              className="block font-medium text-gray-500 mb-1"
              htmlFor="geoLocation"
            >
              Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={fas.faMapLocationDot}
                  className="text-gray-400"
                />
              </div>
              <input
                type="text"
                id="geoLocation"
                className="py-3 pl-10 pr-4 block w-full border border-neutral-900 rounded focus:ring-blue-500"
                placeholder="Enter the location"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button
            className="inline-flex items-center justify-center h-10 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400"
            onClick={searchArtworks}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
