import gql from 'graphql-tag'

export const CREATE_DEAL = gql`
  query CREATE_DEAL {
    products {
      data {
        id
        attributes {
          Name
          ART
          Price
        }
      }
    }
    services {
      data {
        id
        attributes {
          Name
          ART
          Price
        }
      }
    }
  }
`
