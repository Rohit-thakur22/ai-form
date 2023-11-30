import "./App.css";
import Navbar from "./ui/components/Navbar";
import StepForm from "./ui/components/step-form/StepForm";

function App() {
  return (
    <div className="flex flex-col  items-center min-h-screen w-full">
      <Navbar />
      <main className="w-full mx-auto">
        <StepForm />
      </main>
    </div>
  );
}

export default App;
