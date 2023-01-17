import { gql } from '@apollo/client'
import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query GetRepositories {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  query GetRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
      reviews {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
`

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`
