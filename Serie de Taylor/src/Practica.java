import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;


/**
 * @author Nicolas David Espejo Bernal
 *
 */
public class Practica 
{
	public static void main(String[] args) 
	{
		try 
		{ 
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter (System.out));
			BufferedReader br = new BufferedReader(new InputStreamReader (System.in));
		
			int n;
			//n= Integer.parseInt(br.readLine());
			bw.write("Hola: "+ euler(2,3));
			
			bw.flush();
			bw.close();
		
		}catch (Exception ex){}
	}
	
	
	/**
	 * Retorna el factorial de un número.
	 */
	public static double factorial (int n) { return (n == 0) ? 1 : n * factorial (n - 1); }
	
	/**
	 * Retorna el resultado de un número elevado a una potencia.
	 * @param x = base
	 * @param n = exponencial
	 */
	public static int potencia (int x, int n) 
	{ 
		if (n <= 1)
			return (n == 0) ? 1 : x;
		else
			return x * potencia(x, n - 1);
	}
	
	/**
	 * Utiliza la función de Taylor para hallar euler de x
	 */
	public static double euler (int x, int n) 
	{
		if (n == 0)
			return potencia(x, n)/factorial(n);
		else
			return potencia(x, n)/factorial(n) + euler (x, n - 1);
	}
	
	/**
	 * Utiliza la función de Taylor para hallar seno de x
	 */
	public static double seno (int x, int n)
	{
		if (n == 0)
			return ( potencia(-1, n) * potencia(x, 2*n+1) ) / factorial(2*n+1) ;
		else
			return ( potencia(-1, n) * potencia(x, 2*n+1) ) / factorial(2*n+1) + seno (x, n - 1);
	}
	
	/**
	 * Utiliza la función de Taylor para hallar coseno de x
	 */
	public static double coseno (int x, int n)
	{
		if (n == 0)
			return ( potencia(-1, n) * potencia(x, 2*n) ) / factorial(2*n);
		else
			return ( potencia(-1, n) * potencia(x, 2*n) ) / factorial(2*n) + coseno (x, n - 1);
	}

}
