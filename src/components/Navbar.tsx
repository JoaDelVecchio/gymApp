import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      {/* Example Content Sections */}
      <main>
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-gray-100"
        >
          <h1 className="text-5xl font-bold">Welcome to Jym</h1>
        </section>
        <section
          id="benefits"
          className="h-screen flex items-center justify-center bg-gray-200"
        >
          <h1 className="text-5xl font-bold">Benefits Section</h1>
        </section>
        <section
          id="classes"
          className="h-screen flex items-center justify-center bg-gray-300"
        >
          <h1 className="text-5xl font-bold">Our Classes Section</h1>
        </section>
        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-gray-400"
        >
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
