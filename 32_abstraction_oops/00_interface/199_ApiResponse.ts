interface ApiResponse {
    statusCode:number;
    body? :string;
    headers?:object;
    responseTime:number;
}
//? means variables can be optional in object
const apiResponseGet : ApiResponse = {
    statusCode :200,
    responseTime: 20
}