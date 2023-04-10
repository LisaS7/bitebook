package uk.co.lisasteven.bitebook.food;

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
}
