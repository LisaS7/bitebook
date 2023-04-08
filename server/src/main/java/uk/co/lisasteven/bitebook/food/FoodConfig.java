package uk.co.lisasteven.bitebook.food;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class FoodConfig {

    @Bean
    CommandLineRunner commandLineRunner(FoodRepository repository) {
        return args -> {
            Food banana = new Food(
                    "banana", "fruit", "yellow", "sweet", "soft", "\uD83C\uDF4C", "Must be mashed"
            );

            Food noodles = new Food(
                    "noodles", "carb", "beige", "bland", "soft", "\uD83C\uDF5C", "Loves with sweet chilli sauce"
            );

            repository.saveAll(List.of(banana, noodles));
        };
    }
}
