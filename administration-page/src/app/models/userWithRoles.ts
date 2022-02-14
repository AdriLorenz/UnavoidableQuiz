import { Classroom } from './classroom';
import { Role } from './role';
import { User } from './user';

export class UserWithRoles extends User {
  public roles: Role;

  constructor(
    $user_id: number,
    $user_name: string,
    $user_email: string,
    $user_password: string,
    $user_score: number,
    $user_games_played: number,
    $classroom_id_fk: number,
    $role_id_fk: number,
    $roles: Role
  ) {
    super(
      $user_id,
      $user_name,
      $user_email,
      $user_password,
      $user_score,
      $user_games_played,
      $classroom_id_fk,
      $role_id_fk
    );
    this.roles = $roles;
  }
}
