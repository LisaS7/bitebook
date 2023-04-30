package uk.co.lisasteven.bitebook.test.food;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import uk.co.lisasteven.bitebook.bite.Bite;
import uk.co.lisasteven.bitebook.food.Food;
import uk.co.lisasteven.bitebook.food.enums.Category;
import uk.co.lisasteven.bitebook.food.enums.Group;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecord;
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
