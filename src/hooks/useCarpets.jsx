const useCarpets = () => {
    const APIURL = "https://ubiquitous-space-orbit-x749j7jg7vw26rrj-5000.app.github.dev";  
    // const APIURL = "https://11wkqwhb-5000.brs.devtunnels.ms";
    
    const handlecreatecarpetSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);s
        const carpetName = formData.get('carpetName');
        


        try {
            const response = await fetch(`${APIURL}/api/carpets/createCarpet`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ carpetName }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
            
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
            
    }

    return{handlecreatecarpetSubmit}
}

export default useCarpets;