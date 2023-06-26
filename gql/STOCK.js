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