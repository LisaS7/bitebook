package uk.co.lisasteven.bitebook.food;

import lombok.*;

//https://stackoverflow.com/questions/67825729/using-enums-in-a-spring-entity

@NoArgsConstructor @AllArgsConstructor @ToString @Getter @Setter
public class Food {
    private Long id;
    private String name;
    private String category;
    private String colour;
    private String flavour;
    private String texture;
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
