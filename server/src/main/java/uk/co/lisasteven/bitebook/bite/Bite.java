package uk.co.lisasteven.bitebook.bite;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import uk.co.lisasteven.bitebook.food.Food;

import java.time.LocalDate;

@NoArgsConstructor @AllArgsConstructor @ToString @Getter @Setter
@Entity
@Table(name="bites")
public class Bite {

    @Id
    @SequenceGenerator(name="bite_sequence", sequenceName = "bite_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bite_sequence")
    private Long id;

    private String userId;

    @NotNull
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name="food_id", nullable = false)
    @JsonIgnoreProperties({"bites"})
    @NotNull(message = "Food is required")
    private Food food;

    @Min(1)
    @Max(5)
    private Integer rating;

    private String notes;

    public Bite(String user, LocalDate date, Food food, Integer rating, String notes) {
        this.userId = user;
        this.date = date;
        this.food = food;
        this.rating = rating;
        this.notes = notes;
    }

}
