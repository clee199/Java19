public class Ingredients extends Food {

    //product amount
    protected double amount;

    //getters and setters
    public double getAmount() { return amount; }

    public void setAmount(double amount) { this.amount = amount; }

    //constructor
    public Ingredients(String name, double kcal, double amount) {
        super(name, kcal);
        this.amount = amount;
    }
    public String getIngredients() { return name; }

    public double getKcal() { return kcal; }
}
