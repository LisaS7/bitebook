package uk.co.lisasteven.bitebook.bite;

import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor @AllArgsConstructor @ToString @Getter @Setter
public class Bite {
    private Long id;
    private LocalDate date;
    private Long food_id;
    private String reaction;
    private Integer rating;
    private String bitebook;
    private String notes;

    public Bite(LocalDate date, Long food_id, String reaction, Integer rating, String book, String notes) {
        this.date = date;
        this.food_id = food_id;
        this.reaction = reaction;
        this.rating = rating;
        this.bitebook = book;
        this.notes = notes;
    }


}
