package uk.co.lisasteven.bitebook.bite;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BiteRepository extends JpaRepository<Bite, Long> {
}
