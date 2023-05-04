package uk.co.lisasteven.bitebook.person;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecord;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "people")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String colour;
    private String userId;

    @OneToMany(cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties({"person"})
    @ToString.Exclude
    private List<FoodRecord> foodRecords;

    public Person(String name, String colour, String uid) {
        this.name = name;
        this.colour = colour;
        this.userId = uid;
    }
}
