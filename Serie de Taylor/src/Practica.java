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
		
			int opcion = 0;
			do
			{
				bw.write("Digite la opción deseada: ");
				bw.write("\n\t1. Función e^x. \n\t2. Función seno(x) \n\t3. Función coseno(x). \n\t4. Salir.\n");
				bw.flush();
				opcion = Integer.parseInt(br.readLine());
				
				switch (opcion) 
				{
					case 1:
						bw.write("Ingrese 'x' y luego 'n': \n");
						bw.flush();
						bw.write(euler(Integer.parseInt(br.readLine()), Integer.parseInt(br.readLine()))+"\n");
					break;
					case 2:
						bw.write("Ingrese 'x' y luego 'n': \n");
						bw.flush();
						bw.write(seno(Integer.parseInt(br.readLine()), Integer.parseInt(br.readLine()))+"\n");
					break;
					case 3:
						bw.write("Ingrese 'x' y luego 'n': \n");
						bw.flush();
						bw.write(coseno(Integer.parseInt(br.readLine()), Integer.parseInt(br.readLine()))+"\n");
					break;
					
					default: bw.write("Digite una opción correcta.\n"); bw.flush(); break;
				}
						
				
			} while (opcion != 4);
			
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
