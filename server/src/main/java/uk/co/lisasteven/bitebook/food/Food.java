package uk.co.lisasteven.bitebook.food;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import uk.co.lisasteven.bitebook.food.enums.Group;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecord;

import java.util.List;

@NoArgsConstructor @AllArgsConstructor @ToString @Getter @Setter
@Entity
@Table(name="foods")
public class Food {

    @Id
    @SequenceGenerator(name="food_sequence", sequenceName = "food_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "food_sequence")
    private Long id;

    private String userId;

    @NotBlank(message = "Name is required")
    private String name;

    private String detail;

    @Enumerated(EnumType.STRING)
    private Group grouping;
    private String colour;
    private String flavour;
    private String texture;

    @Size(max=4)
    private String icon;

    @JsonIgnoreProperties({"food"})
    @OneToMany(mappedBy = "food")
    @ToString.Exclude
    private List<FoodRecord> foodRecords;



    public Food(String user, String name, String detail, Group grouping, String colour, String flavour, String texture, String icon) {
        this.userId = user;
        this.name = name;
        this.detail = detail;
        this.grouping = grouping;
        this.colour = colour;
        this.flavour = flavour;
        this.texture = texture;
        this.icon = icon;
    }
}
