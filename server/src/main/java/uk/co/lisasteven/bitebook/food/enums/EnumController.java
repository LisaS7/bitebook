package uk.co.lisasteven.bitebook.food.enums;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api")
public class EnumController {

    @GetMapping(path = "categories")
    public Category[] getCategories(){
        return Category.values();
    }

    @GetMapping(path = "groups")
    public Group[] getGroups(){
        return Group.values(); }
}
