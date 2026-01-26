package exam;

public class Q181843 {
	
	public static int solution(String my_string, String target) {
        if (my_string.contains(target)) {
        	return 1; 
        } 
        else {
        	return 0; 
        }
    }

    public static void main(String[] args) {
        System.out.println("banana" + "ana" + solution("banana", "ana"));  
        System.out.println("banana" + "wxyz" +solution("banana", "wxyz")); 
    }

}
