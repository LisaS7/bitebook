package uk.co.lisasteven.bitebook.bite;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import uk.co.lisasteven.bitebook.food.FoodService;
import uk.co.lisasteven.bitebook.food.enums.Category;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecord;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecordService;
import uk.co.lisasteven.bitebook.person.PersonService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/bites")
public class BiteController {

    @Autowired
    BiteService biteService;

    @Autowired
    FoodRecordService foodRecordService;

    @Autowired
    FoodService foodService;

    @Autowired
    PersonService personService;

    @GetMapping
    public List<Bite> getBites(@RequestParam String uid) {
        return biteService.getBites(uid);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Bite addBite(@Valid @RequestBody Bite bite) {
        Long foodId = bite.getFoodRecord().getFood().getId();
        Long personId = bite.getFoodRecord().getPerson().getId();
        Optional<FoodRecord> foodRecord = foodRecordService.getRecordByFoodIdAndPersonId(foodId, personId);

       foodRecord.ifPresentOrElse((record) -> {
           bite.setFoodRecord(record);
           record.addBite(bite);
       }, () -> {
           FoodRecord newFoodRecord = new FoodRecord();
           foodService.getFoodById(foodId).ifPresent(newFoodRecord::setFood);
           personService.getPersonById(personId).ifPresent(newFoodRecord::setPerson);
           newFoodRecord.setCategory(Category.NONE);
           newFoodRecord.setUserId(bite.getUserId());
           FoodRecord newRecord = foodRecordService.addNewFoodList(newFoodRecord);
           bite.setFoodRecord(newRecord);
           newRecord.addBite(bite);
       });
        return biteService.addNewBite(bite);}

    @DeleteMapping(path="{biteId}")
    public void deleteBite(@PathVariable("biteId") Long id) {
       biteService.getBiteById(id).ifPresent(obj -> {
           obj.getFoodRecord().removeBite(obj);
           biteService.deleteBite(id);
       });
    }

    @PutMapping(path="{biteId}")
    public Bite updateBite(
            @PathVariable("biteId") Long id,
            @Valid @RequestBody Bite bite
    ) {
        return biteService.updateBite(id, bite);
    }


}
