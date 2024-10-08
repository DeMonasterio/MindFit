
import "./ToastNote.css"

function ToastNote({ dataToast}) {
   
    return (
        <div className="toastContainer">
            <p className="toast" >{dataToast}</p>
        </div>
    );
}

export default ToastNote;
