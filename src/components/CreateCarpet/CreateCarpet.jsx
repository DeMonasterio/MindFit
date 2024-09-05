
import "./CreateCarpet.css"
import useCarpets from "../../hooks/useCarpets.jsx"

function CreateCarpet() {

    const {handlecreatecarpetSubmit} = useCarpets()
   

    return (
        <>
        <form onSubmit={handlecreatecarpetSubmit} className="createCarpetForm">
            <label htmlFor="CarpetName">Nombre de la carpeta:</label>
            <input className="inputCreateCarpet" type="text" name="carpetName" id="CarpetName" placeholder="Cine, Jardinería, etc." />
            <button className="buttonCreateCarpet" type="submit">Crear Carpeta</button>
        </form>
        </>
    );
}

export default CreateCarpet;
