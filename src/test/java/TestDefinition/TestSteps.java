package TestDefinition;

import java.sql.DriverManager;
import java.sql.Connection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

//import TestRunner.abrir_navegador;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;



public class TestSteps {
	
	Connection connection;
	WebDriver driver;

	@Given("abrir navegador")
	public void abrir_navegador() {

		System.out.println("\nAbre el navegador URL: 'http://localhost:8081/Web_Pet_Smile/login.html'");
		System.setProperty("webdriver.gecko.driver", "C:\\DEV\\geckodriver.exe");
		driver = new FirefoxDriver();
		//driver.manage().window().maximize();
		driver.get("http://localhost:8081/Web_Pet_Smile/login.html");
	}

	@When("ingresa Username {string} y Password {string}") 
	public void ingresa_Username_y_Password(String string, String string2) { 
	
		System.out.println("En este paso ingresa las credenciales de usuario"); 
		driver.findElement(By.id("nombre")).sendKeys(string);
		driver.findElement(By.id("pass")).sendKeys(string2);

	}

	@Then("inicia sesion")
	public void inicia_sesion() {
	    
		System.out.println("Intenta iniciar sesion mediante el boton Login");
		driver.findElement(By.id("button")).click();
		
	}
	
	@When("Agenda Hora RUT={string} NOMBRE={string} APELLIDO={string} DIRECCION={string} CO0RREO={string} FONO={string} NOMBREMASCOTA={string} TIPO={string} EDAD={string} HORA={string} FECHA={string}")
	public void Agenda_hora(String string1, String string2,String string3, String string4,
			                String string5, String string6,String string7, String string8,
			                String string9, String string10,String string11) {
		
		driver.findElement(By.id("rut")).sendKeys(string1);
		driver.findElement(By.id("nombre")).sendKeys(string2);
		
		driver.findElement(By.id("apellido")).sendKeys(string3);
		driver.findElement(By.id("direccion")).sendKeys(string4);

		driver.findElement(By.id("correo")).sendKeys(string5);
		driver.findElement(By.id("telefono")).sendKeys(string6);

		driver.findElement(By.id("nombreMascota")).sendKeys(string7);
		driver.findElement(By.id("tipoMascota_1")).sendKeys(string8);	
		
		driver.findElement(By.id("edad")).sendKeys(string9);
		driver.findElement(By.id("hora")).sendKeys(string10);

		driver.findElement(By.id("fecha")).sendKeys(string11);
		
	}
	
	@Then("Reservar Hora")
	public void reservar_hora() {
	    
		driver.findElement(By.id("button")).click();
		
	}
	
	
	@And("Cerrar navegador")
	public void cerrar_navegador() {
		System.out.println("Cerrar el navegador");
		driver.quit();

	}
	
	@When("Probar conexion BD {string}")
	public void conexionBD(String url) {
		
		try {
        Class.forName("com.mysql.jdbc.Driver");
        DriverManager.getConnection(url,"root","root");		
        System.out.println("OK");
		}catch(Exception ex) {
			System.out.println("FALLO");
		}
		
	}

}
