export interface UsersApiInterface{
  //
  results: ResultUsers []

}

export interface ResultUsers{
  id: number;
  username: string;
  password: string;
  email: string;
  enabled: number;
}
