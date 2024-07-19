import Header from "./Header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex flex-col">
        <Header />
        <div className="container mx-4">{children}</div>
      </main>
    </>
  )
}
