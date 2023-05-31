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

export const USER_NOTES = gql`
  query USER_NOTES($ID: ID) {
    usersPermissionsUser(id: $ID) {
      data {
        id
        attributes {
          user_notes(sort: "createdAt:desc") {
            data {
              id
              attributes {
                Name
                Desc
                createdAt
              }
            }
          }
        }
      }
    }
  }
`
export const CREATE_USER_NOTES = gql`
  mutation CREATE_USER_NOTES($ID: ID, $DESC: String) {
    createUserNote(data: { Desc: $DESC, users_permissions_user: $ID }) {
      data {
        id
        attributes {
          Name
          Desc
        }
      }
    }
  }
`
export const DELETE_USER_NOTES = gql`
  mutation DELETE_USER_NOTES($ID: ID!) {
    deleteUserNote(id: $ID) {
      data {
        id
      }
    }
  }
`
