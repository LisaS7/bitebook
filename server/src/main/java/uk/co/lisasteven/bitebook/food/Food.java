package uk.co.lisasteven.bitebook.food;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

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

    private String grouping;
    private String category;

    private String colour;
    private String flavour;
    private String texture;

    @Size(max=4)
    private String icon;

    private String notes;

    public Food(String user, String name, String grouping, String category, String colour, String flavour, String texture, String icon, String notes) {
        this.userId = user;
        this.name = name;
        this.grouping = grouping;
        this.category = category;
        this.colour = colour;
        this.flavour = flavour;
        this.texture = texture;
        this.icon = icon;
        this.notes = notes;
    }

}
