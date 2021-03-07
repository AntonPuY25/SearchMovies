import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getMoviesThunkCreator} from "../Store/reducers/moviesReducer";

const Main = () => {
const dispatch = useDispatch()
  useEffect(() =>{
      dispatch(getMoviesThunkCreator())
  },[dispatch])

    return (
        <>

        </>
    )
}
export default Main;