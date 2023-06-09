package uk.co.lisasteven.bitebook.bite;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/bites")
public class BiteController {


    private final BiteService biteService;

    @Autowired
    public BiteController(BiteService biteService) {
        this.biteService = biteService;
    }

    
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

    // TBC - needs to add function to update Food Record if food or person is changed
//    @PutMapping(path="{biteId}")
//    public Bite updateBite(
//            @PathVariable("biteId") Long id,
//            @Valid @RequestBody Bite bite
//    ) {
//        return biteService.updateBite(id, bite);
//    }


}
