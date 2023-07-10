import gql from 'graphql-tag'


export const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS{
    products(pagination: { limit: 1000 }) {
    data {
      id
      attributes {
        Name
        ART
        Active
        purchasePrice
        Price
        group {
          data {
            id
            attributes {
              Name
            }
          }
        }
        Ostatki
        Unit
        UnitValue
        Type
      }
    }
  }
}`

export const ALL_GROUPS = gql`
  query ALL_GROUPS{
    groups(pagination: { limit: 1000 }) {
    data {
      id
      attributes {
        Name
        products {
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
}`

export const ALL_MASTERS = gql`
  query ALL_MASTERS {
    usersPermissionsUsers(filters: { role: { description: { eq: "Master" } } }) {
    data {
      id
      attributes {
        FIO
        Speciality
        role {
          data {
            attributes {
              description
            }
          }
        }
      }
    }
  }
  }
`

export const ALL_CABINETS = gql`
  query ALL_CABINETS {
    crmCabinets(sort: "Name:asc"){
    data{
      id
      attributes{
        Name
      }
    }
  }
  }
`