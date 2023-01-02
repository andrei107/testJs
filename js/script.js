
class Regione {
    constructor(color, nome, citta, parentSelector) {
        this.color=color;
        this.nome = nome;
        this.citta = citta;
        this.parent = document.querySelector(parentSelector);
      
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="regionale">
             
                <h3 class="nomeRegione">${this.nome}</h3>
                 <h2 class="nomeCitta" style="color:${this.color}">${this.citta}</h3>
                
            </div>
        `;
        this.parent.append(element);
    }
}


const getResources = async function (url){
    const res = await fetch(url);

    if(!res.ok){
        throw new Error ('aaaaa');
    }
    return await res.json();
};

	/*getResources('http://localhost:3000/menu')
	.then(data =>{
	data.forEach(({color,nome,citta}) => {
    new Regione(color,nome,citta,'.italia').render();
	});
	});*/
	
	
	getResources('http://localhost:3000/menu')
		.then( data => {
					data.forEach( ({color,nome,citta}) => {
						new Regione(color,nome,citta,'.italia').render();
					});
		});

