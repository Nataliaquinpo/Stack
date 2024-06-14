class EjercicioPila {
    constructor() {
        this.tail = []; // Inicia la pila como un array vacío
        this.size = 0; // Inicia el tamaño de la pila en 0
    }

    // Método para agregar un elemento a la pila
    push(element) {
        this.tail.unshift(element); // Agrega el elemento al inicio de la pila
        this.size++; // Aumenta el tamaño de la pila
    }

    // Método para eliminar y devolver el último elemento de la pila
    pop() {
        if (this.isEmpty()) {
            return "La pila está vacía";
        }
        this.size--; // Decrementa el tamaño de la pila
        return this.tail.pop(); // Elimina y devuelve el último elemento de la pila
    }

    // Método para verificar si la pila está vacía
    isEmpty() {
        return this.size === 0;
    }

    // Método para obtener todos los elementos de la pila
    getElements() {
        return this.tail;
    }
}

// Crear una nueva pila
let miPila = new EjercicioPila();

// Agregar elementos a la pila
miPila.push(1);
miPila.push(2);
miPila.push(3);
miPila.push(4);
miPila.push(5);

// Verificar si la pila está vacía
console.log(miPila.isEmpty()); // Resultado: false

// Obtener el tamaño de la pila
console.log(miPila.size); // Resultado: 5

// Obtener todos los elementos de la pila
console.log(miPila.getElements()); // Resultado: [5,4, 3, 2, 1]

// Eliminar y devolver el último elemento de la pila
console.log(miPila.pop()); // Resultado: 5

// Verificar si la pila está vacía después de desencolar
console.log(miPila.isEmpty()); // Resultado: false

// Obtener el tamaño de la pila después de desencolar
console.log(miPila.size); // Resultado: 5

// Obtener todos los elementos de la pila después de desencolar
console.log(miPila.getElements()); //Resultado [3, 2, 1]

// Vaciar la pila
miPila.tail = [];
miPila.size = 0;

// Verificar si la pila está vacía después de vaciarla
console.log(miPila.isEmpty()); // Salida verdadera
