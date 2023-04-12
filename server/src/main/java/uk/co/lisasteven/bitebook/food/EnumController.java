package uk.co.lisasteven.bitebook.food;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.lisasteven.bitebook.food.Group;
import uk.co.lisasteven.bitebook.food.Category;

@RestController
@RequestMapping(path="api")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowedHeaders = "*")
public class EnumController {

    @GetMapping(path = "categories")
    public Category[] getCategories(){
        return Category.values();
    }

    @GetMapping(path = "groups")
    public Group[] getGroups(){ return Group.values(); }
}
