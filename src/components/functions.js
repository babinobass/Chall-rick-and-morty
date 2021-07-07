import { gql } from "@apollo/client";

const queryCharacter = (page, filter) => {
  return gql`
    query {characters(page: ${page}, ${filter}){
      results {
        id
        name
        image
        status
        species
        location {
            id
            name
        }
        episode{
            id
            name
          }
      }
    }
  }
  `;
}

const queryLocation = (idLocation) => {
  return gql`
    query {location(id: ${idLocation}){
        id
        name
        type
        dimension
        residents{
          id
          name
          status
          image
        }
        created
      }}
  `;
}

const queryEpisode = (idEpisode) => {
  return gql`
   query {episode(id:${idEpisode}){
    name
    air_date
    characters{
      id
      name
      status
      image
    }
      }
      
    }
    `;
}

export { queryLocation, queryCharacter, queryEpisode }