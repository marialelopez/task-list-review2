import { v4 as uuidv4 } from "uuid";

const tareasArray = [
    {
      id: uuidv4(),
      title: "Limpiar la casa",
      description: "Limpiar la casa el dia jueves por la mañana",
      completed: false
    },
  
    {
      id: uuidv4(),
      title: "Lavar el carro",
      description: "Llevar el carro el lunes al CarWash",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Hacer ejercicio",
      description: "Hacer ejercicio 5 dias",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Hacer app con react",
      description: "Utilizando Hooks personalizados y Forms",
      completed: false
    }
  ]




  export default tareasArray;