package uk.co.lisasteven.bitebook.person;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.lisasteven.bitebook.bite.Bite;
import uk.co.lisasteven.bitebook.bite.BiteRepository;

import java.util.List;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    BiteRepository biteRepository;

    public List<Person> getPeopleForAccount(String uid) {
        return personRepository.findByUserId(uid);
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
        List<Bite> bites = biteRepository.findByPersonId(id);
        biteRepository.deleteAll(bites);
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
