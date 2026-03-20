//criando objeto: propriedades e metodos
const menu = {
    //propriedade
    class: '.principal',
    //metodo
    ativar() {
        const menuElement = document.querySelector(this.class);
        console.log(menuElement);
    }
};

//executando o metodo do objeto 
menu.ativar();