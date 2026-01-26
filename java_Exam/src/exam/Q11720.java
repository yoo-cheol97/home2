package exam;

import java.util.Scanner;

public class Q11720 {
	
	private Scanner keyboard;
	private String num;
	private String numCount;
	private String sum;
	
	
	public Q11720() {
		this.keyboard = new Scanner(System.in);
	}
	
	public void startQ() {
		
		System.out.println("숫자의 개수 입력");
		this.numCount = this.keyboard.nextLine();
		System.out.println("숫자 입력");
		this.num = this.keyboard.nextLine();
		
		for(int i = 0; i < num.length(); i++) {
			sum += Integer.parseInt(num.charAt(i)+"");
			System.out.println(sum);
		}
		
	}
	
	
	public static void main(String[] args) {
		Q11720 q11720 = new Q11720();
		q11720.startQ();
	}
	
	
}
