package uk.co.lisasteven.bitebook.food;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.lisasteven.bitebook.food.seed.Seed;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public List<Food> getFoods(String uid) {
        List<Food> allFoods = foodRepository.findAll();
        ArrayList<Food> userFoods = new ArrayList<>();
        for (Food food : allFoods) {
            if (Objects.equals(food.getUserId(), uid)) {
                userFoods.add(food);
            }
        }
        return userFoods;
    }

    public Food addNewFood(Food food) {
        return foodRepository.save(food);
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

    public List<Food> seedNewUser(String uid) {
        Seed seed = new Seed(uid);
        List<Food> foods = seed.getFoods();
        return foodRepository.saveAll(foods);

    }
}
