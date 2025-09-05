import { useForm, FormProvider } from "react-hook-form";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import PrintableInfo from "./components/PrintableInfo";
import "./styles/App.css";

function App() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log("Collected Form Data:", data);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <FormProvider {...methods}>
      <div className="app-container">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="form-section"
        >
          <fieldset>
            <legend>General Section</legend>
            <div>
              <GeneralForm />
            </div>
          </fieldset>
          <fieldset>
            <legend>Education Section</legend>
            <div>
              <EducationForm />
            </div>
          </fieldset>

          <fieldset>
            <legend>Experience Section</legend>
            <div>
              <ExperienceForm />
            </div>
          </fieldset>
          <div className="form-btns">
            <button type="button" onClick={() => window.print()}>
              Print CV
            </button>
          </div>
        </form>

        <div id="printable" className="preview-section">
          <PrintableInfo data={methods.watch()} />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
