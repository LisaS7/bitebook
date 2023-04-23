export const testUserUid = "UMFv48MMnlhjZODF64847U9nxzO2";
const today = new Date();
export const formattedDate = today.toISOString().split("T")[0];

export const userRegistrationDetails = {
  name: "tester",
  email: "test123@test.com",
  pw: "test123",
};

export const userLoginDetails = {
  name: "tester",
  email: "test@test.com",
  pw: "test123",
};

export const testFood = {
  icon: "❗",
  name: "TestName",
  category: "Protein",
  grouping: "Maybe",
  colour: "TestColour",
  flavour: "TestFlavour",
  texture: "TestTexture",
  notes: "TestNote",
};

export const testBite = {
  date: formattedDate,
  food: "Banana",
  rating: 5,
  notes: "TestBite",
};
