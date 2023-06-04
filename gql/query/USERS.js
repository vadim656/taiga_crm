import gql from 'graphql-tag'

export const CREATE_USER_DATA = gql`
  mutation CREATE_USER_DATA(
    $USERNAME: String
    $EMAIL: String
    $FIO: String
    $BONUS: Long
    $UID_SKLAD: String
    $DATER: DateTime
  ) {
    createUsersPermissionsUser(
      data: {
        username: $USERNAME
        email: $EMAIL
        FIO: $FIO
        Bonus: $BONUS
        UID_SKLAD: $UID_SKLAD
        DateRozhdenia: $DATER
        password: "taiga123"
        role: 1
      }
    ) {
      data {
        id
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation CREATE_USER(
    $USERNAME: String
    $EMAIL: String
    $FIO: String
    $BONUS: Long
    $UID_SKLAD: String
  ) {
    createUsersPermissionsUser(
      data: {
        username: $USERNAME
        email: $EMAIL
        FIO: $FIO
        Bonus: $BONUS
        UID_SKLAD: $UID_SKLAD
        password: "taiga123"
        role: 1
      }
    ) {
      data {
        id
      }
    }
  }
`

export const ALL_USER = gql`
  query ALL_USER {
    usersPermissionsUsers(
      filters: { role: { description: { eq: "Default" } } }
    ) {
      data {
        id
        attributes {
          Bonus
          FIO
          username
          UID_SKLAD
          email
          DateRozhdenia
          createdAt
          user_notes {
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
