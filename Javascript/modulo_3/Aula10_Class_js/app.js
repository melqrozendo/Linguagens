/*
Class:

1-server para encapsula, ou organizar o codigo em pequenas funçoes ou objetos que tem metodos e propriedades, que server para uma funçao especifica.

Criando uma Class:
1- Ao criar uma classe temos que definir:
-metodo construtor (principais propriedades e o codigo que é executado quando a classe começa)
-metodos ou funçoes com eventos 


Exemplo da page:
1- transição de section de forma suave (scroll suave)
2-Alterar a cor das bolinhas

*/
//criar uma classe para definir o (scroll suave)

class SmoothScroll {
    constructor(links) {
        //passando propriedade no construtor
        // this.link = 'http';
        // this.links = links;
        this.linkElements  = document.querySelectorAll(links);
        //executando evento
        this.addClickEvent();
    }
    //definindo a função evento
    handleClick(event) {
        // console.log(event);

        //definir um padrao no evento
        event.preventDefault();
        //identificar qual section ocorreu o click
        const href = event.currentTarget.getAttribute('href');
        console.log(href);
        //selecionar a section a partir do href
        const section = document.querySelector(href);
        console.log(section);
        //sabendo a section, sabemos qual a distancia do topo
        console.log(section.offsetTop);
        //definir uma forma do browser ir ate o 2000
        window.scrollTo({//va para
            // top: section.offsetTop,//distancia do top
            top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
            behavior: 'smooth'//transição
        })

    }
    //adicionar metodos ou funçoes
    //evento de click para cada elemento links adicionar uma função de callback
    addClickEvent() {
        this.linkElements.forEach(links => {
            // links.addEventListener('click', () => console.log('teste'));
            links.addEventListener('click', this.handleClick);
        });
    }
}

//executando class mãe
// const scroll = new SmoothScroll("a[href^='#']");

// console.log(scroll.links); //Object
// console.log(scroll.linkElements); //NodeList
//executando o evento
// scroll.addClickEvent();

//criar uma extends para alterar a cor das bolinhas

class ActiveSmoothScroll extends SmoothScroll {
    //para passar mais um elemento (section) devemos usar o super(): que executa o cosntrutor da class mãe
    constructor (links, sections) {
        //executando construtor da classe mãe
        super(links);
        //selecionando section
        this.sectionElements = document.querySelectorAll(sections);
        console.log(this.sectionElements);

        //forçar um this: para retornar uma função com o objeto com o this
        this.handleScroll = this.handleScroll.bind(this);
        //ativando handlescroll manualmente
        this.handleScroll();
        //executando função de evento
        this.activeNavScroll();
    }
    handleScroll(){
        // console.log('ativou');
        //identificar para cada section
        this.sectionElements.forEach((section, i) => {
            // console.log(section);
            if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
                this.linkElements[i].classList.add('active');
            } else {
                this.linkElements[i].classList.remove('active');
            }
        });
    }
    //criar uma função para adcionar um evento
    activeNavScroll() {
        window.addEventListener('scroll', this.handleScroll);
    }
}

//executando class filha
const scroll = new ActiveSmoothScroll("a[href^='#']", "section");

