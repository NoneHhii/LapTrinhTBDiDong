export class Logger {
    private static instance: Logger;
  
    private constructor() {}
  
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    // phương thức log
    public log(message: string): void {
      console.log(`[LOG] ${message}`);
    }
  
    public error(message: string): void {
      console.error(`[ERROR] ${message}`);
    }
  
    public warn(message: string): void {
      console.warn(`[WARN] ${message}`);
    }
  }
  