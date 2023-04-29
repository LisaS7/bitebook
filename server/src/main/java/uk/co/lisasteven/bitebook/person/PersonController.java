package uk.co.lisasteven.bitebook.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/people")
public class PersonController {

    @Autowired
    PersonService personService;

    @GetMapping(path="{accountId}")
    public List<Person> getPeopleForAccount(@PathVariable("accountId") String uid) {
        return personService.getPeopleForAccount(uid);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Person addPerson(@RequestBody Person person) {
        return personService.addNewPerson(person);
    }

    @DeleteMapping(path="{personId}")
    public void deletePerson(@PathVariable("personId") Long id) {
        personService.deletePerson(id);
    }

    @PutMapping(path="{personId}")
    public Person updatePerson(
            @PathVariable("personId") Long id,
            @RequestBody Person person
    ) {
        return personService.updatePerson(id, person);
    }

}
