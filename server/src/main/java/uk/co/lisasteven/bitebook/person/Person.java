package uk.co.lisasteven.bitebook.person;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import uk.co.lisasteven.bitebook.bite.Bite;

import java.util.List;

@Getter @Setter @NoArgsConstructor @ToString
@Entity
@Table(name="people")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String accountUid;

    @OneToMany
    @JsonIgnoreProperties({"person"})
    @ToString.Exclude
    private List<Bite> bites;

    public Person(String name, String accountUid) {
        this.name = name;
        this.accountUid = accountUid;
    }
}