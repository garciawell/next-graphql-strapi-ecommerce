import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`

export default GET_LANDING_PAGE
