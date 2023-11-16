export default function TaskPending({tareasIncompletas}) {
    return (
      <div className="contadorTareasPendientes">
      You have {tareasIncompletas()} pending tasks
      </div>
    )
  }