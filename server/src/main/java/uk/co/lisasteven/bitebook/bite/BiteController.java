package uk.co.lisasteven.bitebook.bite;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/bites")
public class BiteController {

    @Autowired
    BiteService biteService;


    @GetMapping
    public List<Bite> getBites(@RequestParam String uid) {
        return biteService.getBites(uid);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Bite addBite(@Valid @RequestBody Bite bite) {
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
