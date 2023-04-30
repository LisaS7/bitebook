package uk.co.lisasteven.bitebook.food;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class FoodService {

    @Autowired
    FoodRepository foodRepository;

    public List<Food> getFoods(String uid) {
//        List<Food> allFoods = foodRepository.findAll();
//        ArrayList<Food> userFoods = new ArrayList<>();
//        for (Food food : allFoods) {
//            if (Objects.equals(food.getUserId(), uid)) {
//                userFoods.add(food);
//            }
//        }
        return foodRepository.findByUserId(uid);
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
    public Food updateFood(Long id, Food food) {
        Food existingFood = foodRepository.findById(id)
                .orElseThrow(()-> new IllegalStateException(
                        "Food with ID " + id + " does not exist"
                ));

        existingFood.setName(food.getName());
        existingFood.setDetail(food.getDetail());
        existingFood.setGrouping(food.getGrouping());
        existingFood.setColour(food.getColour());
        existingFood.setFlavour(food.getFlavour());
        existingFood.setTexture(food.getTexture());
        existingFood.setIcon(food.getIcon());

        foodRepository.save(existingFood);
        return existingFood;

    }

    public List<Food> seedNewUser(String uid) {
        Seed seed = new Seed(uid);
        List<Food> foods = seed.getFoods();
        return foodRepository.saveAll(foods);

    }
}
