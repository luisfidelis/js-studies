class DatabaseManager {
    
    // the singleton instance
    private static _instance: DatabaseManager;

    // only DatabaseManager itself is allowed to create instances 
    private constructor () {}

    // public method to provide access to the singleton instance
    // if it's necessary to pass arguments, just create an getInstance() regular function
    public static get Instance() {
        return this._instance || (this._instance = new this())
    }
}

// Retrive the dbManager singleton instance by using the public getter Instace
const dbManager : DatabaseManager = DatabaseManager.Instance;

console.log(dbManager)