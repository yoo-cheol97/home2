package exam;

import java.util.Scanner;

public class Q2743 {
	
	private Scanner keyboard;
	private String word;
	private int l;
	
	public Q2743() {
		this.keyboard = new Scanner(System.in);
	}
	
	public void startQ() {
		System.out.println("단어를 입력해주세요");
		this.word = this.keyboard.nextLine();
		l = this.word.length();
		System.out.println(l);
		
		
	}
	
	
	public static void main(String[] args) {
		Q2743 q2743 = new Q2743();
		q2743.startQ();
	}

}
