import gql from 'graphql-tag'

export const ALL_SERVICES = gql`
  query ALL_SERVICES {
    services {
      data {
        id
        attributes {
          Name
          Price
          UID
          Active
        }
      }
    }
  }
`
