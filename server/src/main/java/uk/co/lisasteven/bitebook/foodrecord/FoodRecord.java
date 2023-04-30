package uk.co.lisasteven.bitebook.foodrecord;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import uk.co.lisasteven.bitebook.food.Food;
import uk.co.lisasteven.bitebook.food.enums.Category;
import uk.co.lisasteven.bitebook.person.Person;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name="foodlist")
public class FoodRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "food_id")
    @JsonIgnoreProperties({"foodLists"})
    private Food food;

    @ManyToOne
    @JoinColumn(name = "person_id")
    @JsonIgnoreProperties({"foodLists"})
    private Person person;

    private Category category;

    private String notes;

    private String userId;

    public FoodRecord(Food food, Person person, Category category, String notes, String userId) {
        this.food = food;
        this.person = person;
        this.category = category;
        this.notes = notes;
        this.userId = userId;
    }
}
