package uk.co.lisasteven.bitebook.food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public List<Food> getFoods() {
        return foodRepository.findAll();
    }

    public void addNewFood(Food food) {
        foodRepository.save(food);
    }

    public void deleteFood(Long id) {
        boolean exists = foodRepository.existsById(id);
        if (exists) {
            foodRepository.deleteById(id);
        } else {
            throw new IllegalStateException("Food with ID " + id + " does not exist");
        }
    }
}

// new Food()
