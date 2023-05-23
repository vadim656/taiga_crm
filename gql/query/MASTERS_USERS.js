import gql from 'graphql-tag'

export const MASTERS_USERS = gql`
  query MASTERS_USERS {
    usersPermissionsUsers(
      filters: { role: { description: { eq: "Master" } } }
    ) {
      data {
        id
        attributes {
          role {
            data {
              attributes {
                description
              }
            }
          }
          username
          FIO
          Zapisi
          user_status {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`
