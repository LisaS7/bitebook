package uk.co.lisasteven.bitebook.bite;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.lisasteven.bitebook.food.FoodRepository;
import uk.co.lisasteven.bitebook.food.enums.Category;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecord;
import uk.co.lisasteven.bitebook.foodrecord.FoodRecordRepository;
import uk.co.lisasteven.bitebook.person.PersonRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class BiteService {

    @Autowired
    BiteRepository biteRepository;

    @Autowired
    FoodRecordRepository foodRecordRepository;

    @Autowired
    PersonRepository personRepository;

    @Autowired
    FoodRepository foodRepository;

    public List<Bite> getBites(String uid) {
        List<Bite> allBites = biteRepository.findAll();
        ArrayList<Bite> userBites = new ArrayList<>();
        for (Bite bite : allBites) {
            if (Objects.equals(bite.getUserId(), uid)) {
                userBites.add(bite);
            }
        }
        return userBites;
    }

    public Optional<Bite> getBiteById(Long id) {
        return biteRepository.findById(id);
    }

    public Bite addNewBite(Bite bite) {

        Long foodId = bite.getFoodRecord().getFood().getId();
        Long personId = bite.getFoodRecord().getPerson().getId();
        Optional<FoodRecord> foodRecord = foodRecordRepository.findFirstByFoodIdAndPersonId(foodId, personId);

        foodRecord.ifPresentOrElse((record) -> {
            bite.setFoodRecord(record);
            record.addBite(bite);
        }, () -> {
            FoodRecord newFoodRecord = new FoodRecord();
            foodRepository.findById(foodId).ifPresent(newFoodRecord::setFood);
            personRepository.findById(personId).ifPresent(newFoodRecord::setPerson);
            newFoodRecord.setCategory(Category.NONE);
            newFoodRecord.setUserId(bite.getUserId());
            FoodRecord newRecord = foodRecordRepository.save(newFoodRecord);
            bite.setFoodRecord(newRecord);
            newRecord.addBite(bite);
        });

        return biteRepository.save(bite);
    }

    public void deleteBite(Long id) {
        boolean exists = biteRepository.existsById(id);
        if (exists) {
            biteRepository.deleteById(id);
        } else {
            throw new IllegalStateException("Bite with ID" + id + " does not exist.");
        }
    }

    @Transactional
    public Bite updateBite(Long id, Bite bite) {
        Bite existingBite = biteRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "Bite with ID " + id + " does not exist"
        ));

        existingBite.setDate(bite.getDate());
        existingBite.setFoodRecord(bite.getFoodRecord());
        existingBite.setRating(bite.getRating());
        existingBite.setNotes(bite.getNotes());

        biteRepository.save(existingBite);
        return existingBite;
    }
}
