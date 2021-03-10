import axios from "axios";

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/'
})
const key = '?apikey=c693b0c5';
type TypeGetApi = {
    getMovies: (title: string) => Promise<Array<TypeMovies>>
}
export type TypeMovies = {
    Title:string,
    Year: string
    imdbID: string
    Type: string
    Poster:string
}

type TypeResponseData = {
    Response: string
    Search: Array<TypeMovies>
    totalResults: string
}
const GetApi: TypeGetApi = {
    getMovies(title: string) {
        return instance.get<TypeResponseData>(`${key}&t=${title}`).then(response => response.data.Search)
    },

}
export default GetApi
