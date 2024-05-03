export default function Home() {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="min-h-[35vh] md:min-h-[75vh] bg-[url('/metmuseumny.jpg')] bg-center bg-cover bg-no-repeat relative rounded-xl">
        <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
          <div className="px-5 py-4 inline-block bg-white rounded md:p-7">
            <div className="hidden md:block">
              <h3 className="text-lg font-bold text-gray-800 sm:text-2xl">
                How does Preline work?
              </h3>
              <p className="mt-2 text-gray-800">Learn more about Preline.</p>
            </div>

            <div className="md:mt-16">
              <a
                className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch our story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
