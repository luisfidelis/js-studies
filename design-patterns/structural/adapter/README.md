# Adapter Pattern (Wrapper)

The Adapter Pattern provides a wrapper for a "strange" interface, to a friendly interface.

So, imagine that your system has different ways to do something, according to the environment, I/O devices and etc. The adapter pattern
comes to standard the communication between our system and these different things. 

For instance, imagine a Projector feature.

```

interface Projector {
    turnOn(): void;
}

class LGProjector implements Projector {
    constructor() {...}
    turnOn() {
        // do whatever and then turn on
    }
}

class ProjectorControl {
    
    private projector: Projector;

    constructor(projector: Projector) {
        this.projector = projector;
    }

    init() {
        this.projector.turnOn();
    }
}

```

In this case, we have a well-known interface, called `Projector`, and our concrete class `LGProjector` implements the behavior of a `Projector`.

Well, after that, our system should be able to connect to another projector, but it comes from an external library that we cannot modify freely.

```
class SamsungProjector {
    constructor() { ... }

    turnOnInAstrangeManner(): int {
        // do whatever to turn on and return the current timestamp 
        return new Date().getTime();
    }
}
```

Unfortunetely the class `ProjectorControl` isn't able to handle this type of projector and then we need to modify the class, so, breaking the 
Open/Closed principle.

Well, as good developers, we should avoid this and creates an ADAPTER for this class.

```
class SamsungProjectorAdapter implements Projector {
    private projector: SamsungProjector;

    constructor(projector: SamsungProjector) {
        this.projector = projector;
    }

    turnOn() {
        this.projector.turnOnInAstrangeManner()
    }
}

```

Wooow. Now it's pretty clear we can use this adapter inside our `ProjectorControl` without create a rigid and fragile code.