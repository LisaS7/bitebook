package uk.co.lisasteven.bitebook.bite.service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@NoArgsConstructor @AllArgsConstructor @ToString
public class Bite {
    private Long id;
    private LocalDate date;
    private Long food_id;
    private String reaction;
    private Integer rating;
    private String book;
    private String notes;

    public Bite(LocalDate date, Long food_id, String reaction, Integer rating, String book, String notes) {
        this.date = date;
        this.food_id = food_id;
        this.reaction = reaction;
        this.rating = rating;
        this.book = book;
        this.notes = notes;
    }


}
