//package uk.co.lisasteven.bitebook.bite;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import uk.co.lisasteven.bitebook.food.Food;
//import uk.co.lisasteven.bitebook.food.enums.Category;
//import uk.co.lisasteven.bitebook.food.enums.Group;
//
//import java.time.LocalDate;
//
//@Configuration
//public class BiteConfig {
//
//    @Bean
//    CommandLineRunner commandLineRunner_Bite(BiteRepository repository) {
//        Food food = new Food(
//                1L, "MxwgBL1xPvUKwzQUrb3rJl7mvRC3", "banana", Category.FRUIT.getFormattedName(), Group.YES.getFormattedName(), "yellow", "sweet", "soft", "\uD83C\uDF4C", "Must be mashed"
//        );
//        return args -> {
//            Bite bite1 = new Bite("MxwgBL1xPvUKwzQUrb3rJl7mvRC3", LocalDate.of(2023, 01, 15), food, 3, "This is a new bite");
//        };
//    }
//
//}
