import React from 'react'

const Suggestions = (props) => {
  const suggestions = props.results.tracks.items.map(result => (
    <li key={result.id}>
      <h5>Name: {result.album.artists[0].name}</h5>
      <h7>Track: {result.name}</h7>
      <h7>Album: {result.album.name}</h7>
    </li>
  ))
  return <ul>{suggestions}</ul>
}

export default Suggestions;
