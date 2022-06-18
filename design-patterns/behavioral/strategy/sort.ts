interface SortStrategy {
    sort(data: string[]): string[]  
}

class QuickSort implements SortStrategy {
    constructor() {

    }
    public sort(data: string[]): string[] {
        // implementing quicksort algorithim
        console.log("Now i'm sorting through Quick concrete sort implementation");
        return data.sort();
    }
}

class HeapSort implements SortStrategy {
    constructor() {

    }
    public sort(data: string[]): string[] {
        // implementing heapsort algorithim
        console.log("Now i'm sorting through Heap concrete sort implementation");
        return data.sort();
    }
}

class BubleSort implements SortStrategy {
    constructor() {

    }
    public sort(data: string[]): string[] {
        // implementing bublesort algorithim
        console.log("Now i'm sorting through Buble concrete sort implementation");
        return data.sort();
    }
}

class SortStrategyContext {
    
    private strategy: SortStrategy;
    
    constructor(sortStrategy: SortStrategy) {
        // --- It's better to put the strategy here from dependency injection. So, you increase the code's abstration and ease future changes.
        this.strategy = sortStrategy;
    }

    public setStrategy(newStrategy: SortStrategy) {
        this.strategy = newStrategy;
    }

    public sort(data: string[]): string[] {
        return this.strategy.sort(data);
    }
}


const strategyContext = new SortStrategyContext(new QuickSort());
console.log(strategyContext.sort(["c", "b", "a"]))
strategyContext.setStrategy(new BubleSort())
console.log(strategyContext.sort(["c", "b", "a"]))
strategyContext.setStrategy(new HeapSort())
console.log(strategyContext.sort(["c", "b", "a"]))
