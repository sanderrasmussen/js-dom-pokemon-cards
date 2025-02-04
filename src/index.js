

console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function makePokemonFromData(){
    //read data from json and create object

    for (pokemonData of data){
       // console.log(pokemonData.stats[0].base_stat)

        makeCard(pokemonData);
     
    }
   
}
makePokemonFromData();

function makeCard(_pokemon){
    //make card out of pokemon data
    //fetching body 
    let displayFrontImage= true;
    let cardList = document.querySelector(".cards");
    //making child elements (card)
    let card = document.createElement("li");
    card.className="card";
 
    let cardHeader = document.createElement("h2");
    cardHeader.className="card--title";
    cardHeader.innerHTML= _pokemon.name;

    let img = document.createElement("img");
    img.className="card--img";
    img.src = _pokemon.sprites.front_default;
    img.width=256;

    card.appendChild(cardHeader);
    cardList.appendChild(card);
    card.appendChild(img);
    statUl = document.createElement("ul");
    statUl.className="card--text";
    card.appendChild(statUl);

//append each stat
    for (stat of _pokemon.stats){
        let statText = document.createElement("li");
        statText.innerHTML= stat.stat.name + ": " + stat.base_stat;
        statUl.appendChild(statText).padd;
        
    }
    let generationSection = document.createElement("li");
    generationSection.innerHTML="Appears in: ";
    generationSection.style.padding="50px 10px 20px 0px";
    statUl.appendChild(generationSection);
    for (gen of _pokemon.game_indices){
        let generation = document.createElement("li");
        generation.innerHTML= gen.version.name;
        statUl.appendChild(generation);
        
        
    }

    //adding eventlistener to card
    card.addEventListener("click",  () => {
        if(displayFrontImage===true ){
            img.src = _pokemon.sprites.back_default;
            displayFrontImage = false;
        }
        else{
            img.src = _pokemon.sprites.front_default;
            displayFrontImage=true;
        }
    })



    

}
