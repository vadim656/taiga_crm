import gql from 'graphql-tag'


export const ALL_SERT = gql`
  query ALL_SERT{
    products(filters: { group: { id: { eq: 129 } } }) {
    data {
        id
      attributes {
        Name
        Price
        ART
      }
    }
  }
}

`


export const CREATE_SERT = gql`
  mutation CREATE_SERT($NAME:String, $PRICE: Float) {
  createProduct(
    data: {
      Name: $NAME,
      Price: $PRICE,
      Active: true,
      group :129
    }
  ){
    data{
      id
    }
  }

}

`