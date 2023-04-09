package uk.co.lisasteven.bitebook.food;

import jakarta.transaction.Transactional;
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

    @Transactional
    public void updateFood(Long id, Food food) {
        Food existingFood = foodRepository.findById(id)
                .orElseThrow(()-> new IllegalStateException(
                        "Food with ID " + id + " does not exist"
                ));

        existingFood.setName(food.getName());
        existingFood.setCategory(food.getCategory());
        existingFood.setColour(food.getColour());
        existingFood.setFlavour(food.getFlavour());
        existingFood.setTexture(food.getTexture());
        existingFood.setIcon(food.getIcon());
        existingFood.setNotes(food.getNotes());

        foodRepository.save(existingFood);

    }
}

// new Food()
