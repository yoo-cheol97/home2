package homework;

public class Restaurant {

	private String name;
	private int capital;
	private double alcoLimit = 40;
	private int fullLimit = 80;
	
	public Restaurant(String name, int capital, int alcoLimit, int fullLimit) {
		this.name = name;
		this.capital = capital;
		this.alcoLimit = alcoLimit;
		this.fullLimit = fullLimit;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName() {
		this.name = name;
	}
	
	public int getCapital() {
		return capital;
	}
	
	public void setCapital() {
		this.capital = capital;
	}
	
	public double getAlcoLimit() {
		return alcoLimit;
	}
	
	public void setAlcoLimit() {
		this.alcoLimit = alcoLimit;
	}
	
	public int getFullLimit() {
		return fullLimit;
	}
	
	public void setFullLimit() {
		this.fullLimit = fullLimit;
	}
	
	public void customerOrder(Customer customer, Menu menu, int num) {
		
		int totalPrice = menu.getMenuPrice() * num;
		int customerWallet = customer.getWallet();
		double customerDrunken = customer.getDrunkenLevel();
		int customerFull = customer.getFullLevel();
		
		if(customer.getWallet() > totalPrice) {
		
		if(customer.getFullLevel() < this.fullLimit && customer.getDrunkenLevel() < this.alcoLimit) {
			customerDrunken += this.alcoLimit * 0.1 * num;
			customer.setDrunkenLevel(customerDrunken);
			
			customerFull += this.fullLimit * num;
			customer.setFullLevel(customerFull);
			
			System.out.println("고객명 : " + customer.getName());
			System.out.println(customer.getName() + "의 취함 정도: " + customer.getDrunkenLevel());
			System.out.println(customer.getName() + "의 배부름 정도: " + customer.getFullLevel());
			System.out.println(customer.getName() + "의 소지금: " + customer.getWallet());
			System.out.println("주문 금액: " + totalPrice);
			System.out.println("주문 성공");
			
			
			}
		customerWallet -= totalPrice;
		customer.setWallet(customerWallet);
		return;
		}
		else {
			System.out.println("주문 실패");
		}
		
	}
}
