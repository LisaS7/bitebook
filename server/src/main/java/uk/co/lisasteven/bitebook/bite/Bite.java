package uk.co.lisasteven.bitebook.bite;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecord;

import java.time.LocalDate;

@NoArgsConstructor @AllArgsConstructor @ToString @Getter @Setter
@Entity
@Table(name="bites")
public class Bite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userId;

    @NotNull
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "food_record_id")
    @JsonIgnoreProperties({"bites"})
    private FoodRecord foodRecord;

    @Min(1)
    @Max(5)
    private Integer rating;

    private String notes;

    public Bite(String user, LocalDate date, FoodRecord foodRecord, Integer rating, String notes) {
        this.userId = user;
        this.date = date;
        this.foodRecord = foodRecord;
        this.rating = rating;
        this.notes = notes;
    }

}
