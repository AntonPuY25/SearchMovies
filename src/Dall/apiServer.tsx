import axios from "axios";

const instance = axios.create({
    baseURL:'http://www.omdbapi.com/'
})
const key = '?apikey=c693b0c5';
type TypeGetApi = {
    getMovies:(title:string)=>any
}
const GetApi:TypeGetApi={
   getMovies(title:string){
        return instance.get(`${key}&s=${title}`).then(response=>response.data.Search)
    },

}
export default GetApi
