import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Solid
      </button>
      <Button>Click me</Button>
    </>
  );
}