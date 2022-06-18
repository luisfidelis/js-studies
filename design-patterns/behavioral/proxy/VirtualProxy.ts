// Interface that describes behavior of a book parser

interface IBookParser {
    getAuthor(): string;
    getWordsCount(): number;
    getPhrasalVerbs(): string[];
}


// The actual resource 

class BookParser implements IBookParser {

    private bookContent: string;
    private wordsCount: number;
    private author: string;
    private phrasalVerbs: string[];

    constructor(bookContent: string) {
        this.bookContent = bookContent;
        // --- imagine an expensive computational process to get these values
        this.wordsCount = 1000;
        this.author = "Fool Author";
        this.phrasalVerbs = ["Give up", "Go on", "Get down"];
    }

    public getAuthor(): string {
        return this.author;
    }   

    public getWordsCount(): number {
        // just mocking words count 
        return this.wordsCount;
    }

    public getPhrasalVerbs(): string[] {
        return this.phrasalVerbs;
    }

}

// The Virtual Proxy that provides a lazy access to the book parser

class BookParserProxy implements IBookParser {
    private bookContent: string;
    
    // the proxy class is composed by book parser
    private bookParser?: BookParser;
    
    constructor(bookContent: string) {
        this.bookContent = bookContent;
    }

    
    // this method just simplifies the creation of book parsers. So, avoid us to repeat this block of code
    private getInstance(): BookParser {
        if(!this.bookParser) this.bookParser = new BookParser(this.bookContent);
        return this.bookParser;
    }

    // proxies the call to getAuthor()
    public getAuthor(): string {        
        return this.getInstance().getAuthor();
    }

    public getWordsCount(): number {
        // proxies the call to getWordsCount()
        return this.getInstance().getWordsCount();
    }

    public getPhrasalVerbs(): string[] {
        // proxies the call to getPhrasalVerbs()
        return this.getInstance().getPhrasalVerbs();       
    }
}

const bookParserProxy : IBookParser = new BookParserProxy("SOME BOOK CONTENT");

console.log("Words count: ", bookParserProxy.getWordsCount())
console.log("Author: ", bookParserProxy.getAuthor())
console.log("Phrasal Verbs: ", bookParserProxy.getPhrasalVerbs())

