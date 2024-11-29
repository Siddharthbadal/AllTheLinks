import MyPDFs from "./components/MyPDFs";

export default function Home() {
  return (
        <div className="flex flex-col justify-center items-center gap-4 bg-zinc-100 mx-auto border min-h-full">

              <h1 className="text-2xl font-bold mx-auto text-center mt-12">All The PDFs</h1>
              <MyPDFs />
              
       </div>
  );
}
