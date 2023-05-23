import gql from 'graphql-tag'

export const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS($PAGE: Int, $PAGE_SIZE: Int) {
    products(pagination: { pageSize: $PAGE_SIZE, page: $PAGE }) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          Name
          Rating
          Price
          Ostatki
          ART
          Active
        }
      }
    }
  }
`
