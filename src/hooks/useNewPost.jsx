const useNewPost = () => {
    const APIURL = "https://ubiquitous-space-orbit-x749j7jg7vw26rrj-5000.app.github.dev"; 
    
    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await fetch(`${APIURL}/api/post/upload`, { 
                method: 'POST',
                body: formData, 
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Image uploaded successfully:', data);
            } else {
                console.error('Error uploading image:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return { handleUpload };
};

export default useNewPost;
