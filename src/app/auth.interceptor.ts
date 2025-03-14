import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getAuthToken();
    if (authToken) {
      const authReq = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${authToken}`),
      });
      //return next.handle(authReq);
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Token might be expired
            this.loginService.logout();
            this.router.navigate(["/login"]);
          } else if (error.status === 403) {
            // Handle 403 Forbidden error
            this.router.navigate(["/login"]);
          } else if (error.status === 404) {
            //Handle 404 Not Found error
            this.router.navigate(["/not-found"]);
          } else if (error.status >= 500) {
            // Handle 500 Internal Server Error
            this.router.navigate(["/server-error"]);
          }
          return throwError(error);
        })
      );
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Token might be expired
          this.loginService.logout();
          this.router.navigate(["/login"]);
        } else if (error.status === 403) {
          // Handle 403 Forbidden error
          this.router.navigate(["/login"]);
        } else if (error.status === 404) {
          //Handle 404 Not Found error
          this.router.navigate(["/not-found"]);
        } else if (error.status >= 500) {
          // Handle 500 Internal Server Error
          this.router.navigate(["/server-error"]);
        }
        return throwError(error);
      })
    );
  }
}
