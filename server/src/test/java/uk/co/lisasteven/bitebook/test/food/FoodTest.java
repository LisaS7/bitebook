package uk.co.lisasteven.bitebook.test.food;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import uk.co.lisasteven.bitebook.bite.Bite;
import uk.co.lisasteven.bitebook.food.Food;
import uk.co.lisasteven.bitebook.food.enums.Group;
import uk.co.lisasteven.bitebook.person.Person;
import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class FoodTest {

    private Food food;
    private Person person;

    @BeforeEach
    public void setup() {
        food = new Food(
                "ABC", "banana", "", Group.FRUIT, "yellow", "sweet", "soft", "\uD83C\uDF4C"
        );

        person = new Person("Bob", "#000000", "ABC");

        Bite bite1 = new Bite(
                "ABC", person, LocalDate.of(2020, 07, 15), food, 4, "This is the second bite."
        );

        Bite bite2 = new Bite(
               "ABC", person, LocalDate.of(2020, 07, 10), food, 3, "This is the first bite."
        );

    }

    @Test
    public void hasName(){
        assertEquals("banana", food.getName());
    }

    @Test
    public void hasId(){
        assertEquals(1L, food.getId());
    }

    @Test
    public void hasColour(){
        assertEquals("yellow", food.getColour());
    }

    @Test
    public void hasFlavour(){
        assertEquals("sweet", food.getFlavour());
    }

    @Test
    public void hasTexture(){
        assertEquals("soft", food.getTexture());
    }

    @Test
    public void hasIcon(){
        assertEquals("\uD83C\uDF4C", food.getIcon());
    }

}
