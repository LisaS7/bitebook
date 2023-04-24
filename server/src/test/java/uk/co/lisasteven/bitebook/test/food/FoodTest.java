package uk.co.lisasteven.bitebook.test.food;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import uk.co.lisasteven.bitebook.bite.Bite;
import uk.co.lisasteven.bitebook.food.enums.Category;
import uk.co.lisasteven.bitebook.food.Food;
import uk.co.lisasteven.bitebook.food.enums.Group;

import java.time.LocalDate;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class FoodTest {

    private Food food;
    private Set<Bite> bites;


    @BeforeEach
    public void setup() {
        food = new Food(
                1L, "ABC", "banana", Group.FRUIT.getFormattedName(), Category.YES.getFormattedName(), "yellow", "sweet", "soft", "\uD83C\uDF4C", "Must be mashed"
        );

        Bite bite1 = new Bite(
                "ABC", LocalDate.of(2020, 07, 15), food, 4, "This is the second bite."
        );

        Bite bite2 = new Bite(
               "ABC", LocalDate.of(2020, 07, 10), food, 3, "This is the first bite."
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
    public void hasCategory(){
        assertEquals(Group.FRUIT, food.getCategory());
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

    @Test
    public void hasNotes(){
        assertEquals("Must be mashed", food.getNotes());
    }

}
