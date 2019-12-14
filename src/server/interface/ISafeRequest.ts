export interface ISafeRequest {
  fetch(
    url: string,
    arg?: Record<string, any>,
    callback?: Function,
  ): Promise<Record<string, any>>
}
