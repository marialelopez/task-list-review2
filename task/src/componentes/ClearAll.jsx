export default function ClearAll({ clearAllTask }) {
    const handleClearAll = () => {
      clearAllTask();
    };
  
    return (
      <button className="borrarTodasLasTareas" onClick={handleClearAll}>
        Clear All 🗑
      </button>
    );
  }