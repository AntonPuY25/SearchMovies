import axios from "axios";

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com'
})
const key = '?apikey=c693b0c5';
type TypeGetApi = {
    getMovies: (title: string) => Promise<TypeResponseData>
}

export type TypeResponseData = {
    Actors:string
    Awards:string
    BoxOffice:string
    Country:string
    DVD:string
    Director:string
    Genre:string
    Language:string
    Metascore:string
    Plot:string
    Poster:string
    Production:string
    eleased:string
    Response:string
    Runtime:string
    Title:string
    Type:string
    Website:string
    Writer: string
    Year:string
    imdbID:string
    imdbRating:string
    imdbVotes:string
}
const GetApi: TypeGetApi = {
    getMovies(title: string) {
        return instance.get<TypeResponseData>(`${key}&t=${title}`).then(response => response.data)
    },

}
export default GetApi
