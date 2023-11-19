export type Roles = 'Crowd' | 'Participant' | 'Moderator' | 'Admin';

export interface IUserResponseDTO {
  accessToken: string;
  name: string;
  nickname: string;
  cpf: string;
  role: Roles[];
}

export interface IUserRequestDTO {
  email: string;
  password: string;
}
