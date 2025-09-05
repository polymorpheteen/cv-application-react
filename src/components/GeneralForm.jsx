import { useFormContext } from "react-hook-form";

function GeneralForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
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
      {errors.email && <p className="error-message">{errors.email.message}</p>}

      <label>Phone Number:</label>
      <input
        type="tel"
        {...register("phone", { required: "This field is required" })}
      />
      {errors.phone && <p className="error-message">{errors.email.message}</p>}
    </>
  );
}

export default GeneralForm;
