package uk.co.lisasteven.bitebook.foodrecord;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRecordRepository extends JpaRepository<FoodRecord, Long> {
    List<FoodRecord> findByUserId(String uid);

    Optional<FoodRecord> findFirstByFoodIdAndPersonId(Long foodId, Long personId);
}
