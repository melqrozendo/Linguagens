function Queue() {
    var items = [];

    this.emqueue = function(element) {
        // adicionar um novo item
        items.push(element);
    }

    this.dequeue = function() {
        // remove um item da frente
        return items.shift();
    }

    this.front = function() {
        // retorna o primeiro elemento da fila
        return items[0];
    }

    this.isEmpty = function() {
        // verifica se a fila está vazia ou não
        return items.length === 0;
    }

    this.size = function() {
        // retorna o tamanho da fila
        return items.length;
    }

    this.print = function() {
        // imprimi a fila no console
        console.log(items.toString());
    }
}

// Instanciando

let fila = new Queue();

fila.emqueue(0);
fila.emqueue(2);
fila.emqueue(4);
fila.emqueue(6);
fila.emqueue(8);

fila.dequeue();

console.log(fila.front());
console.log(fila.size());
console.log(fila.isEmpty());
fila.print();