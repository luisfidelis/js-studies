# Demeter principle

Demeter is the name of a research group from MIT that in the 80's arrived at some rules to improve OO designs.

The Demeter principle, a.k.a principle of least privilege, concerns how a method should call another method.

It advocates that a method should only call another method if it's under the situations below:

1) The method called comes from the same class.
2) The method called comes from an object passed by argument.
3) The method called comes from an object created within the method.
4) The method called comes from an attribute of its class.

Follow an example that is driven by Demeter's law:

```

class DemeterPrinciple {
    
    private t1 : T1;

    f1(){}

    m1(t2: T2) {
        const t3 : T3 = new T3();
        f1() // fit case 1
        t2.f2() // fit case 2
        t3.f3() // fit case 3
        t1.f() // fit case 4
    }
}

```

To clarify the idea about what this principle aims to solve, follow an example that breaks this law:

```

class AvoidDemeterPrinciple {
    ... 
    m1(car: Car) {
        car.performance.parts.getEngine().start();
    }
}

```

But, why is it bad?

So, this code is weak in concern of resilience for many reasons. What if `performance` changes, or even doesn't `parts` exist anymore? 

In case of changes in one node of this "chain" of calls, this code will fall into a build bug or a runtime execution error.

A good solution to this is to create a method `startEngine()` in Car class. This way, our class becomes more resilient against
`Car` changes.

```

class RespectingDemeterPrinciple {
    ...
    m1(car: Car) {
        car.startEngine(); // do whatever is necessary to start car's engine
    }
}

```
