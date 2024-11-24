import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Simulación de autenticación (puedes conectar esto con un backend luego)
    if (email === 'admin@example.com' && password === 'password') {
      localStorage.setItem(this.tokenKey, 'dummy-auth-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}

