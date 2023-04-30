package uk.co.lisasteven.bitebook.test.bite;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import uk.co.lisasteven.bitebook.bite.Bite;
import uk.co.lisasteven.bitebook.food.enums.Category;
import uk.co.lisasteven.bitebook.food.Food;
import uk.co.lisasteven.bitebook.food.enums.Group;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecord;
import uk.co.lisasteven.bitebook.person.Person;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BiteTest {

    private Bite bite;

    @BeforeEach
    public void setup() {
        Person person = new Person("Bob", "#000000", "ABC");

        Food banana = new Food(
                "ABC", "banana", "", Group.FRUIT, "yellow", "sweet", "soft", "\uD83C\uDF4C"
        );

        FoodRecord foodRecord = new FoodRecord(banana, person, Category.NO, "this is a note", "ABC");

        bite = new Bite(
                "ABC", LocalDate.of(2020, 07, 15), foodRecord, 4, "This is a note."
        );
    }


    @Test
    public void hasDate(){ assertEquals(LocalDate.of(2020, 07, 15), bite.getDate());}

    @Test
    public void hasRating(){ assertEquals(4, bite.getRating()); }

    @Test
    public void hasNote(){ assertEquals("This is a note.", bite.getNotes()); }
}
