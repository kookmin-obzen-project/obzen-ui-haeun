import Body from "./components/Body";
import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <>
      <MainLayout/>
        <button className="mt-4 px-6 py-3 rounded-lg bg-indigo-600 text-white text-base font-semibold">
          버튼
        </button>
        <Body/>
    </>
  )
}