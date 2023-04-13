package uk.co.lisasteven.bitebook.test.bite;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import uk.co.lisasteven.bitebook.bite.Bite;
import uk.co.lisasteven.bitebook.food.enums.Group;
import uk.co.lisasteven.bitebook.food.enums.Category;
import uk.co.lisasteven.bitebook.food.Food;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BiteTest {

    private Bite bite;
    private Food banana;

    @BeforeEach
    public void setup() {
        banana = new Food(
                "ABC", "banana", Category.FRUIT, Group.YES, "yellow", "sweet", "soft", "\uD83C\uDF4C", "Must be mashed"
        );

        bite = new Bite(
                LocalDate.of(2020, 07, 15), banana, 4, "This is a note."
        );
    }

    @Test
    public void hasDate(){ assertEquals(LocalDate.of(2020, 07, 15), bite.getDate());}

    @Test
    public void hasFood(){ assertEquals(banana, bite.getFood()); }

    @Test
    public void hasRating(){ assertEquals(4, bite.getRating()); }

    @Test
    public void hasNote(){ assertEquals("This is a note.", bite.getNotes()); }
}
