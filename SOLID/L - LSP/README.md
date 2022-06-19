# L - Liskov Substitution Principle

Derived classes must be usable through the base class interface, without the need for the user to know the difference

in other words: A child class must respect the behavior of its parent class.

ex: A Square looks like a rectangle, but I can't substitute them without ruining the code and causing some inconsistency

Let's see this in a piece of code:

```

class PrimeNumber {
    getPrimeNumber(n: number) {
        ...
    }
}

class SpecialPrimeNumber extends PrimeNumber {
    getPrimeNumber(n: number) {
        if(n > Math.pow(10, 6)) {
            throw new Exception("The 'n' must be lower than 10^6")
        }
        ...
    }
}

const primeCalculator = new PrimeNumber();
primeCalculator.getPrimeNumber(Math.pow(10,6) + 1);

const primeCalculator = new SpecialPrimeNumber();
primeCalculator.getPrimeNumber(Math.pow(10,6) + 1);

```

The SubClass `SpecialPrimeNumber` brings a new behavior that breaks the contract created by its parent `PrimeNumber`. Now, the `n` parameter must be
lower than 10^6.

This code doesn't respect LSP, as the prime calculator cannot be substituted for `SpecialNumber` without concerns in the client (who uses it).

We should be able to perform the `getPrimeNumber(n)` calcule in a more performative way, but it implies that we cannot breaks the contract inherited from the parent Class.


