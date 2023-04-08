package uk.co.lisasteven.bitebook.food;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {

    public List<Food> getFoods() {
        return List.of(
                new Food(1L, "banana", "fruit", "yellow", "sweet", "soft", "\uD83C\uDF4C", "blah blah")
        );
    }
}
