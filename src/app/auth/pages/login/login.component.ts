import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  
  
  // Construimos el formulario con FormGroup e importamos los validadores predeterminados 'Validators' para los campos
  // Recuerda que la segunda posicion es para lo que sea sincrono (Un elemento o un array de elementos) y la tercera, asincrono
  // ponemos por defecto un email y una contraseña que ya están introducidos en la BD para no tener que ponerla cada vez que probamos
  miFormulario: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]

  });

  // Inyectamos el FormBuilder en el constructor para trabajar con este constructor de formularios
  constructor ( private fb: FormBuilder,
                private router: Router,
                private authService:AuthService) {} 

  login(){
    
    // this.authService.validarToken()
    //   .subscribe( resp => console.log(resp) );

    const { email, password } = this.miFormulario.value; 
    this.authService.login(email, password)
      .subscribe( ok => {
        console.log(ok);
        if( ok === true  ){
          this.router.navigateByUrl('/dashboard');
        }else{
          Swal.fire('Error', ok, 'error');
        }
      });
      
    
  }

}
