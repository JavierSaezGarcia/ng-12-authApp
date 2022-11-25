import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  // Inyectamos el FormBuilder en el constructor para trabajar con este constructor de formularios
  // Inyectamos tambien router para navegar por URL
  constructor ( private fb: FormBuilder,
                private router: Router ) {} 

  // Construimos el formulario con FormGroup e importamos los validadores predeterminados 'Validators' para los campos
  // Recuerda que la segunda posicion es para lo que sea sincrono (Un elemento o un array de elementos) y la tercera, asincrono
  // ponemos por defecto un email y una contraseña que ya están introducidos en la BD para no tener que ponerla cada vez que probamos
  miFormulario: FormGroup = this.fb.group({
    name: ['Test4', [Validators.required]],
    email: ['test4@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  register() {
    console.log(this.miFormulario.value);
    
    this.router.navigateByUrl('/dashboard');
  }

}
