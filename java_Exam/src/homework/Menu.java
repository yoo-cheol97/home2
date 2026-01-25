package homework;

/**
 * 음식 이름
 * 음식 가격
 * 음식 배부름
 * 
 * 술 이름
 * 술 가격
 * 술 취기
 */

public class Menu {
	
	private String menuName;
	private int menuPrice;
	private int menuFull;
	private String alcoName;
	private int alcoPrice;
	private int alcoFull;
	
	public Menu(String menuName, int menuPrice, int menuFull, String alcoName, int alcoPrice, int alcoFull) {
		this.menuName = menuName;
		this.menuPrice = menuPrice;
		this.menuFull = menuFull;
		this.alcoName = alcoName;
		this.alcoPrice = alcoPrice;
		this.alcoFull = alcoFull;
	}
	
	public String getMenuName() {
		return menuName;
	}
	
	public int getMenuPrice() {
		return menuPrice;
	}
	
	public int getMenuFull() {
		return menuFull;
	}
	
	public String getAlcoName() {
		return alcoName;
	}
	
	public int getAcloPrice() {
		return alcoPrice;
	}
	
	public int getAlcoFull() {
		return alcoFull;
	}
	

}
