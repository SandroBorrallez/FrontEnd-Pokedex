const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName"); //recibe lo que tiene el input
    let pokeName = pokeNameInput.value.toLowerCase();
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => { //fetch consulta al servideor referente a lo que contenga la url
        if (res.status != "200") { //status diferente de 200 es cuando no encuentra lo que se busca
            console.log(res);
            pokeImage("./assets/img/pokemon.jpg")
        }
        else {
            return res.json(); //regresa la respuesta
        }
    }).then((data) => { //data es una variable y con esto se obtiene los datos solicitados, en este caso, la imagen del pokemon
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default; //se obtiene la imagen del pokemon de la data
            pokeImage(pokeImg);
            let pokenom = data.name;
            pokenombre(pokenom);
            console.log(pokenom);
            let estatnombrecero = data.stats[0].stat.name;
            pokeestatnombrecero(estatnombrecero);
            console.log(estatnombrecero);
            let estatnumerocero = data.stats[0].base_stat;
            pokeestatnumerocero(estatnumerocero);
            console.log(estatnumerocero);
            let estatnombreuno = data.stats[1].stat.name;
            pokeestatnombreuno(estatnombreuno);
            let estatnumerouno = data.stats[1].base_stat;
            pokeestatnumerouno(estatnumerouno);
            let estatnombredos = data.stats[2].stat.name;
            pokeestatnombredos(estatnombredos);
            let estatnumerodos = data.stats[2].base_stat;
            pokeestatnumerodos(estatnumerodos);
            let estatnombretres = data.stats[3].stat.name;
            pokeestatnombretres(estatnombretres);
            let estatnumerotres = data.stats[3].base_stat;
            pokeestatnumerotres(estatnumerotres);
            let estatnombrecuatro = data.stats[4].stat.name;
            pokeestatnombrecuatro(estatnombrecuatro);
            let estatnumerocuatro = data.stats[4].base_stat;
            pokeestatnumerocuatro(estatnumerocuatro);
            let estatnombrecinco = data.stats[5].stat.name;
            pokeestatnombrecinco(estatnombrecinco);
            let estatnumerocinco = data.stats[5].base_stat;
            pokeestatnumerocinco(estatnumerocinco);
        }
    })
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");//busca en html el id pokeImg
    pokePhoto.src = url;
}
const pokenombre = (url) => {
    const pokeidentidad = document.getElementById("pokenom");
    pokeidentidad.value = url;
}
const pokeestatnombrecero = (url) =>{
    const namecero = document.getElementById("estatnombrecero");
    namecero.value = url;
}
const pokeestatnumerocero = (url) =>{
    const statscero = document.getElementById("estatnumerocero");
    statscero.value = url;
}
const pokeestatnombreuno = (url) =>{
    const nameuno = document.getElementById("estatnombreuno");
    nameuno.value = url;
}
const pokeestatnumerouno = (url) =>{
    const statsuno = document.getElementById("estatnumerouno");
    statsuno.value = url;
}
const pokeestatnombredos = (url) =>{
    const namedos = document.getElementById("estatnombredos");
    namedos.value = url;
}
const pokeestatnumerodos = (url) =>{
    const statsdos = document.getElementById("estatnumerodos");
    statsdos.value = url;
}
const pokeestatnombretres = (url) =>{
    const nametres = document.getElementById("estatnombretres");
    nametres.value = url;
}
const pokeestatnumerotres = (url) =>{
    const statstres = document.getElementById("estatnumerotres");
    statstres.value = url;
}
const pokeestatnombrecuatro = (url) =>{
    const namecuatro = document.getElementById("estatnombrecuatro");
    namecuatro.value = url;
}
const pokeestatnumerocuatro = (url) =>{
    const statscuatro = document.getElementById("estatnumerocuatro");
    statscuatro.value = url;
}
const pokeestatnombrecinco = (url) =>{
    const namecinco = document.getElementById("estatnombrecinco");
    namecinco.value = url;
}
const pokeestatnumerocinco = (url) =>{
    const statscinco = document.getElementById("estatnumerocinco");
    statscinco.value = url;
}