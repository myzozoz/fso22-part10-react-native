import { gql } from '@apollo/client'

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    fullName
    language
    stargazersCount
    reviewCount
    forksCount
    ratingAverage
    ownerAvatarUrl
    id
    description
    url
  }
`
