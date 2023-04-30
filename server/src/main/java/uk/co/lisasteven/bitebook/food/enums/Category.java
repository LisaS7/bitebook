package uk.co.lisasteven.bitebook.food.enums;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public enum Category {
    @JsonProperty("None") NONE,
    @JsonProperty("Yes") YES,
    @JsonProperty("No") NO,
    @JsonProperty("Maybe") MAYBE,
    @JsonProperty("Rarely") RARELY,
    @JsonProperty("Untested") UNTESTED,
    @JsonProperty("Allergy") ALLERGY;


    }
