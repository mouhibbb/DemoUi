import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  form!:FormGroup;
  constructor(private userService:UserService,private router:Router, private fb:FormBuilder){
    this.form=this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(2)]],
      lastName: ['',[Validators.required,Validators.minLength(2)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',Validators.required]
    
    }, { validators: this.passwordsMatchValidator })
  }
  passwordsMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (!password || !confirmPassword) {
      return null; // Si l'un des champs est inexistant, on ne fait rien
    }
  
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true }); // Ajoute une erreur sur confirmPassword
      return { mismatch: true }; // Retourne une erreur pour le validateur global
    } 
  
    // Si les mots de passe correspondent, on supprime l'erreur mismatch
    confirmPassword.setErrors(null);
    return null;
  }
  
  
  isActivated: Boolean=false;
  inscription(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
      
    }


    else{
      //const salt = bcrypt.genSaltSync(10); // Nombre de tours (10 est une valeur sûre)
     // const hashedPassword = bcrypt.hashSync(this.password, salt);

      const userData = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      isActivated:this.isActivated,
      role:1
      
      };
      this.userService.registerUser(userData).subscribe({
        next: (response) => {
          console.log('Utilisateur enregistré avec succès:', response);
          // Réinitialisez le formulaire après l'enregistrement
          this.form.reset();

          this.router.navigate([''])
        },
        error: (error) => {
          console.error('Erreur lors de l\'enregistrement:', error);
        },
        complete: () => {
          console.log('Requête terminée'); // Optionnel
        },
      });  
    }
  }
}
