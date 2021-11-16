export interface UsersApiInterface{
  results: UserInterface []
}

export interface UserInterface{
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  enabled: number;
  status: string;
}
