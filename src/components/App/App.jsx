import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const dateFrom = watch("datefrom");
  const dateUntil = watch("dateuntil");

  const getTodayDateString = () => {
    return new Date().toISOString().split("T")[0];
  };

  const today = getTodayDateString();

  return (
    <>
      <h2>CV Builder</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <h3>General Section</h3>
          <label>First Name:</label>
          <input
            {...register("firstname", {
              required: "Please enter your first name",
            })}
          />
          {errors.firstname && (
            <p className="error-message">{errors.firstname.message}</p>
          )}

          <label>Last Name:</label>
          <input
            {...register("lastname", {
              required: "Please enter your last name",
            })}
          />
          {errors.lastname && (
            <p className="error-message">{errors.lastname.message}</p>
          )}

          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <label>Phone Number:</label>
          <input type="tel" {...register("phone", { required: true })} />
          {errors.phone && (
            <p className="error-message">This field is required</p>
          )}
        </fieldset>

        <fieldset>
          <h3>Education Section</h3>
          <label>School Name:</label>
          <input {...register("schoolname", { required: true })} />
          {errors.schoolname && (
            <p className="error-message">This field is required</p>
          )}

          <label>Date from:</label>
          <input
            type="date"
            max={today}
            {...register("schooldate", {
              required: true,
              validate: (value) => {
                if (value === today) return "Today's date is not allowed";
                return true;
              },
            })}
          />
          {errors.schooldate && (
            <p className="error-message">{errors.schooldate.message}</p>
          )}

          <label>Title of Study:</label>
          <input
            {...register("studytitle", {
              required: true,
            })}
          />
          {errors.studytitle && (
            <p className="error-message">This field is required</p>
          )}
        </fieldset>

        <fieldset>
          <h3>Experience Section</h3>
          <label>Company Name:</label>
          <input {...register("companyname", { required: true })} />
          {errors.companyname && (
            <p className="error-message">This field is required</p>
          )}

          <label>Position Title:</label>
          <input {...register("positiontitle", { required: true })} />
          {errors.positiontitle && (
            <p className="error-message">This field is required</p>
          )}

          <label>Date from:</label>
          <input
            type="date"
            max={today}
            {...register("datefrom", {
              required: true,
              validate: (value) => {
                if (value === today) return "Today's date is not allowed";
                if (!dateUntil && value > dateUntil)
                  return "Start date must be before end date";
                return true;
              },
            })}
          />
          {errors.datefrom && (
            <p className="error-message">{errors.dateFrom.message}</p>
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
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
