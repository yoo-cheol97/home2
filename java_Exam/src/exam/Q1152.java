package exam;

import java.util.Scanner;

public class Q1152 {
	
	private Scanner keyboard;
	private String word;
	
	
	public Q1152() {
		this.keyboard = new Scanner(System.in);
	}
	
	public void startQ() {
		
		System.out.println("단어 입력");
		this.word = this.keyboard.nextLine();
		
		String[] a = word.split(" ");
		System.out.println(a.length);
		
	}
	
	
	public static void main(String[] args) {
		Q1152 q1152 = new Q1152();
		q1152.startQ();
	}

}
