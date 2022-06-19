
interface ILogger {
    info(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
    error(message: string): void;
} 

class ProductionLogger implements ILogger {

    info(message: string) : void {
        console.info("Logging an info log: ", message);
    } 
    warn(message: string) : void {
        console.warn("Logging a warn log: ", message);
    } 
    debug(message: string) : void {
        console.debug("Logging a debug log: ", message);
    } 
    error(message: string) : void {
        console.error("Logging an error log: ", message);
    } 
}

class DevelopmentLogger implements ILogger {

    info(message: string) : void {
        console.info("Logging an info log: ", message);
    } 
    warn(message: string) : void {
        console.warn("Logging a warn log: ", message);
    } 
    debug(message: string) : void {
        console.debug("Logging a debug log: ", message);
    } 
    error(message: string) : void {
        console.error("Logging an error log: ", message);
    } 
}


class LoggerFactory {
    public static createLogger(): ILogger {
        if(new Date().getTime() % 2) { // just for test case
            return new ProductionLogger();
        } else {
            return new DevelopmentLogger();
        }
    }
}

const logger = LoggerFactory.createLogger();

logger.debug("some debug message")
logger.info("some info message")
logger.warn("some warn message")
logger.error("some error message")