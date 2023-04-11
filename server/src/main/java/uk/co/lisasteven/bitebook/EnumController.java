package uk.co.lisasteven.bitebook;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.lisasteven.bitebook.bite.Group;
import uk.co.lisasteven.bitebook.food.Category;

@RestController
@RequestMapping(path="api")
public class EnumController {

    @GetMapping(path = "categories")
    public Category[] getCategories(){
        return Category.values();
    }

    @GetMapping(path = "groups")
    public Group[] getGroups(){ return Group.values(); }
}
