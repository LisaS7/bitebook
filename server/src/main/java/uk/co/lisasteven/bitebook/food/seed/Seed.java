package uk.co.lisasteven.bitebook.food.seed;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import uk.co.lisasteven.bitebook.food.Food;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class Seed {
    List<Food> foods;

    public Seed(String uid) {
        foods = parseSeedData();
        foods.forEach(food -> food.setUserId(uid));
        System.out.println("SEED FOODS:  " + foods);
    }

    public List<Food> getFoods() {
        return foods;
    }

    public List<Food> parseSeedData() {
        ObjectMapper mapper = new ObjectMapper()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

        URL path = getClass().getClassLoader().getResource("static/data.json");

        JsonNode node = null;
        try {
            node = mapper.readTree(new File(Objects.requireNonNull(path).getFile()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        try {
            return Arrays.asList(mapper.treeToValue(node, Food[].class));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}

