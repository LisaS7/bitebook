package uk.co.lisasteven.bitebook.foodrecord;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/foodlists")
public class FoodRecordController {

    private final FoodRecordService foodRecordService;

    @Autowired
    public FoodRecordController(FoodRecordService foodRecordService) {
        this.foodRecordService = foodRecordService;
    }

    @GetMapping
    public List<FoodRecord> getFoodLists(@RequestParam String uid) {
        return foodRecordService.getFoodlistsByUserId(uid);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FoodRecord addFoodList(@RequestBody FoodRecord foodRecord) {
        return foodRecordService.addNewFoodList(foodRecord);

    }

    @DeleteMapping(path="{id}")
    public void deleteFoodList(@PathVariable("id") Long id) {
        foodRecordService.deleteFoodList(id);
    }

    @PutMapping(path="{id}")
    public FoodRecord updateFoodList(@PathVariable("id") Long id, @RequestBody FoodRecord foodRecord) {
        return foodRecordService.updateFoodList(id, foodRecord);
    }
}
