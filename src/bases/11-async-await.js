
const getImagen = async() => {
    const apiKEy = 'apFuGEEMQHLCoy9y8R8KU1WO1i1nz4Gs';

    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKEy }`);
        const { data }  = await resp.json();
    
        console.log(data);
    
        const  { url } = data.images.original;
    
        console.log(url);
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        console.log('Oh no');
        console.error(error);   
    } 
};

getImagen();
