package uk.co.lisasteven.bitebook.food;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor @ToString
public class Food {
    private Long id;
    private String name;
    private String category;
    private String colour;
    private String flavour;
    private String texture;
    private String notes;

    public Food(String name, String category, String colour, String flavour, String texture, String notes) {
        this.name = name;
        this.category = category;
        this.colour = colour;
        this.flavour = flavour;
        this.texture = texture;
        this.notes = notes;
    }

}
