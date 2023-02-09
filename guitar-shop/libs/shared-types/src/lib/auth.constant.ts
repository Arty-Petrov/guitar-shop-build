export const enum UserPasswordLength {
  Min = 6,
  Max = 12,
}

export const enum UserNameLength {
  Min = 1,
  Max = 15,
}

export const AuthApiError = {
  EmailNotValid: 'The email is not valid',
  Exists: 'User with this email already exists',
  NameNotValid: `User name, min ${UserNameLength.Min}, max ${UserNameLength.Max} chars length`,
  NotFound: 'User not found',
  PasswordNotValid: `Password min length is  ${UserPasswordLength.Min}, max is ${UserPasswordLength.Max}`,
  PasswordIsWrong: 'User password is wrong',
} as const;

export const AuthApiDescription = {
  Email: 'User unique email address',
  Id: 'The uniq user id',
  isAdmin: `Admin user flag`,
  Name: `User name and surname, min ${UserNameLength.Min}, max ${UserNameLength.Max} chars`,
  Password: `User password, min ${UserPasswordLength.Min}, max ${UserPasswordLength.Max} chars length`,
  Token: 'Access token',
} as const;
