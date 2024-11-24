import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = localStorage.getItem('authToken'); // Aquí se debe comprobar el token o estado de autenticación.

    if (isAuthenticated) {
      return true; // Si está autenticado, permite el acceso.
    } else {
      this.router.navigate(['/login']); // Si no está autenticado, redirige al login.
      return false;
    }
  }
}



