$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/MyTest.feature");
formatter.feature({
  "name": "Pruebas de conexion a BD local y testeo del sitio con Selenium y Cucumber con la nomenclatura de Gherkin",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Conexion a MySql 4 : Sin datos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Conectar como Username: \"\" y Password: \"\" a la base de datos MySql: \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.conectarBD(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Conexion a MySql 3 : Utilizando Username y Password incorrectos, URL Vacia",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Conectar como Username: \"user\" y Password: \"pass\" a la base de datos MySql: \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.conectarBD(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Conexion a MySql 2 : Utilizando Username y Password incorrectos, URL Correcta",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Conectar como Username: \"user\" y Password: \"pass\" a la base de datos MySql: \"jdbc:mysql://localhost:3306/clinica\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.conectarBD(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Conexion a MySql 1 : Todos los datos correctos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Conectar como Username: \"root\" y Password: \"root\" a la base de datos MySql: \"jdbc:mysql://localhost:3306/clinica\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.conectarBD(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Conectar al Sitio 3 : Intenta iniciar sesion sin credenciales.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Abrir navegador",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSteps.abrir_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingresa Username \"\" y Password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.ingresa_Username_y_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "inicia sesion",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.inicia_sesion()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cerrar navegador",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.cerrar_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Conectar al Sitio 2 : Intenta iniciar sesion con credenciales incorrectas.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Abrir navegador",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSteps.abrir_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingresa Username \"userX\" y Password \"passX\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.ingresa_Username_y_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "inicia sesion",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.inicia_sesion()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cerrar navegador",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.cerrar_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Conectar al Sitio 1 : Inicia sesion con credenciales validas.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Abrir navegador",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSteps.abrir_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingresa Username \"user\" y Password \"pass\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.ingresa_Username_y_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "inicia sesion",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.inicia_sesion()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cerrar navegador",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.cerrar_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Conectar al sitio 0 : Inicia sesion, Agenda una hora medico veterinaria.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Abrir navegador",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSteps.abrir_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingresa Username \"user\" y Password \"pass\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.ingresa_Username_y_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "inicia sesion",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.inicia_sesion()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Agenda Hora RUT\u003d\"1281992\" NOMBRE\u003d\"PEDRO\" APELLIDO\u003d\"PEREZ\" DIRECCION\u003d\"CAMINO 44\" CORREO\u003d\"correo@elek.cl\" FONO\u003d\"222813223\" NOMBRE_MASCOTA\u003d\"LUNA\" TIPO\u003d\"Gato\" EDAD\u003d\"7\" HR\u003d\"15\" MN\u003d\"45\" DIA\u003d\"1\" MES\u003d\"Agosto\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.Agenda_hora(String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Reservar Hora",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.reservar_hora()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cerrar navegador",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.cerrar_navegador()"
});
formatter.result({
  "status": "skipped"
});
});