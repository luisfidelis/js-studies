# S - Single responsability principle

A class should have one and only one reason to change.

Example:

Follow the class Payroll

```

class Payroll {

    calculateIncome(userId: string): void {
        const income: number;
        // --- do operations in order to calculate an employee income
        alert(income);
    }

}


```

This class breaks the Single Responsability principle because the method `calculateIncome` has two reasons to change: Firstly, in case of changes in income calculation rules. Secondly, in case of changes on how this should be presented.
So, to improve the cohesion and fit SRP, this method must be responsible for calculating the income, and another module should be able to use 
this method and present the information in various ways.


```

class PayrollView {

    showIncome(income: number): void {
        alert(income);
    }

}

class Payroll {

    calculateIncome(userId: string): number {
        const income: number;
        // --- do operations in order to calculate an employee income
        return income;
    }

}

const income = Payroll.calculateIncome("some user id");
PayrollView.showIncome(income)


```

