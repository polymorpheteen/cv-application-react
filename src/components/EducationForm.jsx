import { useFormContext } from "react-hook-form";

function EducationForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getTodayDateString = () => {
    return new Date().toISOString().split("T")[0];
  };

  const today = getTodayDateString();

  return (
    <>
      <label>School Name:</label>
      <input {...register("school", { required: true })} />
      {errors.schoolname && (
        <p className="error-message">This field is required</p>
      )}

      <label>Year:</label>
      <input
        type="date"
        max={today}
        {...register("year", {
          required: true,
          validate: (value) => {
            if (value === today) return "Today's date is not allowed";
            return true;
          },
        })}
      />
      {errors.year && (
        <p className="error-message">{errors.schooldate.message}</p>
      )}

      <label>Degree:</label>
      <input
        {...register("degree", {
          required: true,
        })}
      />
      {errors.degree && <p className="error-message">This field is required</p>}
    </>
  );
}

export default EducationForm;
