/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllUsersQuery
// ====================================================

export interface AllUsersQuery_getAllUsers {
  __typename: "User";
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AllUsersQuery {
  getAllUsers: AllUsersQuery_getAllUsers[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserByIdQuery
// ====================================================

export interface UserByIdQuery_getUserById {
  __typename: "User";
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  favoriteColors: string[];
  quote: string;
}

export interface UserByIdQuery {
  getUserById: UserByIdQuery_getUserById;
}

export interface UserByIdQueryVariables {
  userId: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserDetail
// ====================================================

export interface UserDetail {
  __typename: "User";
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  favoriteColors: string[];
  quote: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User {
  __typename: "User";
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
