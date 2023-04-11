package uk.co.lisasteven.bitebook.test.food;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import uk.co.lisasteven.bitebook.bite.Group;
import uk.co.lisasteven.bitebook.food.Category;
import uk.co.lisasteven.bitebook.food.Food;
import uk.co.lisasteven.bitebook.food.FoodController;
import uk.co.lisasteven.bitebook.food.FoodService;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FoodController.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class RouteTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private static FoodService service;

    private static Food food1;
    private static Food food2;
    private static final String url = "/api/foods";

    @BeforeAll
    public static void setup() {
        food1 = new Food(
                1L, "banana", Category.FRUIT, Group.YES, "yellow", "sweet", "soft", "\uD83C\uDF4C", "Must be mashed"
        );
        food2 = new Food(
                2L, "noodles", Category.CARBOHYDRATE, Group.MAYBE, "beige", "bland", "soft", "\uD83C\uDF5C", "Loves with sweet chilli sauce"
        );
        service.addNewFood(food1);
        service.addNewFood(food2);

    }

    @Test
    public void whenGetFoods_thenReturnFoods() throws Exception {

        when(service.getFoods()).thenReturn(List.of(food1, food2));

        this.mockMvc
                .perform(get(url))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name").value("banana"));
    }

    @Test
    public void whenDeleteFood_thenReturn200() throws Exception {
        String urlId = url + "/" + food2.getId();

        this.mockMvc
                .perform(delete(urlId))
                .andExpect(status().isOk());
    }

    @Test
    public void whenCreateFood_thenReturn201AndCreatedObject() throws Exception {
        Food food3 = new Food(
                3L, "tuna", Category.CARBOHYDRATE, Group.NO, "pink", "meaty", "flaky", "", "Mix thoroughly with mayo"
        );

        String foodAsJson = new ObjectMapper().writeValueAsString(food3);

        when(service.addNewFood(any(Food.class))).thenReturn(food3);

        this.mockMvc
                .perform(post(url).content(foodAsJson).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("tuna"))
                .andExpect(jsonPath("$.texture").value("flaky"));
    }

    @Test
    public void whenUpdateFood_thenReturn200AndUpdatedObject() throws Exception {
        String urlId = url + "/" + food2.getId();
        Food food2Updated = new Food(
                "noodles", Category.CARBOHYDRATE, Group.YES, "beige", "bland", "soft", "\uD83C\uDF5C", "Updated!"
        );

        String foodAsJson = new ObjectMapper().writeValueAsString(food2Updated);

        this.mockMvc
                .perform(put(urlId).content(foodAsJson).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

}