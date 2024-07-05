export class ResultModel<T>{
    data?:T;
    errorMessage?:string[]
    isSuccessful:boolean=false;
    statusCode:number=200;
}