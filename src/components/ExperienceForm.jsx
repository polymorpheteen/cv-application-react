import { useFormContext } from "react-hook-form";

function ExperienceForm() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const dateFrom = watch("datefrom");
  const dateUntil = watch("dateuntil");

  const getTodayDateString = () => {
    return new Date().toISOString().split("T")[0];
  };

  const today = getTodayDateString();

  return (
    <>
      <label>Company Name:</label>
      <input {...register("company", { required: true })} />
      {errors.company && (
        <p className="error-message">This field is required</p>
      )}

      <label>Role:</label>
      <input {...register("role", { required: true })} />
      {errors.role && <p className="error-message">This field is required</p>}

      <label>Date from:</label>
      <input
        type="date"
        max={today}
        {...register("from", {
          required: true,
          validate: (value) => {
            if (value === today) return "Today's date is not allowed";
            if (!dateUntil && value > dateUntil)
              return "Start date must be before end date";
            return true;
          },
        })}
      />
      {errors.from && (
        <p className="error-message">{errors.datefrom.message}</p>
      )}

      {dateFrom && (
        <>
          <label>Until:</label>
          <input
            type="date"
            min={dateFrom}
            max={today}
            {...register("dateuntil", {
              required: true,
              validate: (value) => {
                if (value === today) return "Today's date is not allowed";
                if (!dateFrom && value < dateUntil)
                  return "End date must be after start date";
                return true;
              },
            })}
          />
          {errors.dateuntil && (
            <p className="error-message">{errors.dateuntil.message}</p>
          )}
        </>
      )}
    </>
  );
}

export default ExperienceForm;
