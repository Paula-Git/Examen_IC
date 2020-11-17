Feature: Pruebas de conexion a BD, login del sitio y reserva 
Scenario: Conexion BD Incorrecta
Given Probar conexion BD ""
Scenario: Conexion BD Correcta
Given Probar conexion BD "jdbc:mysql://localhost:3306/clinica"

Scenario: Caso 1: Login sin datos
Given abrir navegador
When ingresa Username "" y Password ""
Then inicia sesion

Scenario: Caso 2: Login con datos incorrectos
Given abrir navegador
When ingresa Username "hola" y Password "hola"
Then inicia sesion

Scenario: Caso 3: Login con datos correctos
Given abrir navegador
When ingresa Username "paula" y Password "123"
Then inicia sesion

Scenario: Conectar al sitio,iniciar sesión, reservar hora.
Given abrir navegador
When ingresa Username "paula" y Password "123" 
Then inicia sesion
When Agenda Hora RUT="13154788" NOMBRE="Joaquin" APELLIDO="Perez" DIRECCION="alamos" CORREO="joaquin@mail.cl" FONO="78787777" NOMBRE_MASCOTA="benja" TIPO="Gato" EDAD="2" HR="19:45" FECHA="25-11-2020"
Then Reservar Hora
And Cerrar navegador