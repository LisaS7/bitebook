package uk.co.lisasteven.bitebook.bite;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BiteRepository extends JpaRepository<Bite, Long> {
    List<Bite> findByPersonId(Long id);
}
