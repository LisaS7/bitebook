package uk.co.lisasteven.bitebook.food;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

//https://stackoverflow.com/questions/67825729/using-enums-in-a-spring-entity

@NoArgsConstructor @AllArgsConstructor @ToString @Getter @Setter
@Entity
@Table
public class Food {
    @Id
    @SequenceGenerator(name="food_sequence", sequenceName = "food_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "food_sequence")
    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    private String category;
    private String colour;
    private String flavour;
    private String texture;

    @Size(max=4)
    private String icon;

    private String notes;

    public Food(String name, String category, String colour, String flavour, String texture, String icon, String notes) {
        this.name = name;
        this.category = category;
        this.colour = colour;
        this.flavour = flavour;
        this.texture = texture;
        this.icon = icon;
        this.notes = notes;
    }

}
