package uk.co.lisasteven.bitebook.food.enums;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Group {
    @JsonProperty("Fruit") FRUIT,
    @JsonProperty("Vegetable") VEGETABLE,
    @JsonProperty("Carbohydrate") CARBOHYDRATE,
    @JsonProperty("Protein") PROTEIN,
    @JsonProperty("Fat") FAT,
    @JsonProperty("Condiment") CONDIMENT,
    @JsonProperty("Other") OTHER;

}
