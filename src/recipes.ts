export interface Ingredient {
  item: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  servings: number;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number;
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  dietary: string[];
  image: string;
  fallbackGradient: string;
  ingredients: Ingredient[];
  instructions: string[];
  chefTip?: string;
}

export const RECIPES: Recipe[] = [
  {
    id: "mediterranean-chickpea-salad",
    title: "Mediterranean Chickpea Salad",
    description: "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    servings: 2,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    calories: 340,
    protein: "14g",
    carbs: "42g",
    fat: "15g",
    fiber: "11g",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "High-Protein"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    fallbackGradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
    ingredients: [
      { item: "Cooked chickpeas (rinsed and drained)", amount: 1, unit: "can (15 oz)" },
      { item: "English cucumber, crisp & diced", amount: 1, unit: "medium" },
      { item: "Ripe cherry tomatoes, halved", amount: 1, unit: "cup" },
      { item: "Kalamata olives, pitted & sliced", amount: 0.33, unit: "cup" },
      { item: "Red onion, finely diced", amount: 0.25, unit: "cup" },
      { item: "Fresh flat-leaf parsley, finely chopped", amount: 0.25, unit: "cup" },
      { item: "Extra virgin olive oil", amount: 2, unit: "tbsp" },
      { item: "Fresh lemon juice", amount: 1.5, unit: "tbsp" },
      { item: "Dried Mediterranean oregano", amount: 0.5, unit: "tsp" },
      { item: "Flaky sea salt & ground black pepper", amount: 1, unit: "pinch to taste" }
    ],
    instructions: [
      "Rinse and drain the canned chickpeas thoroughly in a fine-mesh colander, then pat lightly with a paper towel.",
      "Dice the cucumber into 1/2-inch cubes, slice the cherry tomatoes in half, and finely mince the red onion and fresh parsley.",
      "In a small mixing bowl, whisk together the extra virgin olive oil, freshly squeezed lemon juice, dried oregano, sea salt, and black pepper until emulsified.",
      "Combine chickpeas, cucumber, tomatoes, olives, and red onion in a large serving bowl.",
      "Drizzle the lemon-herb vinaigrette over the top, gently toss to combine, and garnish with fresh parsley. Let rest 5 minutes for flavors to marry."
    ],
    chefTip: "For an extra savory tang, sprinkle crumbled Greek feta or pumpkin seeds on top just before serving."
  },
  {
    id: "avocado-tomato-wholegrain-toast",
    title: "Avocado & Tomato Wholegrain Toast",
    description: "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
    servings: 1,
    prepTime: 5,
    cookTime: 5,
    totalTime: 10,
    calories: 290,
    protein: "9g",
    carbs: "31g",
    fat: "16g",
    fiber: "9g",
    dietary: ["Vegetarian", "Vegan", "High-Fiber"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    fallbackGradient: "linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)",
    ingredients: [
      { item: "Seeded thick wholegrain sourdough bread", amount: 2, unit: "slices" },
      { item: "Ripe Hass avocado", amount: 1, unit: "medium" },
      { item: "Ripe campari or vine tomatoes, sliced", amount: 2, unit: "medium" },
      { item: "Fresh lemon or lime juice", amount: 1, unit: "tsp" },
      { item: "Extra virgin olive oil drizzle", amount: 1, unit: "tsp" },
      { item: "Flaky sea salt & red chili flakes", amount: 0.5, unit: "tsp" },
      { item: "Fresh microgreens or basil leaves", amount: 2, unit: "tbsp" }
    ],
    instructions: [
      "Pop the wholegrain bread slices into a toaster or griddle until golden and crisp.",
      "Cut the avocado in half, remove the pit, and scoop the flesh into a shallow bowl.",
      "Add fresh lemon juice, a pinch of sea salt, and mash with a fork until chunky-smooth.",
      "Generously spread the avocado mash evenly over both slices of warm toast.",
      "Layer the sliced ripe tomatoes over the avocado, drizzle with olive oil, and finish with flaky sea salt, red chili flakes, and microgreens."
    ],
    chefTip: "Rubbing a halved clove of raw garlic gently over the warm toasted bread adds restaurant-quality aroma!"
  },
  {
    id: "lemon-garlic-salmon-asparagus",
    title: "One-Pan Lemon Garlic Salmon with Asparagus",
    description: "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
    servings: 2,
    prepTime: 5,
    cookTime: 12,
    totalTime: 17,
    calories: 420,
    protein: "38g",
    carbs: "8g",
    fat: "26g",
    fiber: "4g",
    dietary: ["Gluten-Free", "High-Protein", "Pescatarian"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    fallbackGradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
    ingredients: [
      { item: "Wild-caught salmon fillets (skin-on)", amount: 2, unit: "fillets (6 oz each)" },
      { item: "Fresh thin asparagus spears, woody ends snapped off", amount: 1, unit: "bunch (10 oz)" },
      { item: "Garlic cloves, finely minced", amount: 3, unit: "cloves" },
      { item: "Extra virgin olive oil", amount: 1.5, unit: "tbsp" },
      { item: "Fresh lemon, half juiced and half sliced into rounds", amount: 1, unit: "lemon" },
      { item: "Fresh dill or parsley, chopped", amount: 2, unit: "tbsp" },
      { item: "Coarse sea salt and freshly cracked black pepper", amount: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Pat the salmon fillets dry with paper towels and season both sides with salt and black pepper.",
      "Heat olive oil in a large cast-iron or heavy skillet over medium-high heat until shimmering.",
      "Place salmon skin-side up and sear undisturbed for 4 minutes until a golden crust forms. Flip carefully.",
      "Push salmon to one side of the skillet. Add asparagus spears, minced garlic, and lemon slices to the pan.",
      "Cook for 6 to 8 minutes, turning asparagus occasionally, until salmon flakes easily with a fork and asparagus is tender-crisp.",
      "Squeeze fresh lemon juice over everything and sprinkle with chopped fresh dill before serving directly from the pan."
    ],
    chefTip: "Keeping the skin on preserves moisture and gives crisp texture without any sticking."
  },
  {
    id: "quinoa-veggie-power-bowl",
    title: "Quinoa Veggie Power Bowl",
    description: "A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.",
    servings: 2,
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    calories: 450,
    protein: "15g",
    carbs: "62g",
    fat: "18g",
    fiber: "13g",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    fallbackGradient: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
    ingredients: [
      { item: "Cooked tricolor or white quinoa", amount: 2, unit: "cups" },
      { item: "Roasted sweet potato cubes", amount: 1.5, unit: "cups" },
      { item: "Baby spinach or Tuscan kale leaves", amount: 2, unit: "cups" },
      { item: "Ripe avocado, sliced", amount: 1, unit: "avocado" },
      { item: "Steamed broccoli florets or edamame", amount: 1, unit: "cup" },
      { item: "Toasted pumpkin seeds (pepitas)", amount: 2, unit: "tbsp" },
      { item: "Creamy tahini dressing (tahini, warm water, lemon, garlic)", amount: 3, unit: "tbsp" }
    ],
    instructions: [
      "Warm the cooked quinoa gently or serve at room temperature as preferred.",
      "Divide the warm quinoa between two wide, shallow serving bowls.",
      "Arrange the roasted sweet potato cubes, fresh baby spinach, steamed broccoli, and sliced avocado in neat sections over the quinoa.",
      "Sprinkle crunchy toasted pumpkin seeds over the top for texture and healthy minerals.",
      "Drizzle generously with creamy tahini-lemon dressing and serve with extra lemon wedges."
    ],
    chefTip: "Pre-roast a big batch of sweet potatoes and quinoa on Sunday for 5-minute lunch assembly all week."
  },
  {
    id: "sweet-potato-black-bean-tacos",
    title: "Sweet Potato Black Bean Tacos",
    description: "Smoky roasted sweet potatoes and black beans tucked into warm tortillas.",
    servings: 3,
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    calories: 380,
    protein: "12g",
    carbs: "64g",
    fat: "10g",
    fiber: "14g",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=80",
    fallbackGradient: "linear-gradient(135deg, #fbe9e7 0%, #ffccbc 100%)",
    ingredients: [
      { item: "Yellow corn tortillas, warmed", amount: 6, unit: "tortillas" },
      { item: "Sweet potatoes, peeled and diced into 1/2-inch cubes", amount: 2, unit: "medium" },
      { item: "Black beans, rinsed and drained", amount: 1, unit: "can (15 oz)" },
      { item: "Ground cumin & smoked paprika", amount: 1, unit: "tsp each" },
      { item: "Shredded purple cabbage slaw", amount: 1.5, unit: "cups" },
      { item: "Fresh cilantro leaves & lime wedges", amount: 0.5, unit: "cup" },
      { item: "Avocado crema or diced avocado", amount: 0.5, unit: "cup" }
    ],
    instructions: [
      "Toss diced sweet potatoes with olive oil, cumin, smoked paprika, and salt. Roast in oven at 400°F (200°C) or pan-sear for 15 minutes until caramelized and tender.",
      "In a small skillet, warm black beans with a splash of water, pinch of cumin, and pinch of salt.",
      "Warm the corn tortillas on a dry skillet or over an open flame for 30 seconds per side until pliable and lightly charred.",
      "Spoon seasoned black beans into each tortilla, followed by a generous scoop of roasted sweet potatoes.",
      "Top with crisp purple cabbage, fresh cilantro, avocado crema, and a generous squeeze of fresh lime juice."
    ],
    chefTip: "Tossing the shredded cabbage with a splash of apple cider vinegar makes a quick tangy pickle in 2 minutes."
  },
  {
    id: "greek-yogurt-berry-parfait",
    title: "Greek Yogurt Berry Parfait",
    description: "Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.",
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    calories: 260,
    protein: "22g",
    carbs: "34g",
    fat: "4g",
    fiber: "6g",
    dietary: ["Vegetarian", "Gluten-Free", "High-Protein"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    fallbackGradient: "linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)",
    ingredients: [
      { item: "Plain non-fat or whole milk Greek yogurt", amount: 1, unit: "cup" },
      { item: "Fresh blueberries and raspberries", amount: 0.75, unit: "cup" },
      { item: "Gluten-free rolled oats or low-sugar granola", amount: 0.33, unit: "cup" },
      { item: "Chia seeds or ground flaxseeds", amount: 1, unit: "tsp" },
      { item: "Raw organic honey or pure maple syrup", amount: 1, unit: "tsp" },
      { item: "Ground cinnamon", amount: 1, unit: "light dusting" }
    ],
    instructions: [
      "Spoon 1/3 cup of Greek yogurt into the base of a clear glass or bowl.",
      "Add a layer of mixed fresh berries followed by a tablespoon of crunchy oats and chia seeds.",
      "Repeat the layers with remaining yogurt, fresh berries, and oats until filled to the brim.",
      "Drizzle raw honey or maple syrup over the top and dust lightly with ground cinnamon.",
      "Enjoy immediately for maximum crunch, or let sit in the fridge for 20 minutes for a softer texture."
    ],
    chefTip: "Use frozen wild berries heated for 30 seconds in the microwave to create an instant warm compote sauce!"
  },
  {
    id: "lentil-spinach-soup",
    title: "Lentil & Spinach Soup",
    description: "A hearty 30-minute soup rich in plant protein and iron.",
    servings: 4,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    calories: 310,
    protein: "18g",
    carbs: "48g",
    fat: "6g",
    fiber: "15g",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "High-Protein"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
    fallbackGradient: "linear-gradient(135deg, #fffde7 0%, #fff9c4 100%)",
    ingredients: [
      { item: "Brown or French green lentils, sorted & rinsed", amount: 1.25, unit: "cups" },
      { item: "Fresh baby spinach leaves", amount: 4, unit: "cups packed" },
      { item: "Carrots, sliced into coins", amount: 2, unit: "medium" },
      { item: "Celery stalks, sliced", amount: 2, unit: "stalks" },
      { item: "Yellow onion, diced", amount: 1, unit: "medium" },
      { item: "Garlic cloves, minced", amount: 4, unit: "cloves" },
      { item: "Low-sodium vegetable broth", amount: 4, unit: "cups" },
      { item: "Crushed canned tomatoes", amount: 1, unit: "cup" },
      { item: "Ground cumin and smoked paprika", amount: 1, unit: "tsp each" },
      { item: "Fresh lemon juice & extra virgin olive oil", amount: 1, unit: "tbsp each" }
    ],
    instructions: [
      "In a Dutch oven or large soup pot, heat 1 tbsp olive oil over medium heat. Sauté onion, carrots, and celery for 5 minutes until soft.",
      "Add minced garlic, cumin, and smoked paprika; stir for 1 minute until fragrant.",
      "Pour in vegetable broth, crushed tomatoes, and rinsed lentils. Bring to a rolling boil.",
      "Reduce heat to low, cover with a lid, and simmer gently for 18 to 20 minutes until lentils are tender.",
      "Stir in fresh baby spinach and let wilt for 2 minutes. Stir in fresh lemon juice and season with sea salt and black pepper.",
      "Ladle into warm bowls and serve with toasted wholegrain bread."
    ],
    chefTip: "Blend 2 ladles of the cooked soup in a blender and stir back in for an ultra-velvety texture without cream."
  },
  {
    id: "banana-oat-pancakes",
    title: "Banana Oat Pancakes",
    description: "Flour-free pancakes sweetened naturally with ripe bananas.",
    servings: 2,
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    calories: 310,
    protein: "11g",
    carbs: "52g",
    fat: "7g",
    fiber: "8g",
    dietary: ["Vegetarian", "Gluten-Free", "No Added Sugar"],
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
    fallbackGradient: "linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)",
    ingredients: [
      { item: "Ripe speckled bananas", amount: 2, unit: "large" },
      { item: "Rolled oats (certified gluten-free)", amount: 1.5, unit: "cups" },
      { item: "Large eggs (or 2 flax eggs for vegan)", amount: 2, unit: "large" },
      { item: "Unsweetened almond milk or milk of choice", amount: 0.33, unit: "cup" },
      { item: "Baking powder", amount: 1, unit: "tsp" },
      { item: "Ground cinnamon", amount: 0.5, unit: "tsp" },
      { item: "Pure vanilla extract", amount: 0.5, unit: "tsp" },
      { item: "Fresh blueberries or banana slices for serving", amount: 0.5, unit: "cup" }
    ],
    instructions: [
      "Place bananas, rolled oats, eggs, almond milk, baking powder, cinnamon, and vanilla in a blender.",
      "Blend on high for 30 to 45 seconds until smooth batter forms. Let batter rest 2 minutes to thicken slightly.",
      "Heat a non-stick skillet or griddle over medium heat and lightly grease with coconut oil or butter.",
      "Pour 1/4 cup of batter per pancake. Cook for 2 to 3 minutes until bubbles appear on the surface and edges look set.",
      "Carefully flip and cook for another 1 to 2 minutes until golden brown.",
      "Stack on plates and serve warm topped with fresh berries, banana slices, and a light drizzle of pure maple syrup."
    ],
    chefTip: "Drop fresh blueberries or mini dark chocolate chips directly onto the uncooked side right after pouring batter into the pan!"
  }
];
