import config from 'config';

/**
 * The configuration helper that enables reading and writing to environment variables.
 */
export class Config {
  /**
   * Gets the value of the url of the app host `APP_HOST` environment variable.
   * @summary The variable value depends on the current environment `process.env.NODE_ENV` value.
   */
  public static get APP_HOST(): string {
    return config.get<string>('APP_HOST');
  }

  /**
   * Gets the value of the url of the api host `API_HOST` environment variable.
   * @summary The variable value depends on the current environment `process.env.NODE_ENV` value.
   */
  public static get API_HOST(): string {
    return config.get<string>('API_HOST');
  }

  /**
   * Gets or sets the app root directory path.
   */
  private static _APP_ROOT_DIR: string;

  /**
   * Gets the app root directory path.
   */
  public static get APP_ROOT_DIR(): string {
    return this._APP_ROOT_DIR;
  }

  /**
   * Sets the app root directory path.
   * @param dirname The path of the root directory including its name.
   * @description This method will throw an `Error` if the application root directory has been set before.
   */
  public static setAppRootDir(dirname: string): void {
    /**
     * Ensure that the application root directory hasn't been set before.
     */
    if (this._APP_ROOT_DIR) {
      throw new Error('Application root directory has been set before.');
    }

    this._APP_ROOT_DIR = dirname;
  }

  /**
   * Gets the current environment or default.
   * @default 'development'
   */
  public static get env(): 'development' | 'test' | 'production' {
    return (process.env.NODE_ENV as never) || 'development';
  }
}
