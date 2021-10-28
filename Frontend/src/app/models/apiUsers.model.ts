export interface UsersApiInterface{
  results: UserInterface []
}

export interface UserInterface{
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
  enabled: number;
  status: string;
}
