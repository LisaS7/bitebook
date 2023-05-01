package uk.co.lisasteven.bitebook.person;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.lisasteven.bitebook.bite.BiteRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    BiteRepository biteRepository;

    public List<Person> getPeopleForAccount(String uid) {
        return personRepository.findByUserId(uid);
    }

    public Optional<Person> getPersonById(Long id) {
        return personRepository.findById(id);
    }

    public Person addNewPerson(Person person) {
        return personRepository.save(person);
    }

    public void deletePerson(Long id) {
        boolean exists = personRepository.existsById(id);
        if (exists) {
            personRepository.deleteById(id);
        } else {
            throw new IllegalStateException("Person with ID " + id + " does not exist");
        }
    }

    @Transactional
    public Person updatePerson(Long id, Person person) {
        Person existingPerson = personRepository.findById(id)
                .orElseThrow(()-> new IllegalStateException(
                        "Person with ID " + id + " does not exist"
                ));

        existingPerson.setName(person.getName());
        existingPerson.setColour(person.getColour());
        personRepository.save(existingPerson);
        return existingPerson;
    }
}
