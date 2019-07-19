/**
 * representa um usuário
 */
export type User = {
  username: string
}

export const USER_LOGIN_REQUEST = Symbol('USER_LOGIN_REQUEST')
export const USER_LOGIN_SUCCESS = Symbol('USER_LOGIN_SUCCESS')
export const USER_LOGIN_FAILURE = Symbol('USER_LOGIN_FAILURE')
