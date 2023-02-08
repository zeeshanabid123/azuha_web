export class ResponseModel<T> {
    isError: boolean;
    messages: string;
    data: T;
}
