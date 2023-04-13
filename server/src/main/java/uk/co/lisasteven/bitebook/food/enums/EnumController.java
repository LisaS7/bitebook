package uk.co.lisasteven.bitebook.food.enums;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping(path="api")
public class EnumController {

    @GetMapping(path = "categories")
    public ArrayList<String> getCategories(){
        return Category.getAllFormattedNames();
    }

    @GetMapping(path = "groups")
    public ArrayList<String> getGroups(){
        return Group.getAllFormattedNames(); }
}
