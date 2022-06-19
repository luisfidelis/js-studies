# Facade Pattern

Facade provides a high level of abstraction to compose a bunch of different complex modules into a simple interface.

"Let's hide this amount of complex steps, then create a method that cares with those things and after that we expose this method in 
a clean interface to the clients of our library"

```

class CompilerFacade {
    private arq: string;
    constructor(arq: string) {
        this.arq = arq;
    }
    eval(code: string) {
        const s = new Scanner(this.arq);
        const p = new Parser(s);
        const ast = p.parse();
        const code = new CodeGenerator(ast);
        code.eval()
    }
} 

// --- client
const arq = "some content";
const compiler = new Compiler(arq);
compiler.eval();

```

