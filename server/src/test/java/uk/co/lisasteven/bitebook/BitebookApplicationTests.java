package uk.co.lisasteven.bitebook;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import uk.co.lisasteven.bitebook.food.Food;
import uk.co.lisasteven.bitebook.food.FoodController;
import uk.co.lisasteven.bitebook.food.FoodRepository;
import uk.co.lisasteven.bitebook.food.FoodService;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FoodController.class)
public class BitebookApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private FoodService service;


	@Test
	public void getFoods() throws Exception {
		String url = "/api/food";

		Food food1 = new Food(
				"banana", "fruit", "yellow", "sweet", "soft", "\uD83C\uDF4C", "Must be mashed"
		);
		Food food2 = new Food(
				"noodles", "carb", "beige", "bland", "soft", "\uD83C\uDF5C", "Loves with sweet chilli sauce"
		);

		when(service.getFoods()).thenReturn(List.of(food1, food2));

		this.mockMvc
				.perform(get(url))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(2)))
				.andExpect(jsonPath("$[0].name").value("banana"));
	}

	@Test
	public void deleteFood() throws Exception {
		String url = "/api/food/2";

		this.mockMvc
				.perform(delete(url))
				.andExpect(status().isOk());
	}

	@Test
	public void createFood() throws Exception {
		String url = "/api/food";
		Food food3 = new Food(
				"tuna", "protein", "pink", "meaty", "flaky", "", "Mix thoroughly with mayo"
		);

		String foodAsJson = new ObjectMapper().writeValueAsString(food3);

		this.mockMvc
				.perform(post(url).content(foodAsJson).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	@Test
	public void updateFood() throws Exception {
		String url = "/api/food/2";
		Food food2 = new Food(
				"noodles", "carb", "yellow", "bland", "soft", "\uD83C\uDF5C", "Updated!"
		);

		String foodAsJson = new ObjectMapper().writeValueAsString(food2);

		this.mockMvc
				.perform(put(url).content(foodAsJson).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

}
