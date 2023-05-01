package uk.co.lisasteven.bitebook.foodrecord;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodRecordService {

    @Autowired
    FoodRecordRepository foodRecordRepository;

    public List<FoodRecord> getFoodlistsByUserId(String uid) {
        return foodRecordRepository.findByUserId(uid);
    }

    public Optional<FoodRecord> getRecordByFoodIdAndPersonId(Long foodId, Long personId) {
        return foodRecordRepository.findFirstByFoodIdAndPersonId(foodId, personId);
    }

    public FoodRecord addNewFoodList(FoodRecord foodRecord) {
        Long newID = foodRecordRepository.save(foodRecord).getId();
        return foodRecordRepository.findById(newID).orElseThrow(() -> new IllegalStateException("Food list entry with ID " + newID + " does not exist."));
    }

    public void deleteFoodList(Long id) {
        boolean exists = foodRecordRepository.existsById(id);
        if (exists) {
            foodRecordRepository.deleteById(id);
        } else {
            throw new IllegalStateException("Food list entry with ID " + id + " does not exist");
        }
    }

    public FoodRecord updateFoodList(Long id, FoodRecord foodRecord) {
        FoodRecord existingFoodRecord = foodRecordRepository.findById(id).orElseThrow(() -> new IllegalStateException("Food list entry with ID " + id + " does not exist."));
        existingFoodRecord.setFood(foodRecord.getFood());
        existingFoodRecord.setPerson(foodRecord.getPerson());
        existingFoodRecord.setCategory(foodRecord.getCategory());
        existingFoodRecord.setNotes(foodRecord.getNotes());
        foodRecordRepository.save(existingFoodRecord);
        return existingFoodRecord;
    }
}
