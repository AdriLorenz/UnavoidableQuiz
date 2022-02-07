import { Role } from './role';

export class User {
  constructor(
    $id: number,
    $user_name: string,
    $user_email: string,
    $user_password: string,
    $user_score: number,
    $user_games_played: number,
    $classroom_id_fk: number,
    $role_id_fk: number,
    $role: Role
  ) {
    this.id = $id;
    this.user_name = $user_name;
    this.user_email = $user_email;
    this.user_password = $user_password;
    this.user_score = $user_score;
    this.user_games_played = $user_games_played;
    this.classroom_id_fk = $classroom_id_fk;
    this.role_id_fk = $role_id_fk;
    this.role = $role;
  }
  public id: number;
  public user_name: string;
  public user_email: string;
  public user_password: string;
  public user_score: number;
  public user_games_played: number;
  public classroom_id_fk: number;
  public role_id_fk: number;
  public role: Role;
}