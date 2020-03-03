export interface Fetchable<Payload, Error = any> {
    data: Payload
    error: Error,
    isLoading: boolean
}