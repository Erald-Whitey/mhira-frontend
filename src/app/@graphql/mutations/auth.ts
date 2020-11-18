import gql from 'graphql-tag';

const login = gql`
  mutation($identifier: String!, $password: String!) {
    login(identifier: $identifier, password: $password) {
      accessToken
      refreshToken
      user {
        id
        workID
        firstName
        lastName
        phone
        email
        address
        passwordChangeRequired
        gender
        birthDate
        updatedAt
        createdAt
        roles {
          id
          name
          guard
          createdAt
          updatedAt
        }
        permissions {
          id
          name
          guard
          createdAt
          updatedAt
        }
      }
    }
  }
`;

const logout = gql`
  mutation {
    logout
  }
`;

export const AuthMutations = {
  login,
  logout,
};
