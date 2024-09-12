
import "./ToastNote.css"

function ToastNote({ dataToast}) {
   
    return (
        <div className="toastContainer">
            <p>{dataToast}</p>
        </div>
    );
}

export default ToastNote;
