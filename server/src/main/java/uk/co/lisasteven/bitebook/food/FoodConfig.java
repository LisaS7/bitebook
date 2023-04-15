package uk.co.lisasteven.bitebook.food;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uk.co.lisasteven.bitebook.bite.Bite;
import uk.co.lisasteven.bitebook.bite.BiteRepository;
import uk.co.lisasteven.bitebook.food.enums.Category;
import uk.co.lisasteven.bitebook.food.enums.Group;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class FoodConfig {

    @Bean
    CommandLineRunner commandLineRunner_Food(FoodRepository foodRepository, BiteRepository biteRepository) {
        return args -> {
            Food banana = new Food(
                    "MxwgBL1xPvUKwzQUrb3rJl7mvRC3", "banana", Category.FRUIT.getFormattedName(), Group.YES.getFormattedName(), "yellow", "sweet", "soft", "\uD83C\uDF4C", "Must be mashed"
            );

            Food noodles = new Food(
                    "MxwgBL1xPvUKwzQUrb3rJl7mvRC3", "noodles", Category.CARBOHYDRATE.getFormattedName(), Group.MAYBE.getFormattedName(), "beige", "bland", "soft", "\uD83C\uDF5C", "Loves with sweet chilli sauce"
            );

            Food courgette = new Food(
                    "cPxLfFa9modTTYrjt85XwIzViUr1", "courgette", Category.VEGETABLE.getFormattedName(), Group.NO.getFormattedName(), "green", "bland", "firm", "", ""
            );

            Bite bite1 = new Bite("MxwgBL1xPvUKwzQUrb3rJl7mvRC3", LocalDate.of(2023, 01, 15), banana, 3, "This is a new bite");

            foodRepository.saveAll(List.of(banana, noodles, courgette));
            biteRepository.save(bite1);
        };
    }

}
