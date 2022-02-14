import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css'],
})
export class RegisterButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreateUserPage() {
    this.router.navigateByUrl('/user/create');
  }
}
