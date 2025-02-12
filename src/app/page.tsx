export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 align-middle text-center justify-center sm:items-start">
        <h2 className="text-3xl text-white ">My-Health-App</h2>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <ul className="list-none">
          <li className="text-lg text-white align-middle text-center">Developer: Louka3</li>
          <li className="text-lg text-white align-middle text-center">2025</li>
        </ul>
      </footer>
    </div>
  );
}
