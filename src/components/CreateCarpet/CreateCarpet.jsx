
import "./CreateCarpet.css"

function CreateCarpet() {

    const handlecreatecarpetSubmit = (e) => {
        e.preventDefault();
            
    }
   

    return (
        <>
        <form onSubmit={(e) =>handlecreatecarpetSubmit(e)} className="createCarpetForm">
            <label htmlFor="CarpetName">Nombre de la carpeta:</label>
            <input className="inputCreateCarpet" type="text" name="carpetName" id="CarpetName" placeholder="Cine, Jardinería, etc." />
            <button className="buttonCreateCarpet" type="submit">Crear Carpeta</button>
        </form>
        </>
    );
}

export default CreateCarpet;
