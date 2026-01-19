package java_Exam;

public class homework {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		for(int i = 2; i <= 100000; i++ ) {
			int yak = 0;
		
			for(int j = 1; j <= i; j++) {
				if(i % j == 0) {
					yak++; // j는 i의 약수
				}
			}
		if( yak == 2) {
			System.out.println(i);
		}
			
		}
	}

}