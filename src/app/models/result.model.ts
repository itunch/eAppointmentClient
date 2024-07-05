export class ResultModel<T>{
    data:any;
    errorMessage?:string[]
    isSuccessful:boolean=false;
    statusCode:number=200;
}