package exam;

import java.util.Scanner;

public class Q11654 {

	private Scanner keyboard;
	private String small;
	private String big;
	private String num;
	
	public Q11654() {
		this.keyboard = new Scanner(System.in);
	}
	
	public void startQ() {
		System.out.println("입력해주세요");
		this.small = this.keyboard.nextLine();
		this.big = this.keyboard.nextLine();
		this.num = this.keyboard.nextLine();
		
		
		
		
	}
	
	
	public static void main(String[] args) {
		Q11654 q11654 = new Q11654();
		q11654.startQ();
	}
	
}
