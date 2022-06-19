# O - Open / Closed Principle

Modules should be open for extension, but closed for modification

You should be able to extend your current code for creating new features (OPEN for extension)
But you can't modify your current modules to perform that (CLOSED for modification).

This principle implies that a developer should anticipate class extension through inheritance, high-order functions or design patterns (strategy or another one).

Finally, this principle says that we need to try to avoid rewriting code all the time, even though it's a hard task, by doing this
we reduce bugs and inconsistencies throughout the code base. Write a new piece of code and inject it instead!

For instance, let's discuss the `sort`() method of Javascript's `Array` prototype.


```

const list : string[] = ["aaaaaa", "ccc", "ddddd", "bb"];
console.log(list.sort());

```

The code above will result in `["aaaaaa", "bb", "ccc", "ddddd"]`, as the `sort()` method compares the alphabetic order of the string to sort the items by default.
However, if we want to sort the list by another criterion, for example, by its length, the `sort()` method allows us to pass a callback function for customizing it

```
const list : string[] = ["aaaaaa", "ccc", "ddddd", "bb"];
console.log(list.sort((current, previous) => {
    if(current.length >= previous.length) {
        return 1;
    }
    return -1;
}));
```

This means that the `sort()` method is open for extension, according to its sort criteria.

Although, we should think about the sort algorithm used internally by Javascript. We can't change the implementation of it, since it's not following the
OCP.