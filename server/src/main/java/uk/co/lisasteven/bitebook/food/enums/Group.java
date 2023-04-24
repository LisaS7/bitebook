package uk.co.lisasteven.bitebook.food.enums;

import java.util.ArrayList;

public enum Group {
    FRUIT("Fruit"),
    VEGETABLE("Vegetable"),
    CARBOHYDRATE("Carbohydrate"),
    PROTEIN("Protein"),
    FAT("Fat"),
    CONDIMENT("Condiment");

    private final String formattedName;

    Group(String formattedName) {
        this.formattedName = formattedName;
    }

    public String getFormattedName() {
        return formattedName;
    }

    public static ArrayList<String> getAllFormattedNames() {
        ArrayList<String> formattedNames = new ArrayList<>();
        for (Group group : Group.values()) {
            formattedNames.add(group.getFormattedName());
        }
        return formattedNames;
    }
}
