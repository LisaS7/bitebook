package uk.co.lisasteven.bitebook.bite;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class BiteService {

    @Autowired
    BiteRepository biteRepository;

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
