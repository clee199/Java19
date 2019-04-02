public class Food {

    //product short name
    protected String name;

    //calories per 50gr.
    protected double kcal;


    //getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getKcal() {
        return kcal;
    }

    public void setKcal(double kcal) {
        this.kcal = kcal;
    }

    //constructor
    public Food(String name, double kcal) {
        this.name = name;
        this.kcal = kcal;
    }

    //print methods
    public void printName()
    {
        System.out.println("Name:" + name);
    }
    public void printKcal(int gr)
    {
        System.out.println("Kcal:" + kcal*gr);
    }
    public double printKcal(double gr)
    {
        return kcal * gr;
    }


}

