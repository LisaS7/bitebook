package uk.co.lisasteven.bitebook.food.enums;

import java.util.ArrayList;

public enum Category {
    NONE("None"),
    YES("Yes"),
    NO("No"),
    MAYBE("Maybe"),
    RARELY("Rarely"),
    UNTESTED("Untested"),
    ALLERGY("Allergy");

    private final String formattedName;

    Category(String formattedName) {this.formattedName = formattedName;}

    public String getFormattedName() {
        return formattedName;
    }

    public static ArrayList<String> getAllFormattedNames() {
        ArrayList<String> formattedNames = new ArrayList<>();
        for (Category category : Category.values()) {
            formattedNames.add(category.getFormattedName());
        }
        return formattedNames;
    }

    }
