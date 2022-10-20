let apiKEy = 'apFuGEEMQHLCoy9y8R8KU1WO1i1nz4Gs';
//apiKEy = 'sarasa';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKEy }`);


peticion
    .then( resp => resp.json())
    .then( ({ data }) => {
        const  {url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);

