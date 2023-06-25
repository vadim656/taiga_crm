import gql from 'graphql-tag'


export const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS{
  products(pagination: { limit: 1000 }) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        Name
        Ostatki
        ART
        Active
        Unit
        Price
        UnitValue
      }
    }
  }
}

`