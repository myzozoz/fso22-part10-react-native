import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        node {
          fullName
          language
          stargazersCount
          reviewCount
          forksCount
          ratingAverage
          ownerAvatarUrl
          id
          description
        }
      }
    }
  }
`
