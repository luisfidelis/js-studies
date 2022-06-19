# D - Dependency Inversion Principle

This principle says that classes should be composed depending on Abstractions (interfaces) rather than concrete implementations (classes);

In resume: Prefer interfaces over classes. 


Bad example:

``` 

interface SomeInterface {
    someMethod(): void;
}

class SomeClass implements SomeInterface {

}

class AnotherClass implements SomeInterface {

}

class Client {
    SomeClass myObject; 
    constructor(myObject: SomeClass) {
        this.myObject = myObject;
    }
}
const someObject = new SomeClass()
const client = new Client(someObject)

```

Good Example:

```
interface SomeInterface {
    someMethod(): void;
}

class SomeClass implements SomeInterface {

}

class AnotherClass implements SomeInterface {

}

class Client {
    SomeInterface myObject; 
    constructor(myObject: SomeInterface) {
        this.myObject = myObject;
    }
}
const someObject = new SomeClass()
const client = new Client(someObject)

const anotherObject = new AnotherClass()
const client = new Client(anotherObject)

```

In the case above, the class Client is being coupled with the interface `SomeInterface`, which fits DIP. So, the behavior of `Client` isn't linked to how it's implemented either in `SomeClass` or `AnotherClass`, but to the abstraction `SomeInterface` instead.


Another good example:

```

interface Projector {
    show(): void;
}

class SamsungProjector implements Projector {
    show() {
        // implements the `show` method according to Samsung specs
    }
}

class SonyProjector implements Projector {
    show() {
        // implements the `show` method according to Sony specs
    }
}

class Presentation {

    private document: string;

    constructor(document: string) {
        this.document = document;
    }

    present(projectorDevice: Projector) {
        projectorDevice.show(document)
    }
}

const document = "some content";
const presentation = new Presentation(document);

const sonyProjector = new SonyProjector();
presentation.present(sonyProjector);

const samsungProjector = new SamsungProjector();
presentation.present(samsungProjector);

```
