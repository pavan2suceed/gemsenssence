import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MovieCard from './Components/MovieCard';
import Loading from './Loading';

const Content = () => {
  const [movies, setMovies] = React.useState([]);
  const [actualMovies, setActualMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    try {
      setLoading(true);
      let data = await fetch('https://ghibliapi.herokuapp.com/films');
      let json = await data.json();
      console.log('jsonData', json);
      setMovies(json);
      setActualMovies(json);
      setLoading(false);
    } catch (error) {
      alert('An error occured');
    }
  };

  const handleDeleteClick = val => {
    let filteredMovies = movies.filter(act => act.id !== val.id);
    setMovies(filteredMovies);
  };

  return (
    <ScrollView>
      <Loading loading={loading} />
      {movies &&
        movies.map((val, ind) => {
          return (
            <MovieCard data={val} handleDelete={() => handleDeleteClick(val)} />
          );
        })}
    </ScrollView>
  );
};

export default Content;
