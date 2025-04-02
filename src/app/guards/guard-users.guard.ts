import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core'; // Use `inject` instead of `Inject`
import { isPlatformBrowser } from '@angular/common';

export const guardUsersGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Correctly inject the Router
  const platformId=inject(PLATFORM_ID);
  if(isPlatformBrowser(platformId)){
    const userType=localStorage.getItem("userType")
    if(userType==="User"){return true}

  }
    router.navigate(['']); // Redirect to the default route
    return false; // Block navigation
  
};