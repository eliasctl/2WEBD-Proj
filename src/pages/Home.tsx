import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@awesome.me/kit-b1390146c4/icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="min-h-[35vh] md:min-h-[75vh] bg-[url('/metmuseumny.jpg')] bg-center bg-cover bg-no-repeat relative rounded-xl">
          <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
            <div className="px-5 py-4 inline-block bg-white rounded md:p-7">
              <h3 className="text-lg font-bold text-gray-800 sm:text-2xl">
                The e-Met
              </h3>
              <p className="mt-2 text-gray-800">
                All the artworks of the MET online.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
              All artworks of the Metropolitan Museum of Art at your disposal
            </h2>
            <p className="mt-3 text-gray-800">
              With the help of this site you can retrieve all the works of the
              MET with their information and this simply and quickly !
            </p>
            <p className="mt-5">
              <Link
                className="inline-flex items-center gap-x-1 font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                to="#"
              >
                Rechercher une oeuvre
                <FontAwesomeIcon icon={fas.faChevronRight} />
              </Link>
            </p>
          </div>
          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                <FontAwesomeIcon icon={fas.faBuildingColumns} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  As if you were inside the MET
                </h3>
                <p className="mt-1 text-gray-600">
                  You can let yourself be guided by the departments of the
                  museum and admire the works that compose them.
                </p>
              </div>
            </div>
            <div className="flex">
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                <FontAwesomeIcon icon={fas.faPalette} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  More iformations than in real
                </h3>
                <p className="mt-1 text-gray-600">
                  With e-MET, you can get more information about the works than
                  in the MET. Ideal to discover the history of the work and make
                  a presentation.
                </p>
              </div>
            </div>
            <div className="flex">
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                <FontAwesomeIcon icon={fas.faLandmarkMagnifyingGlass} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  A simple search system
                </h3>
                <p className="mt-1 text-gray-600">
                  A simple, fast and powerful search system, on each page you
                  can search for content on one page or in all the museum
                  according to all the parameters you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
