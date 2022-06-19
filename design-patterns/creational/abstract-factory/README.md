# Abstract Factory


The factory method pattern defines an interface for creating an object but defers instantiation for subclasses

```

interface IProduct {
    ...
}

class Knife implements IProduct {
    constructor() {
        ...
    }
}

class Spoon implements IProduct {
    constructor() {
        ...
    }
}

interface IProductFactory {
    create(): IProduct
}

class SpoonFactory implements IProductFactory {

    static create(): IProduct {
        return new Spoon();
    }

}

class KnifeFactory implements IProductFactory {

    static create(): IProduct {
        return new Knife();
    }

}

```

Abstract Factory provides an interface for creating a family of objects without exposing the concrete class.

To make it clear, we can imagine an UI interface that should handle different components according to the runtime
Operating System, such as MacOS or Windows. It can be applied in Color Themes as well, whereas everything should be modified 
together.

We need an abstract factory to delegate the creation of these families of components at the same room.

```

interface IComponent {
    ...
}

class WindowsButton implements IComponent {
    constructor() {
        ...
    }
}

class WindowsAlert implements IComponent {
    constructor() {
        ...
    }
}

class MacButton implements IComponent {
    constructor() {
        ...
    }
}

class MacAlert implements IComponent {
    constructor() {
        ...
    }
}

interface IComponentFactory {
    createButton(): IComponent
    createAlert(): IComponent
}

class MacComponentFactory implements IComponentFactory {

    static createButton(): IComponent {
        return new MacButton();
    }

    static createAlert(): IComponent {
        return new MacAlert();
    }

}

class WindowsComponentFactory implements IComponentFactory {

    static createButton(): IComponent {
        return new WindowsButton();
    }

    static createAlert(): IComponent {
        return new WindowsAlert();
    }

}

```