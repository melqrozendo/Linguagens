console.log('Pilhas:')

// Uso de classes e objeto
function Stack() {
    let items = [];

    this.push = function(element) {
        // adiciona um novo item á pilha
        items.push(element);
    }

    this.pop = function() {
        // remove o item do topo da pilha
        return items.pop();
    }

    this.peek = function() {
        // devolve o elemento que está no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        // informa se a pilha está vazia ou não
        return items.length === 0;
    }

    this.clear = function() {
        // limpa a pilha
        items = []
    }

    this.size =  function() {
        // informa o tamanho da pilha
        return items.length;
    }

    this.print = function() {
        // imprime a pilha no console
        console.log(items.toString());
    }
}

// Instnciando um objeto da classe Stack
let pilha = new Stack();

pilha.push(0);
pilha.push(5);
pilha.push(10);
pilha.push(15);
pilha.push(20);

console.log(pilha.peek());
console.log(pilha.size());

pilha.pop();

pilha.print();

pilha.clear();

console.log(pilha.isEmpty());