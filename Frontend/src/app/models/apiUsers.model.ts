export interface UsersApiInterface{
  results: UserInterface []
}

export interface UserInterface{
  id: number;
  username: string;
  password: string;
  email: string;
  enabled: number;
  status: string;
}
