import gql from 'graphql-tag'

export const ALL_RECORDS = gql`
  query ALL_RECORDS {
    userRecords {
      data {
        id
        attributes {
          Name
          Time
          createdAt
          services {
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

export const ALL_RECORDS_FILTER = gql`
  query ALL_RECORDS_FILTER {
    userRecords {
      data {
        id
        attributes {
          Name
          Time
          createdAt
          services {
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
