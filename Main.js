import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // write your code here

        //string for the user choice
        String cl;

        //variables to store the product choice and amount
        int fcode;
        double famount;

        //Scanner for asking users
        Scanner sc = new Scanner(System.in);

        //our application is going to have 40 count products
        Food[] cfs = new Food[39];

        //create all the products
        Food cf1 = new Food ("Apple", 25);
        Food cf2 = new Food ("Banana",44);
        Food cf3 = new Food ("Oranges", 18.5);
        Food cf4 = new Food ("Kiwi", 24.5);
        Food cf5 = new Food ("Strawberries", 14);
        Food cf6 = new Food ("Mango", 28.5);
        Food cf7 = new Food ("Pineapple", 24.8);
        Food cf8 = new Food ("Grapes", 34);
        Food cf9 = new Food ("Blueberries", 28);
        Food cf10 = new Food ("Lemon", 9);
        Food cf11 = new Food ("Pasta", 173);
        Food cf12 = new Food ("Rice", 65);
        Food cf13 = new Food ("Potatoes", 37.5);
        Food cf14 = new Food ("Bread", 102.5);
        Food cf15 = new Food ("Sugar", 194);
        Food cf16 = new Food ("Chocolate", 268);
        Food cf17 = new Food ("Egg", 74);
        Food cf18 = new Food ("Pork", 132);
        Food cf19 = new Food ("Chicken", 82.5);
        Food cf20 = new Food ("Carrot",14);
        Food cf21 = new Food ("Tomato", 9);
        Food cf22 = new Food ("Zucchini", 10);
        Food cf23 = new Food ("Salad", 8);
        Food cf24 = new Food ("Broccoli", 15.5);
        Food cf25 = new Food ("Cauliflower", 12);
        Food cf26 = new Food ("Aubergine", 7.5);
        Food cf27 = new Food ("Onion",21 );
        Food cf28 = new Food ("Spinach", 12);
        Food cf29 = new Food ("Cucumber", 8);
        Food cf30 = new Food ("Leaks", 12.5);
        Food cf31 = new Food ("Avocado", 80);
        Food cf32 = new Food ("Beef", 95);
        Food cf33 = new Food ("Cheese", 202);
        Food cf34 = new Food ("Fish", 143);
        Food cf35 = new Food ("Milk", 48);
        Food cf36 = new Food ("Lentils", 82);
        Food cf37 = new Food ("Oats", 195);
        Food cf38 = new Food ("Nuts", 311);
        Food cf39 = new Food ("Yogurt", 28);

        //Add products to the array
        cfs[0] = cf1;
        cfs[1] = cf2;
        cfs[2] = cf3;
        cfs[3] = cf4;
        cfs[4] = cf5;
        cfs[5] = cf6;
        cfs[6] = cf7;
        cfs[7] = cf8;
        cfs[8] = cf9;
        cfs[9] = cf10;
        cfs[10] = cf11;
        cfs[11] = cf12;
        cfs[12] = cf13;
        cfs[13] = cf14;
        cfs[14] = cf15;
        cfs[15] = cf16;
        cfs[16] = cf17;
        cfs[17] = cf18;
        cfs[18] = cf19;
        cfs[19] = cf20;
        cfs[20] = cf21;
        cfs[21] = cf22;
        cfs[22] = cf23;
        cfs[23] = cf24;
        cfs[24] = cf25;
        cfs[25] = cf26;
        cfs[26] = cf27;
        cfs[27] = cf28;
        cfs[28] = cf29;
        cfs[29] = cf30;
        cfs[30] = cf31;
        cfs[31] = cf32;
        cfs[32] = cf33;
        cfs[33] = cf34;
        cfs[34] = cf35;
        cfs[35] = cf36;
        cfs[36] = cf37;
        cfs[37] = cf38;
        cfs[38] = cf39;


        //variables to store the product choice and amount
        int icode;
        double icalories;
        double iamount;

        //our first recipe is going to have 5 count ingredients
        Ingredients[] list_chcake = new Ingredients[5];

        //create all the ingredients
        Ingredients ing11 = new Ingredients ("Egg", 270, 180 );
        Ingredients ing12 = new Ingredients ("Milk",192, 200);
        Ingredients ing13 = new Ingredients ("Flour", 546, 150 );
        Ingredients ing14 = new Ingredients ("Chocolate",536, 100);
        Ingredients ing15 = new Ingredients ("Sugar", 504, 130 );

        //Add ingredients to the array
        list_chcake[0] = ing11;
        list_chcake[1] = ing12;
        list_chcake[2] = ing13;
        list_chcake[3] = ing14;
        list_chcake[4] = ing15;

        //our second recipe is going to have 4 count ingredients
        Ingredients[] list_cacake = new Ingredients[4];

        //create all the products
        Ingredients ing21 = new Ingredients ("Sugar", 679, 175 );
        Ingredients ing22 = new Ingredients ("Carrot",40, 140);
        Ingredients ing23 = new Ingredients ("Egg", 270, 180 );
        Ingredients ing24 = new Ingredients ("Flour", 546, 150 );

        //Add ingredients to the array
        list_cacake[0] = ing21;
        list_cacake[1] = ing22;
        list_cacake[2] = ing23;
        list_cacake[3] = ing24;

        //our application is going to have 6 count ingredients
        Ingredients[] list_spcake = new Ingredients[6];

        //our third recipe is going to have 6 count ingredients
        Ingredients ing31 = new Ingredients ("Cheese", 1212, 300 );
        Ingredients ing32 = new Ingredients ("Spinach",108, 450);
        Ingredients ing33 = new Ingredients ("Onions", 21, 50 );
        Ingredients ing34 = new Ingredients ("Milk",48, 50);
        Ingredients ing35 = new Ingredients ("Egg", 270, 180 );
        Ingredients ing36 = new Ingredients ("Flour", 546, 150 );

        //Add ingredients to the array
        list_spcake[0] = ing31;
        list_spcake[1] = ing32;
        list_spcake[2] = ing33;
        list_spcake[3] = ing34;
        list_spcake[4] = ing35;
        list_spcake[5] = ing36;

        //our application is going to have 6 count ingredients
        Ingredients[] list_checake = new Ingredients[4];

        //our fourth recipe is going to have 4 count ingredients
        Ingredients ing41 = new Ingredients ("Cheese", 1212, 300 );
        Ingredients ing42 = new Ingredients ("Milk",48, 50);
        Ingredients ing43 = new Ingredients ("Egg", 270, 180 );
        Ingredients ing44 = new Ingredients ("Flour", 546, 150 );

        //Add ingredients to the array
        list_checake[0] = ing41;
        list_checake[1] = ing42;
        list_checake[2] = ing43;
        list_checake[3] = ing44;


        //new recipes
        Recipes r1 = new Recipes("Chocolate Cake", "Annalisa's delicious chocolate cake.", list_chcake);
        Recipes r2 = new Recipes("Carrot Cake", "Miriam's healthy carrot cake.", list_cacake);
        Recipes r3 = new Recipes("Spinach Cake", "Constantin's green spinach cake.", list_spcake);
        Recipes r4 = new Recipes("Cheese Cake", "Enrico's fat cheese cake.", list_checake);


        // START THE COMMAND LINE INTERFACE (TEXT INTERFACE) BELOW

        //start the calculation process
        System.out.println("============================================================================");
        System.out.println("Welcome to the world of recipes, please select one of the following options:");
        System.out.println("============================================================================");

        //print all the available option
        printUserOptions();

        //read the option the user selects
        cl = sc.nextLine();

        if(cl.equals("chocoloco"))
        {
            System.out.println(r1.getDescription());
            System.out.println(" ");
            System.out.println("Ingredients:");
            double sum = 0;
            for (int i = 0; i < list_chcake.length; i++)
            {
                sum = sum + list_chcake[i].getKcal();
                System.out.println(list_chcake[i].getIngredients() + " -- Kcal: " + list_chcake[i].getKcal() + " -- Amount: " + list_chcake[i].getAmount());
            }
            System.out.println("Sum of Kcal: " + sum);
        }

        if(cl.equals("carrotcake"))
        {
            System.out.println(r2.getDescription());
            System.out.println(" ");
            System.out.println("Ingredients:");
            double sum = 0;
            for (int i = 0; i < list_cacake.length; i++)
            {
                sum = sum + list_cacake[i].getKcal();
                System.out.println(list_cacake[i].getIngredients() + " -- Kcal: " + list_cacake[i].getKcal() + " -- Amount: " + list_cacake[i].getAmount());
            }
            System.out.println("Sum of Kcal: " + sum);
        }

        if(cl.equals("popeyespinach"))
        {
            System.out.println(r3.getDescription());
            System.out.println(" ");
            System.out.println("Ingredients:");
            double sum = 0;
            for (int i = 0; i < list_spcake.length; i++)
            {
                sum = sum + list_spcake[i].getKcal();
                System.out.println(list_spcake[i].getIngredients() + " -- Kcal: " + list_spcake[i].getKcal() + " -- Amount: " + list_spcake[i].getAmount());
            }
            System.out.println("Sum of Kcal: " + sum);
        }

        if(cl.equals("cheesycake"))
        {
            System.out.println(r4.getDescription());
            System.out.println(" ");
            System.out.println("Ingredients:");
            double sum = 0;
            for (int i = 0; i < list_checake.length; i++)
            {
                sum = sum + list_checake[i].getKcal();
                System.out.println(list_checake[i].getIngredients() + " -- Kcal: " + list_checake[i].getKcal() + " -- Amount: " + list_checake[i].getAmount());
            }
            System.out.println("Sum of Kcal: " + sum);
        }

        if(cl.equals("calculator"))
        {
            System.out.println(r4.getDescription());
            System.out.println(" ");
            System.out.println("Ingredients:");
            double sum = 0;
            int value = -1;
            int answer = -1;
            double gr;
            while (value != 0)
            {
                for (int i = 0; i < cfs.length; i++)
                {
                    System.out.println("Food " + i + " " + cfs[i].getName());
                }
                System.out.println("Please select a food ?");
                answer = sc.nextInt();
                System.out.println("How much gr did you take ?");
                gr = sc.nextInt();
                sum = sum + cfs[answer].printKcal(gr);
                System.out.println("1 for Continue or 0 for Exit");
                value = sc.nextInt();
            }
            System.out.println("Sum of Kcal: " + sum);
        }


        if(cl.equals("end"))
        {
            System.out.println("Thank you for visiting our world of recipes!");
        }
        else {

            System.out.println(" ");
            System.out.println("Not sure? Want to go back to the menu?");
            cl = sc.nextLine();

            if(cl.equals("no"))
            {
                System.out.println("Bye, come back soon!");
            }

            if(cl.equals("No"))
            {
                System.out.println("Bye, come back soon!");
            }
            else {
                printUserOptions();
                cl = sc.nextLine();
            }
        }



    }


    public static void printUserOptions()
    {

        System.out.println("* 'chocoloco' if you want to bake a luxurious and delicious chocolate cake.");

        System.out.println("* 'carrotcake' if you want to bake a healthy carrot cake.");

        System.out.println("* 'popeyespinach' to bake a cake that will make the earth shake.");

        System.out.println("* 'cheesycake' to bake a cake full of cheese but not cheesy.");

        System.out.println("* 'calculator' Calories Calculator");

        System.out.println("* 'end' if you want to finish.");

    }
}
