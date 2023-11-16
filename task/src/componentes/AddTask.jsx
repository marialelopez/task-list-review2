import { RiAddBoxFill } from "react-icons/Ri";
import { useForm } from "react-hook-form";

export default function AddTask({ addNewTask }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { title, description } = data;
    addNewTask(title, description);
    reset();
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <form
      className="formStyle"
      id="form"
      name="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Titulo</label>
      <input
        className="inputAgregarTareasForm"
        type="text"
        placeholder="Titulo tarea"
        {...register("title", { required: true, minLength: 3 })}
        onKeyDown={handleEnterKey}
      ></input>
      {errors.title?.type === "required" && (
        <span className="error">Titulo es obligatorio</span>
      )}
      {errors.title?.type === "minLength" && (
        <span className="error">
          Titulo debe contener al menos 3 caracteres
        </span>
      )}

      <label>Descripcion</label>
      <input
        className="inputAgregarTareasForm"
        type="text"
        placeholder="Descripción tarea"
        {...register("description")}
        onKeyDown={handleEnterKey}
      ></input>
      <RiAddBoxFill
        type="submit"
        className="botonAgregar"
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  );
}