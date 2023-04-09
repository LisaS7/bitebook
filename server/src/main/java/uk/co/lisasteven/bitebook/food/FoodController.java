package uk.co.lisasteven.bitebook.food;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/food")
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping
    public List<Food> getFoods() {
        return foodService.getFoods();
    }

    @PostMapping
    public void addFood(@Valid @RequestBody Food food) {
        foodService.addNewFood(food);
    }

    @DeleteMapping(path="{foodId}")
    public void deleteFood(@PathVariable("foodId") Long id) {
        foodService.deleteFood(id);
    }

    @PutMapping(path="{foodId}")
    public void updateFood(
            @PathVariable("foodId") Long id,
            @Valid @RequestBody Food food
    ) {
        foodService.updateFood(id, food);
    }
}
