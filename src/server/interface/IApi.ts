export interface IApi {
  getInfo(
    url: string,
    arg?: Record<string, any>,
    callback?: Function,
  ): Promise<Record<string, any>>
}
