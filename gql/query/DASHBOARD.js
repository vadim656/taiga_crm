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
    # services {
    #   data {
    #     id
    #     attributes {
    #       Name
    #       ART
    #       Price
    #     }
    #   }
    # }
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

export const USER_NOTES_COUNT = gql`
 query USER_NOTES_COUNT($START: DateTime, $END: DateTime){
  userRecords(
    filters: {
      Time: { gte: $START, lte: $END}
    }
  ) {
    data {
      id
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

export const CREATE_CLIENT_NOTE = gql`
  mutation CREATE_CLIENT_NOTE($DATE: DateTime, $DATEEND: DateTime, $NAME: String, $MASTER: ID, $CABINET: ID, $PHONE: String, $FIO:String, $SERVICES: [ID] ,$NOTE: String) {
    createUserRecord(data: { 
    Time: $DATE, 
    Name: $NAME,
    TimeEnd: $DATEEND,
    tovary_i_uslugis: $SERVICES,
    FIO: $FIO,
    Note: $NOTE,
    Phone: $PHONE,
    crm_cabinet : $CABINET,
    users_permissions_user: $MASTER
  }) {
      data {
        id
      }
    }
  }
`

export const DELETE_CLIENT_NOTE = gql`
  mutation DELETE_CLIENT_NOTE($ID: ID!) {
    deleteUserRecord(id: $ID) {
      data {
        id
      }
    }
  }
`

export const ALL_CLIENT_NOTES = gql`
  query {
    userRecords(pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          Name
          Time
          TimeEnd
          Note
          FIO
          Phone
          Status
          tovary_i_uslugis {
            data {
              attributes {
                Name
                Price
                UnitValue
              }
            }
          }
          users_permissions_user {
          data {
            id
            attributes {
              FIO
            }
          }
        }
        crm_cabinet{
          data{
            id
            attributes{
              Name
            }
          }
        }
        }
      }
    }
  }
`

export const ALL_CABINETS_NOTES = gql`
  query {
    crmCabinets {
      data {
        id
        attributes {
          Name
          ... on CrmCabinet {
            Name
            Time(pagination: { limit: 90 }) {
              DayCabinet
              id
              user_records(pagination: { limit: 90 }) {
                data {
                  id
                  attributes {
                    Name
                    Time
                    TimeEnd
                    tovary_i_uslugis {
            data {
              attributes {
                Name
              }
            }
          }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
