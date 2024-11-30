document.addEventListener('DOMContentLoaded', function() {
  
    const addFavoriteButtons = document.querySelectorAll('.add-favorite');
    const favoritesList = document.getElementById('favorites-list');
    const favoriteCount = document.getElementById('favorite-count');
  
    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];


    // Populate the favorite list from localStorage when the page loads
    updateFavoritesList();
  
    // Add to favorites
    addFavoriteButtons.forEach(button => {
      button.addEventListener('click', function() {
        const recipeCard = this.parentElement;
        const recipeName = recipeCard.querySelector('.card-title').innerText;
  
        if (!favoriteRecipes.includes(recipeName)) {
          favoriteRecipes.push(recipeName);
          localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
          updateFavoritesList();
        } else {
          alert('Recipe already in favorites!');
        }
      });
    });

  
    // Update the favorite list and display count
    function updateFavoritesList() {
      favoritesList.innerHTML = '';
  
      favoriteRecipes.forEach((recipe, index) => {
        const favoriteItem = document.createElement('li');
        favoriteItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        favoriteItem.textContent = recipe;
  
        // Create delete icon with orange trash icon
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt delete-btn" style="color: dark;"></i>';
        deleteBtn.addEventListener('click', () => {
          deleteFavorite(index);
        });
  
        favoriteItem.appendChild(deleteBtn);
        favoritesList.appendChild(favoriteItem);
      });
  
      // Update the favorite count
      favoriteCount.textContent = favoriteRecipes.length;
    }
  
    // Delete favorite recipe
    function deleteFavorite(index) {
      favoriteRecipes.splice(index, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      updateFavoritesList();
    }
    const favoriteList = document.getElementById('favorites-list');
  const recipeDetailsModal = new bootstrap.Modal(document.getElementById('recipeDetailsModal'));

  // Sample data for recipes recipe.html
  const recipes = {
    //first row
    'Chicken Sandwiches': {
      title: 'Chicken Sandwiches',
      image: 'img/lunch2.png',
      ingredients: ['500g/ 1 lb of Chicken Meat', '20 slices white sandwich bread', 'Sour cream', 'Walnuts Best substitute – cashews, macadamia nuts or pecans. Else, leave it out.', 'Fresh dill', 'Pickles', '1 Celery and 1 green onion ', 'garlic, salt, pepper', 'Lemon juice ', 'Dijon mustard'],
      instructions: ['Remove flesh off the chicken and remove the skin.', 
        'Shred the chicken as finely as you can. It takes about 1 minute on medium speed using a stand-mixer using the paddle attachment (not whisk, it gets all caught up in the wires). A hand-held beater will also work but will take a bit longer. Else, use your hands.',
         'Mix sauce ingredients in a bowl until smooth. Use a whisk, if needed.',
         'Pour sauce over the chicken with remaining Filling ingredients (walnuts, celery, green onion, pickle, dill) and mix until combined. At this stage, you should sneak in a taste test and marvel at how soft and creamy the chicken sandwich filling is!',
         'Butter the bread. This not only provides extra flavour but a protection barrier so the sauce of the chicken filling doesn’t soak into the bread.',
         'Spread the filling on the bread, from edge to edge.',
         'Cut off crusts – I typically don’t cut the crust off sandwiches but for chicken sandwiches, I do if I’m making them for other people. Partly so they look neat – think High-Tea finger sandwich style – and also because then you get the full effect of the soft creamy chicken filling with just soft white bread. No tough crust getting in the way of the eating experience!',
         'Cut in half on the diagonal, or into rectangles, then line them upon a platter!']
    },
    'Chicken Curry': {
      title: 'Chicken Curry with coconut milk',
      image: 'img/dinner.png',
      ingredients: ['2-3 tablespoons vegetable oil', '1 medium potato - cut into wedges', '1 medium carrot - cut into wedges', '3 cloves garlic - minced', '1 small onion - chopped', '2 pounds chicken', '2 tablespoons fish sauce', '2 tablespoons curry powder', '1 tablespoon paprika powder (optional)', '½ teaspoon ground black pepper', '1 can (400mL) coconut milk (2 tablespoon powder dissolved in water)', '1 medium green bell pepper - cut into squares', '1 piece fresh chili pepper cut into 4-5 pieces (or dried chili flakes)'],
      instructions: ['Fry potato and carrots in oil until cooked and edges are lightly browned. Once done, remove from oil and then set aside.',
        'Saute garlic and onion in the remaining oil over medium heat. Add chicken meat and sear each both sides for a minute. ',
        'Add the fish sauce, curry powder, paprika powder, and ground pepper. Cover and simmer for 5 minutes.',
        'Turn heat to low then add coconut milk, and let it simmer until sauce thickens and chicken is fully cooked. I like it really thick so I cook it a little longer.',
        'Add the carrots, potatoes and bell pepper and chili and cook for another minute.',
        'Transfer to a serving dish and serve with rice or your favorite side.'
      ]
    },
    'American Pancake': {
      title: 'American Pancake',
      image: 'img/breakfast1.png',
      ingredients: ['1 ¼ cups all-purpose flour', '1 tablespoon baking powder', '1 ¼ teaspoons white sugar', '½ teaspoon salt', '1 cup milk', 'i egg', '½ tablespoon butter, melted', '½ cup frozen blueberries, thawed'],
      instructions: ['Sift flour, baking powder, sugar, and salt together in a large bowl. Combine milk and egg in a small bowl. Stir egg mixture into flour mixture until just combined. Stir in melted butter, then fold in blueberries. Set aside for 1 hour.',
        'Heat a lightly oiled griddle or nonstick frying pan over medium-high heat.',
        'Pour or scoop the batter onto the hot griddle, using approximately 1/4 cup for each pancake; cook until bubbles appear on the surface, then flip and cook until golden brown on both sides. Serve hot.']
    },
    'Filipino Chicken Adobo': {
      title: 'Filipino Chicken Adobo',
      image: 'img/adobo.png',
      ingredients: ['3/4 cup rice vinegar ', '3/4 cup light or low-sodium soy sauce', '1 teaspoon black peppercorns', '2 1/2 pounds boneless skinless chicken thighs', '2 tablespoons neutral oil, such as avocado oil, divided', '1 medium yellow onion, thinly sliced', '5 cloves garlic, thinly sliced or minced', '3 bay leaves (preferably fresh)', '2 teaspoons cane, brown, or white sugar (*omit if using Filipino cane vinegar)', '4 green onions, thinly sliced', 'white rice for serving'],
      instructions: ['In a large bowl, combine the vinegar, soy sauce, and peppercorns. Add the chicken thighs and marinate for at least 20 minutes, or up to overnight.',
        'Heat 1 tablespoon oil over high heat in a large skillet or pot. Remove chicken from the marinade allowing most of the marinade to drip back into the bowl (reserve the marinade). Place the chicken, smooth side down, in the hot pan. Cook undisturbed for 2 to 3 minutes, or until just a bit brown and golden. Flip and cook for only 2 more minutes—do not cook through. Transfer chicken to a large plate.',
        'Reduce heat to medium-low and add the remaining 1 tablespoon oil to the skillet. Add the onions and garlic and cook until garlic is fragrant and slightly brown, about 2 minutes. (The onions do not need to be brown).',
        'Add the reserved marinade, bay leaves and sugar and bring to a rolling boil, scraping up any browned bits that may have stuck to the bottom of the pan. Once boiling, lower the heat to medium and simmer for 3-4 minutes.',
        'Nestle in the chicken thighs, smooth side down. Lower heat to a simmer, and cook, uncovered, for 10 minutes. Flip the chicken thighs and continue to simmer, occasionally spooning sauce over the top of the thighs, for 10 to 15 minutes, or until sauce has reduced by at least half.',
        'At this point, if the sauce doesn\'t seem thick enough, remove the chicken to a plate and continue to cook the sauce until it reduces to your desired consistency. I like it a bit glaze-y but not so thick that I lose too much sauce. Return chicken back to the skillet to warm slightly, if necessary.',
        'Serve immediately with fluffy white rice, passing around extra adobo sauce at the table.']
    },
    //second row
    'Pork Tocino': {
      title: 'Pork Tocino',
      image: 'img/pork.png',
      ingredients: ['2 pounds pork butt, sliced to ¼-inch thick', '1 cup sugar', '1 tablespoon salt', '1 tablespoon garlic powder', '¼ teaspoon pepper', '2 drops red food coloring', '1 cup water', '2 tablespoons canola oil'],
      instructions: ['In a bowl, combine pork, sugar, salt, garlic, pepper, and red food coloring. Massage meat with curing mixture until well-distributed and evenly colored.',
        'Store in a covered container or ziplock bag and refrigerate overnight to cure.',
        'In a pan over medium heat, add pork including marinade and enough water to cover. Bring to a boil.',
        'Lower heat, cover and simmer until meat is tender and cooked through, adding more water in ½ cup increments as needed. ',
        'When water is completely absorbed and meat is tender, add oil and cook, stirring regularly, until meat caramelizes. Serve hot.'
        ]
    },
    'Bacon Fried Rice': {
      title: 'Bacon Fried Rice',
      image: 'img/rice.png',
      ingredients: ['6 slices thick-cut bacon, chopped', '1⁄2 large onion, diced', '2 cloves garlic, minced', '1 cup frozen peas and carrots', '4 cups cooked and cooled long-grain rice (preferably day-old)', '3 large eggs, beaten', '2 tablespoons soy sauce', '1 tablespoon oyster sauce', '1 teaspoon sesame oil', 'Salt and pepper to taste', '2 green onions, chopped'],
      instructions: ['Add the chopped bacon to a large, cold skillet. Turn the heat to medium and cook until crispy. Remove from the pan to a paper towel-lined plate. Set aside.',
        'In the same skillet, add the diced onion and cook until translucent in the bacon grease, about 3-5 minutes.',
        'Add the minced garlic and frozen peas and carrots. Sauté for 2-3 minutes until vegetables are tender. Then, add the cold rice and cook for 2-4 minutes, stirring well.',
        'Push the rice and vegetables to one side of the pan. Add the whisked eggs to the empty side and scramble until cooked through. Mix the eggs into the vegetables.',
        'Increase the heat to high. Add the soy sauce, oyster sauce, sesame oil, and chopped cooked bacon. Mix well to combine all ingredients, and add salt and pepper to taste.',
        'Cook for 1-2 more minutes, then serve hot with chopped green onions for garnish. Enjoy!'
        ]
    },
    'Pan-Seared Salmon': {
      title: 'Pan-Seared Salmon',
      image: 'img/salmon.png',
      ingredients: ['1 ½ pound whole salmon fillet, skin on, center-cut if possible', 'kosher salt, as needed for seasoning', 'black pepper, as needed for seasoning', '2 tablespoons olive oil, light olive oil, grapeseed, avocado oil, or vegetable oil', '1 tablespoon minced garlic', '1 teaspoon lemon zest', '¼ cup lemon juice', '½ teaspoon kosher salt', '¼ teaspoon black pepper', '3 tablespoons unsalted butter', '1 tablespoon dill leaves, roughly chopped', '1 tablespoon minced parsley', '4 lemon wedges'],
      instructions: ['Use the top of a knife (the spine) to remove the scales from the fillet if still intact. Run the knife a 45-degree angle against the skin to pop the scales off and discard.',
        'Cut the salmon into 4 even-sized fillets, about 2-inch wide, and 6 ounces in weight, if not already portioned.',
        'Thoroughly dry both sides of the salmon and skin with paper towels.',
        'Right before cooking, season both sides of the salmon with salt and pepper.',
        'Heat a 12-inch stainless steel, cast iron, or nonstick pan over medium heat until hot, about 2 minutes. Add the olive oil, then turn the heat to medium-high. Once the oil begins to shimmer, about 1 to 2 minutes, carefully add the salmon, skin-side down, one at a time. Using the back of a spatula, immediately press the fish down into the pan for about 10 seconds. This will help reduce the buckling of the skin. Add the remaining fillets to the pan, pressing each one down before adding the next piece. Reduce the heat to medium. Cook the salmon, occasionally pressing down on the flesh, until the skin is brown and crispy, and easily releases from the pan, about 5 to 6 minutes. The salmon will be about 75 to 80% cooked through.',
        'Use tongs to carefully flip the salmon over. Gently press the surface to make direct contact with the pan, do not move the fillets. Cook until the surface is golden brown, the edges are opaque, and the center is slightly translucent, about 1 to 2 minutes. The internal temperature should read 120°F (49°C) for medium-rare, or 130°F (54°C) for medium.',
        'Transfer the salmon to a paper towel-lined plate to drain the excess grease. Do not discard the pan.'
         ]
    },
    'Beef Pasta in Tomato Sauce': {
      title: 'Beef Pasta in Tomato Sauce',
      image: 'img/pasta.png',
      ingredients: ['8 ounces of pasta', '1 tablespoon olive oil', '1 pound of lean ground beef', '1/2 sweet onion, chopped', '2 cloves garlic, minced', '1 1/2 teaspoons Italian seasoning', '1 tablespoon instant bouillon cube (chicken or beef)', '1 (15-ounce) can marinara tomato sauce', '1/2 teaspoon Kosher salt and freshly ground black pepper, to taste', '1 cup shredded  parmesan cheese', '1 tablespoon fresh chopped parsley'],
      instructions: ['To make the beef pasta: In a large pot of boiling salted water, cook the pasta according to package instructions; drain well and set aside.',
        'Heat olive oil in a large skillet over medium-high heat. Add chopped onion to the skillet, and cook, stirring frequently, until the onion is translucent about 2-3 minutes. Stir in garlic, bouillon, and Italian seasoning, and cook until fragrant, about 1 minute.',
        'Add ground beef and cook until the meat is browned and no longer pink, about 5 minutes. Crumble the beef as it cooks and drain any excess fat.',
        'Stir in marinara sauce. Bring to a simmer, stirring occasionally, for about 8 minutes.',
        'Adjust seasoning with salt and pepper, to taste. Stir the cooked pasta into the sauce.',
        'Stir in chopped parsley and grated parmesan until melted, about 2-3 minutes. Serve the beef pasta immediately. Enjoy!'
        ]
    },

    //third row
    'Masala omelette': {
      title: 'Masala omelette',
      image: 'img/omelette.png',
      ingredients: ['2 eggs', '¼ cup onion ', '¼ cup tomato', '½ fresh green chili eg serano, or more to taste', '1 tablespoon cilantro coriander (chopped volume)', '⅛ teaspoon turmeric', '⅛ teaspoon chili powder', '1 tablespoon vegetable oil or other neutral oil'],
      instructions: ['Lightly whisk the eggs in a bowl - they should be broken up but not frothy.',
        'Finely chop the onion, tomato, chili and cilantro. Add them to the eggs, along with the turmeric and chili and stir to combine. Add a pinch of salt to taste, if you like.',
        'Gently warm the oil in a small-medium skillet/frying pan over a medium heat (see notes) and add the egg mixture while it\'s still warming up.',
        'Cook the omelette on the first side for around 2-4 minutes until it is cooked on the sides and largely cooked in the middle. Cover the top of the omelette with a small plate and flip it on to the plate and back into the skillet to turn. Cook on the other side for a minute or two to be gently brown and cooked through. Serve as it is or with roti/bread.'
        ]
    },
    'Champorado': {
      title: 'Champorado',
      image: 'img/champorado.png',
      ingredients: ['½ cup cocoa powder', '4 cups water', '1 cup glutinous/sticky rice', '½ cup sugar - add more if needed', '12 fluid ounces (1can) evaporated milk'],
      instructions: ['In a pot over high heat, bring 3 cups of water to boil. Add the glutinous rice and let it cook for 5 minutes, stirring from time to time.',
        'Dissolve cocoa powder in 1 cup warm water. Make sure all lumps are gone. Pour cocoa mixture into the pot of rice and continue cooking until it gets thicker. Turn heat to medium-low. Add the sugar and stir occasionally to prevent rice from sticking at the bottom of the pot. Add more water if it gets too thick and the rice is not yet done.',
        'Remove from heat once the glutinous rice is done and the desired consistency is achieved. Note, however, that the glutinous rice will continue to expand and absorb the liquid even after cooking.',
        'Serve Champorado in a bowl and add some evaporated milk on top.'
        ]
    },
    'Onigiri or Japanese Rice Balls': {
      title: 'Onigiri AKA Japanese Rice Balls',
      image: 'img/onigiri.png',
      ingredients: ['2 cups short grain Japanese japonica rice', '3 cups water', '1/3 cup rice vinegar', '3 tablespoons sugar', '1 teaspoon salt', '8 sheets roasted seaweed nori or [onigiri wrappers] (optional)', 'One or more fillings enough to fill 8 balls, which is about ½ to 3/4 cup'],
      instructions: ['Rinse the rice in cold water at least 5 times and drain well in a fine-mesh sieve. If using a rice cooker, simply add the rice and cold water to the rice cooker and cook according to the cooker’s instructions. To cook the rice in a pot on the stovetop, place the rice in a pot with a tight-fitting lid. Add the cold water and bring to a boil. Reduce heat to a very low simmer, cover the pot, and simmer for about 20 minutes, until all of the liquid is absorbed and the rice is tender.',
        'If using the sushi rice seasoning, while the rice is cooking, combine the vinegar, sugar, and salt in a small saucepan and heat over medium heat, stirring, just until the sugar is dissolved. When the rice is finished cooking, stir the vinegar mixture into it until well combined.',
        'Transfer the rice from the rice cooker or cooking pot to a large bowl and let cool until it is cool enough to handle.',
        'Shape your onigiri while the rice is still warm. If using a mold, wet the inside of the mold and, using wet hands, fill it about halfway with rice. Make an indentation in the middle of the rice with your thumb and add your filling, about a tablespoon or so. Add more rice on top to fill the mold. Place the top half of the mold on top and press down gently. Remove the top of the mold and invert the bottom half over a plate. Press down on the button in the middle to help the onigiri slide out. Wet the inside of the mold again and repeat the process until you have used up all of your rice and filling or have made the desired number of onigiri.',
        'If shaping the onigiri by hand, use wet hands and shape into a ball, make an indentation in the middle, fill with about 1 tablespoon of filling, and close up the hole with a bit more rice. Leave it in a ball shape, or use your hands to form it into a triangular shape, if desired.',
        'If using individually-wrapped onigiri wrappers, leave the plastic wrap on them and wrap them around your rice balls. If using regular nori sheets cut into strips, wrap in plastic wrap. Onigiri can be stored at room temperature for several hours. If you wish to store them longer than that, store in the refrigerator and bring to room temperature before serving.',
        'To serve, remove the plastic wrap from the nori wrapper, if necessary, and wrap the onigiri in the nori or simply remove the plastic wrap and serve at room temperature.'
        ]
    },
    'Masala French Toast': {
      title: 'Masala French Toast',
      image: 'img/toast.png',
      ingredients: ['2 large eggs', '2 tablespoons red onion finely minced', '1 teaspoons green chili finely minced, jalapeno or other spicy chili works too', '¼ teaspoon ground turmeric', '½ teaspoon kosher salt', '2 tablespoons cilantro finely chopped', '⅓ cup milk or water', '2 slices bread sourdough, multigrain or whole wheat'],
      instructions: ['Whisk together onion, green chili, turmeric, salt, cilantro and milk in a wide bowl (big enough to fit the sliced bread). Add in the eggs and whisk for a minute. Dip one slice of bread in the egg mixture and gently press down with a fork so the bread can absorb the egg mix. Flip the bread over and repeat on the other side.',
        'Heat a non stick pan (you can also use cast iron) and apply ½ teaspoon of oil. Carefully place the soaked bread on the pan. Spoon and spread over some extra onions from the egg mixture on top. Cook on medium heat for a minute or until the bottom side starts to turn golden brown.',
        'Turn over and cook the other side for a minute until it becomes golden brown. Repeat with the second slice of bread.',
        'Serve hot with ketchup, sriracha or green chutney.'
        ]
    },


    //breakfast page
    'Pesto Eggs': {
      title: 'Pesto Eggs',
      image: 'img/bf1_Pesto_egg.png',
      ingredients: ['2 tablespoons pesto', '2 eggs', 'pinch of kosher salt', 'pinch of ground black pepper', 'pinch of red pepper flakes', '2 pieces sourdough bread', '2 ounces herbed goat\'s cheese'],
      instructions:  ['Heat a medium frying pan over medium heat. Once hot, spread the pesto in a thin layer across the pan.',
        'When the pesto is warm, crack the eggs into the pan. Sprinkle with salt, pepper, and red pepper flakes. Cook the eggs for 4 to 5 minutes or until the whites are set and no longer translucent.',
        'Meanwhile, toast the bread and spread the goat cheese on it.',
        'Remove the eggs from the pan and place them on the toast.',
        'Serve immediately and enjoy!'
      ]
    },

    'Garlic and Rosemary Beef Tips': {
      title: 'Garlic and Rosemary Beef Tips',
      image: 'img/bf2_beeftips1.png',
      ingredients: ['1 1/2- 2 lbs beef tips (cut into 1 inch chunks)', '3 T olive oil', '1/3 cup flour', '1 diced onion', '2 T minced garlic', '1/4 cup Worcestershire sauce', '1/2 cup of dry red wine', '1 T onion powder', '1 T garlic powder', '2 cups beef broth', '1-2 sprigs rosemary', '1 sprig fresh thyme', 'salt and pepper to taste'],
      instructions:  ['Season beef with spices and Worcestershire sauce',
        'Then toss beef in 1/4 of the flour',
        'Heat olive oil in pot on medium heat',
        'Brown beef in batches on both sides until all meat is brown; set aside',
        'Saute onions until translucent',
        'Sprinkle in remaining flour and stir until no longer visible',
        'Add in the garlic',
        'Pour in red wine and stir until brown bits loosen from the bottom of the pot',
        'Add beef back in',
        'Pour in the beef broth',
        'Bring to a simmer',
        'Add in thyme and rosemary',
        'Lower heat, cover, and simmer for 2 hours or until beef is fork tender',
        'Remove thyme and rosemary sprigs before serving',
        'Enjoy!'
      ]
    },
    'Chocolate Pancakes': {
      title: 'Chocolate Pancakes',
      image: 'img/bf3_Chocolate-Pancakes.png',
      ingredients:  ['1 ⅓ cups (185g) all-purpose flour ', '¼ cup (25g) cocoa powder (I use Dutch-processed)', '2 teaspoons baking powder', '¼ teaspoon salt', '2 eggs', '⅓ cup (65g) granulated sugar', '1 cup (240 ml) whole milk', '3 tablespoons canola or vegetable oil (or 45g melted butter)', '1 teaspoon pure vanilla extract', '½ cup (85g) chocolate chips or chunks', 'butter or oil , for cooking', '140 g (5 oz.) bittersweet or semisweet chocolate', '½ cup (120 ml) heavy cream'],
      instructions:  ['In a large bowl, sift together flour, cocoa powder, baking powder with a fine mesh strainer, and salt (or whisk well with a whisk). Set aside.',
        'In a separate medium bowl, whisk together egg and sugar until well combined. Add milk, oil (or melted butter), and vanilla extract. Pour the wet ingredients into the dry ingredients and stir just until combined and moistened using a rubber spatula or whisk. Do not over mix. Mix in chocolate chips or chunks. Set batter aside and make the chocolate sauce.',
        'Chocolate sauce: In a medium heatproof bowl, combine chocolate and heavy cream. Microwave in 20- to 30-second increments, mixing in between, until chocolate is melted and mixture is smooth. You can also melt the chocolate in a stainless steel bowl set over simmering water in a medium saucepain, creating a double boiler. Set aside while making the pancakes. I like to pour it over the pancakes while it’s warm.',
        'Cook the pancakes: Heat a griddle or skillet over medium heat. Coat with butter or oil. For each pancake, drop ¼ cup of batter onto skillet. Cook 1-2 minutes, until surface of pancakes have some bubbles and the bottom appears to be done. Flip carefully and cook another 1-2 minutes. Transfer to a plate and if you want you can cover the plate loosely with aluminum foil to keep warm. Coat the skillet with butter or oil before every pancake or batch of pancakes to prevent sticking.',
        'Serve immediately with chocolate sauce (rewarm sauce in the microwave for a few seconds if needed).'
      ]
    },

    //lunch page
    'Egg Fried Rice': {
      title: 'Egg Fried Rice',
      image: 'img/lunch1_Easy-Egg-Fried-Rice1.png',
      ingredients:  ['Day-old rice: Use either cooked jasmine or brown rice, preferably a day-old or cold. This helps in achieving the perfect texture without turning the dish mushy. For more insights into the best rice selection, check The Best Rice for Egg Fried Rice.', 'three to four eggs', 'Cooking oil: Options include avocado oil, canola oil, or even butter for enhanced flavor.', 'Aromatics: Garlic, ginger, and scallions (green onions) add layers of flavor and fragrance.', 'Vegetables: Use frozen mixed vegetables, peas, carrots, bell peppers, or edamame. Feel free to mix and match based on what you have on hand.', 'Soy sauce: This gives the fried rice its characteristic savory umami taste.', 'Salt, white pepper, and optional additions like MSG or oyster sauce for added depth.', 'Optional extras: Sesame oil and sesame seeds can be included for an aromatic finish.'],
      instructions:  ['Rice Preparation: Ensure your rice is cooked and has been drying out for at least one day. This is crucial to avoid a mushy texture.',
        'Chop Aromatics and Prepare Vegetables: Dice garlic, ginger, and scallions. Prepare your chosen vegetables by chopping them into desired sizes.',
        'Scramble the Eggs: In a large wok or skillet, scramble the eggs until they are about 80% cooked. Remove the eggs and set them aside.',
        'Sauté the Aromatics and Vegetables: Using the same pan, heat your choice of cooking oil over medium-high heat. Add the aromatics and cook until fragrant, followed by your selection of vegetables.',
        'Combine with Rice and Eggs: Introduce the day-old rice into the pan, along with the partially cooked eggs. Stir-fry the mixture to combine.',
        'Season: Add your soy sauce, salt, and other seasonings such as white pepper and optional MSG or oyster sauce. Stir until the rice is evenly coated.',
        'Finish and Serve: Add optional sesame oil and sesame seeds, then serve warm. This dish pairs wonderfully with soups and other side dishes for a complete meal.'
      ]
    },
    'Beef Short Rib Kare Kare': {
      title: 'Beef Short Rib Kare Kare',
      image: 'img/lunch2_Beef-Short-Rib-Kare-Kare-Recipe-Panlasang-Pinoy.png',
      ingredients:  ['2 1/2 lbs. beef short rib', '10 pieces snake beans cut into 2 inch length', '1 bunch baby bok choy', '1 1/4 cups ground peanut', '1 medium onion chopped', '3 cloves garlic minced', '1 small banana blossom sliced', '1 tablespoon glutinous rice flour', '3/4 cup annatto water', '1 1/2 cups water', '3 tablespoons cooking oil', '1/2 cup sautéed shrimp paste'],
      instructions:  ['Heat oil in a pressure cooker.',
        'Once the oil becomes hot, saute garlic and onion.',
        'Add the ground peanut. Cook while stirring for 3 minutes.',
        'Put the beef short ribs in. Cook until light brown.',
        'Pour annatto water and water. Let boil. Note: Make your own annatto water by soaking 1/2 cup annatto or atsuete seeds in 3/4 cup warm water for at least 10 minutes and then stir thoroughly to extract the color.',
        'Cover the pressure cooker. Cook for 30 minutes.',
        'Safely remove the cover and then add the banana blossoms. Cook for 5 minutes. Note: Prepare the banana blossoms by soaking it in water with 3 tablespoons salt for 15 minutes. Wring the banana blossoms before cooking.',
        'Pour the glutinous rice flour with water into the pot. Stir until the texture of the liquid thickens. Note: You can use cornstarch as an alternative ingredient.',
        'Add snake beans and bok choy. Cook for 5 minutes.',
        'Transfer to a serving bowl. Serve with shrimp paste.',
        'Share and enjoy!'
      ]
    },
    'Spicy Korean Chicken Katsu': {
      title: 'Spicy Korean Chicken Katsu',
      image: 'img/lunch3_IMG_8988-1024x683.png',
      ingredients:  ['1/4 cup soy sauce', '1 TBS rice vinegar substitute with white vinegar-but try to use rice vinegar!', '1/8 cup plus 1 TBS sugar', '1/8 cup honey', '1/8 cup gochujang(korean hot sacue )', '2 cloves garlic, finely minced', '1 tsp fresh ginger, minced subsitute with dried ginger', '2 chicken breasts, sliced in half horizontally(so 4-5 thinner pieces) if you want to use a full package of chicken double the sauce recipe.', '1 cup flour', '1 tsp garlic powder', '1/2 tsp salt', '1/8 tsp black pepper(a pinch)', '2 eggs', '1 cup golden breadcrumbs or japanese panko', '1/4- 1/2 cup oil, for frying'],
      instructions:  ['To a medium frying pan, add all sauce ingredients. Make sure the garlic and ginger are very finely minced.',
        'Place over medium high heat and bring to a boil(this should take a minute). Lower the heat a bit and let the sauce cook on a low boil for one minute- it will thicken slightly. Remove from the heat and set aside.',
        'Slice the chicken breasts horizontally in half to about 1/2 inch in thickness. You don\'t want them too thin(thus I don\'t use already sliced chicken) but if they are extra thick they won\'t fry properly. Optional- place a piece of wax paper over the sliced chicken and pound them to uniform thickness with a mallet.            ',
        'Lay out three plates.\n\t1.In one place the flour and season it with garlic powder, salt, and black pepper. Mix to combine.\n\t2.In the second crack the eggs and give them a whisk.\n\t3.In the third pour the panko/breadcrumbs.',
        'Dip each piece of chicken into the flour, making sure it is coated completely. Then dip it into the egg and lastly into the breadcrumbs. Place all the coated chicken on a seperate plate. Heat up the oil in a frying pan- 1/4 to 1/2 cup oil, depending on the size of your pan. You\'re going for a light fry here, not a deep fry. Once the oil is hot, fry the chicken until golden, flip, and fry the second side.',
        'Lay the chicken on a paper towel to catch some of the oil. When ready to serve, set your serving plate up with rice. Heat up the sauce and dip each piece of chicken, turning it to make sure the whole cutlet is coated red and saucy. MMM!. Transfer the chicken to a cutting board(set this up right next to the pan so the sauce doesn\'t drip everywhere. Slice the cutlet on the diagonal into thin strips. Keeping the shape of the cutlet, slide your knife under the slices and transfer it all at once on top of the rice.',
        'Garnish with black or white sesame seeds, and sliced green onion if desired. Enjoy!'
      ]
    },
    'Baked Chicken Wings': {
      title: 'Baked Chicken Wings',
      image: 'img/lunch4_crispy-baked-chicken-wings.png',
      ingredients:  ['2 lb. (900g) split chicken wings', '1/2 cup oil', '1 tablespoon garlic powder', '1 tablespoon onion powder', '1 teaspoon paprika', '1/2 teaspoon Cayenne', '1 1/2 teaspoon cumin', '1 teaspoon oregano', '1 teaspoon black pepper', '1/2 teaspoon salt, or to taste', '1 teaspoon instant chicken stock (optional)'],
      instructions:  ['To make the baked chicken wings: In a small bow or shallow plate, combine garlic powder, onion powder, paprika, cumin, oregano, Cayenne, pepper, salt, and instant chicken stock.',
        'Arrange the chicken wings in a large salad bowl, drizzle with oil, and sprinkle with the spice mix. Mix thoroughly so the chicken is coated. Allow to rest for 30 minutes; overnight in the refrigerator is best. In the meantime, preheat your oven to 450ºF (230ºC) and set the rack to the middle position.',
        'When ready to bake, spread the chicken wings on a rimmed baking sheet (you can line it with foil or parchment paper).',
        'Place the baking sheet with the wings in the oven and reduce the temperature to 340ºF (170ºC) for 50 minutes to 1 hour. You can flip the wings at mid-cooking time if you like.',
        'Carefully remove the baking sheet from the oven and place it on a cooling rack. Let rest for 5 minutes. This will help the baked chicken wings retain more of their crispiness. Garnish with lemon slices and cilantro if you like. Enjoy!'
      ]
    },

    //dinner page
    'Asado Chicken with Lemon Garlic Spinach': {
      title: 'Asado Chicken with Lemon Garlic Spinach',
      image: 'img/dinner1_Asado-Chicken-with-Lemon-Garlic-Spinach-recipe-4.png',
      ingredients:  ['4 small chicken breasts', '6 cups fresh spinach', '4 garlic cloves, minced', '2 teaspoons oregano', '1 tablespoon smoked paprika', '2 teaspoons cumin Powder', '1/4 cup (60ml) chicken stock', '1/4 cup (60ml) lemon juice, more for serving', '1/2 teaspoon onion powder', '1/2 teaspoon chili flakes', '1/4 cup (60ml) Olive Oil', 'Salt and fresh cracked black pepper'],
      instructions:  ['To make this Asado chicken breasts recipe: In a bowl, combine paprika, cumin, chicken stock, lemon juice, onion powder, oregano, half the minced garlic, chili flakes, and olive oil. Taste and adjust salt and lemon before adding chicken breast.',
        'Add in chicken breasts and coat all sides. Cover and marinate chicken breasts for at least 30 minutes in the refrigerator. When ready to cook, remove chicken breasts from the marinade and reserve the marinade for later.',
        'While the chicken breasts finish marinating, heat a skillet with a little olive oil. Add the spinach and season with salt, pepper, and red chili pepper flakes (if using). Add the remaining minced garlic and lemon juice and saute spinach for 2-3 minutes over medium-low. Remove cooked spinach from the skillet and set aside.',
        'Rinse and wipe clean the skillet. Heat 1 tablespoon oil in the skillet over medium-low heat and cook marinated chicken breast on both sides, until the internal temperature reads 165ºF (74ºC) on an instant-read thermometer, approx. 15 minutes. Remove to a plate, allow to rest for a couple of minutes then slice.',
        'While the chicken is resting, you can deglaze the skillet with chicken stock and add the remaining marinade. Cook on medium until reduced, 2 minutes approximatively.',
        'Divide sauteed spinach into plates or bowls and arrange sliced chicken breasts. Drizzle with the sauce. Serve the chicken and sauteed spinach garnished with lemon slices, and fresh chopped parsley. Enjoy! Add an extra splash of lemon juice and sprinkle some grated parmesan (optional) over the spinach before serving the Asado chicken breasts and spinach. Enjoy!'
      ]
    },
    'Garlic Parmesan Chicken': {
      title: 'Garlic Parmesan Chicken',
      image: 'img/dinner2_Garlic-Parmesan-Chicken-1.png',
      ingredients:  ['Sauce:', '1 ¾ cups chicken broth', '¼ cup heavy cream', '1 teaspoon Worcestershire sauce', '1 teaspoon mustard powder', '1 teaspoon honey', '½ chicken bouillon cube', '½ teaspoon EACH: onion powder, oregano, basil, parsley', 'Chicken/Other:', '2 large boneless skinless chicken breasts', 'Salt/Pepper', '2 teaspoons parsley', '1-2 tablespoons olive oil', '¾ cup dry white wine, see notes', '4 cloves garlic, minced', '3 tablespoons butter', '3 tablespoons flour', '½ cup freshly grated Parmesan cheese', '1 tablespoon fresh lemon juice'],
      instructions:  ['Combine the sauce ingredients in a large measuring cup with a spout and set aside. Measure out remaining ingredients before beginning.',
        'Slice the chicken in half lengthwise to create 2-3 thinner slices. Cover with saran wrap and use the textured side of a meat mallet to pound it to ½ inch thick.',
        'Season each side of the chicken with salt, pepper, and parsley.',
        'Heat olive oil in a large skillet over medium-high heat. Sear the chicken in batches for 4-5 minutes per side, until a golden crust has developed. Set aside.',
        'Turn the heat off. Add the wine and then set the heat to medium. Use a silicone spatula to clean the bottom and sides of the skillet, the “fond” will add more flavor to the sauce. Bring to a gentle bubble and reduce for 2 minutes. Add the garlic and cook for 2-3 more minutes, until the liquid has reduced by half.',
        'Add the butter and flour and stir to combine. Cook for 1-2 minutes to cook off the raw flour taste.',
        'Add the sauce mixture (from step 1) in small splashes, stirring continuously. Bring to a boil, then reduce to a simmer. Simmer and reduce for about 8 minutes.',
        'Reduce heat to low and gradually sprinkle in the Parmesan cheese, stirring continuously. Stir in the lemon juice.',
        'Add the chicken back and spoon the sauce on top. Heat through for 5 minutes or until the sauce has reached your desired thickness. Garnish with parsley and serve with mashed potatoes and roasted vegetables of choice!'
      ]
    },
    'Chicken Alfredo Pasta': {
      title: 'Chicken Alfredo Pasta',
      image: 'img/dinner4_Chicken-Alfredo-Pasta-1.png',
      ingredients:  ['3 tablespoons olive oil', '1 ½ pounds boneless skinless chicken breasts, pounded to an even thickness (4 average-sized breasts)', '1 to 2 teaspoons 21 Salute Seasoning or poultry seasoning', '1 teaspoon kosher salt, or to taste', '1 teaspoon freshly ground black pepper, or to taste', '½ cup white wine* or chicken broth, or as necessary', '3 tablespoons unsalted butter, or more if you want extra sauce', '1 tablespoon garlic, finely minced; or to taste', '2 teaspoons fresh parsley, optional for garnishing'],
      instructions:  ['To a large skillet, add the olive oil, pounded chicken, evenly season with 21 Salute, salt, pepper, and cook over medium-high heat for 5 minutes. Do not touch, move, or disturb the chicken while it is searing. After 5 minutes, flip chicken over. It should have a medium golden color. For thicker/bigger chicken breasts, sear for 6-7 minutes.',
        'Allow chicken to cook on the second side for about 5 minutes, or until done and cooked through. Again, do not disturb the chicken while it\'s searing.',
        'Remove chicken with a slotted spatula and place it on a plate to rest.',
        'Using caution, deglaze your skillet by adding wine (or broth) and allow the liquid to bubble up and steam violently for a few seconds.',
        'Add the butter and allow it to melt, about 1 minute; stir continuously until melted.',
        'Add the garlic and cook until fragrant, about 1 minutes; stir continuously.',
        'Turn the heat off, add the chicken back into the skillet, flip it around in the garlic butter sauce, and spoon the sauce over the chicken.',
        'Optionally garnish with parsley and serve immediately.'
      ]
    },
    'Oven Baked Chicken Bite': {
      title: 'Oven Baked Chicken Bite',
      image: 'img/dinner5_Oven-Baked-Chicken-Bites-recipe-6.png',
      ingredients: ['1 pound (450g) chicken breasts, skinless and boneless', ' tablespoon olive oil', '1 teaspoon salt', '2 tablespoons unsalted butter, diced', '1/4 teaspoon fresh ground pepper', '1/2 teaspoon paprika', '1/8 teaspoon cayenne pepper', '1/2 teaspoon garlic powder', '1/2 teaspoon onion powder', '1 teaspoon instant chicken stock, optional (lower the salt amount if using)', '1 teaspoon Italian seasoning', 'Fresh chopped parsley, for garnish'],
      instructions:  ['To make the oven-baked chicken bites: Preheat your oven to 420°F  (220ºC) conventional. Cut chicken into 1-inch cubes.',
        'In a small bowl, combine all seasonings (salt, pepper, paprika, cayenne pepper, garlic powder, onion powder, chicken stock, and Italian seasoning). Arrange chicken in a baking dish and sprinkle with the seasoning mix. Drizzle a tablespoon olive oil and toss chicken cubes with the seasoning to coat on all sides. Speck seasoned chicken with butter cubes.',
        'Bake seasoned chicken in the preheated oven for 16-18 minutes, or until internal temperature reaches 165°F (75°C) using a meat thermometer. After 8-10 minutes, stir the chicken bites with a spoon for even baking. Once done, the chicken bites should be golden with crisp edges. For crispier chicken bites, switch to broil on high for the last 2 minutes of cooking until golden.',
        'Remove the baking dish from the oven, sprinkle chicken with fresh chopped parsley, and let rest for 5 minutes before serving. Serve the oven-baked chicken bites over cauliflower rice with a good drizzle of the pan juices and a slice of lemon. Enjoy!'
      ]
    },

    //dessert.html
    'Biko(Filipino Rice Cake)': {
      title: 'Biko(Filipino Rice Cake)',
      image: 'img/dessert_biko-recipe.png',
      ingredients: ['2 cups glutinous rice - washed and drained', '1 cup canned coconut milk', '1 cup water', '2 pieces pandan leaves', '2 cups canned coconut milk - SEE NOTE 1', '1 cup dark brown sugar, packed', '1 teaspoon vanilla (optional)', 'vegetable or coconut oil - for greasing the pan'],
      instructions:   ['vegetable or coconut oil: Generously grease an 8x8-inch square baking pan and set aside.',
        '2 cups glutinous rice,1 cup canned coconut milk,1 cup water, 2 pieces pandan leaves: In a large pot over medium heat, mix 1 cup coconut milk and 1 cup water. Add the glutinous rice and pandan leaves. Bring to a simmer then turn heat to low and cover. Let it cook until all liquids are absorbed. The rice should only be almost cooked at this point, not fully cook or the biko will be mushy. They should be softer but has not fully expanded and it is ok to see some grains are still \'\'chalky\'\' at the center. If it is too undercooked, you can add a bit more water (start with ¼ cup) pour along the edges.',
        '2 cups canned coconut milk,1 cup dark brown sugar, packed,1 teaspoon vanilla: While waiting, prepare the latik syrup by combining the 2 cups coconut milk and 1 cup dark brown sugar in a large pan. You can add the vanilla extract if desired. (I do). Cook over medium heat while constantly stirring. Cook it until the liquid is reduced into a thick syrup, the color should also have darkened into deep brown caramel. Reduce the heat to very low at this point.',
        'Scoop and reserve ½ cup of the latik syrup for the topping later. Add the cooked rice (without the pandan leaves) to the pan with the remaining latik syrup. Gently fold the sticky rice and the syrup until completely coated. Cook while stirring occasionally, until the rice completely absorbs the syrup, but it shold still be not mushy. The individual grains should still be visible and it is ok to see some of the grains having a bit of white parts at this point as it will continue to cook and expand in the oven.',
        'Transfer the rice into the greased pan and spread out evenly. Pour the reserved latik syrup on spread evenly on top of the rice. Bake in a preheated oven at 350°F/180°C for 20-30 minutes or until the latik is reduced and becomes bubbly.',
        'Remove from oven and let it cool down. Cut into squares and serve.'
      ]
    },
    'Cheesecake Crescent Rolls Casserole': {
      title: 'Cheesecake Crescent Rolls Casserole',
      image: 'img/dessert_Cheesecake-Crescent-Rolls-Casserole-1.png',
      ingredients: ['2 cans of refrigerated crescent roll dough', '2 8 ounce blocks of cream cheese, softened to room temperature', '1 cup of granulated sugar', '1 teaspoon of vanilla extract', '1/4 cup of melted butter', '1 tablespoon of ground cinnamon', '2 tablespoons of granulated sugar'],
      instructions:    ['Preheat the oven to 350°F (175°C). Grease a 9×13-inch baking dish to ensure the casserole does not stick.',
        'Unroll one can of crescent roll dough and spread it evenly across the bottom of the prepared baking dish. Press the seams together to create a uniform layer.',
        'In a large mixing bowl, beat the softened cream cheese together with 1 cup of granulated sugar and the vanilla extract. Mix until the ingredients are smooth and well combined.',
        'Evenly distribute the cream cheese mixture over the layer of crescent roll dough in the baking dish, ensuring a consistent layer.',
        'Unroll the second can of crescent roll dough and carefully place it over the cream cheese layer. Press the seams together to create a smooth top layer.',
        'Brush the melted butter evenly over the top layer of crescent roll dough. In a small bowl, combine the ground cinnamon and the remaining 2 tablespoons of granulated sugar. Sprinkle this mixture generously over the buttered dough.',
        'Place the baking dish in the preheated oven and bake for 30 minutes, or until the top is crisp and golden brown.',
        'Allow the casserole to cool for at least 20 minutes before slicing it into squares and serving. Optionally, drizzle with honey for added sweetness.'
        ]
    },
    'Chocolate Tiramisu': {
      title: 'Chocolate Tiramisu',
      image: 'img/dessert_chocolate-tiramisu-7.png',
      ingredients: ['1 cup heavy cream', '7 oz dark chocolate, finely chopped', '4 egg yolks', '1 cup granulated sugar', '1 tbsp rum', '18 oz mascarpone cheese, at room temperature', '2 cups heavy cream', '1 1⁄2 cups strong brewed coffee or espresso, warm', '1 tbsp granulated sugar', '1 tbsp cocoa powder'],
      instructions:    ['Make the ganache: Heat the cream in a saucepan until just boiling. Pour over the chopped chocolate in a bowl. Let sit for 5 minutes, then stir until smooth. Set aside to cool slightly.',
        'Make the mascarpone cream: Whisk the egg yolks, sugar, and rum until pale and fluffy. Beat in the mascarpone until smooth. In a separate bowl, whip the heavy cream to stiff peaks. Gently fold the whipped cream into the mascarpone mixture until combined.',
        'Make the coffee soak. Sift the cocoa powder into a shallow bowl. Stir in the sugar and coffee until dissolved.',
        'Assemble the tiramisu: Spread a thin layer of ganache in an 8×8-inch dish. Quickly dip each ladyfinger in the coffee soak and arrange them in the dish. Spread 1/3 of the mascarpone cream on top. Drizzle with ganache. Repeat the layers, ending with mascarpone. Dust with cocoa powder.',
        'Chill the tiramisu for at least 2 hours or overnight before serving. It keeps well for up to 3 days in the fridge.'
        ]
    },
    'Filipino Banana Cue': {
      title: 'Filipino Banana Cue',
      image: 'img/dessert_filipino-Banana-Cue-sweet-simple-vegan.png',
      ingredients: ['1 bunch saba bananas (about 7-10; see notes)', '1/2 cup light brown sugar', 'Canola oil'],
      instructions:   ['Heat 1 1/2 to 2 inches of oil in a pan or wok on medium-low heat. You don’t want too much oil, just enough to cover about half of the banana. ',
        'Gently peel bananas but keep them whole. Set aside.',
        'Once the oil is warm, liberally sprinkle in half of brown sugar and wait until the sugar starts to caramelize.',
        'Carefully add the bananas into the hot oil on top of the caramelized brown sugar and begin to fry. After about a minute, start turning the bananas. Sprinkle a little bit of sugar on top of the bananas and in the surrounding oil and fry for about a minute more. Turn again continue with this process until you have added all of the brown sugar. Then, continue to turn every minute or two, so that they fry evenly. The goal here is to cook the bananas until they are golden and completely coated in the caramel. The cooking time will vary depending on the size of your bananas, but ours usually take about 8-10 minutes total.',
        'Once finished, shake off any excess oil and place the banana cue onto a clean plate or cooling rack to cool. You can stand them up in a colander to drain a bit as well. We suggest not placing it on paper towels as it may stick.',
        'Once it is cool enough to eat and handle, you can eat them as is or skewer 1-2 of them onto some barbecue sticks. Dig in and enjoy! '
        ]
    }


  };
  // Add event listener to favorite items recipe.html
  favoriteList.addEventListener('click', function(event) {
    const recipeName = event.target.textContent.trim();
    if (recipes[recipeName]) {
      const recipe = recipes[recipeName];
      document.getElementById('recipe-title').textContent = recipe.title;
      document.getElementById('recipe-image').src = recipe.image;
      document.getElementById('recipe-ingredients').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
      document.getElementById('recipe-instructions').innerHTML = recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('');
      recipeDetailsModal.show();
    }
  });


  //index.html modal
  function showRecipeDetails(title, imageSrc, ingredients, instructions) {
    document.getElementById('recipeTitle').innerText = title;
    document.getElementById('recipeImage').src = imageSrc;
    
    const ingredientsList = document.getElementById('recipeIngredients');
    ingredientsList.innerHTML = '';
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
    });
    const instructionsList = document.getElementById('recipeInstructions'); // Changed from 'recipe-instructions' to 'recipeInstructions'
  instructionsList.innerHTML = '';
  instructions.forEach(instruction => {
    const li = document.createElement('li');
    li.innerText = instruction;
    instructionsList.appendChild(li);
  });
}

document.querySelectorAll('.stars').forEach(stars => {
	stars.addEventListener('click', function (e) {
	  if (e.target.classList.contains('star')) {
		const rating = parseFloat(e.target.getAttribute('data-rating'));
		const item = stars.getAttribute('data-item');
		setRating(item, rating);
		displayRating(item, rating);
	  }
	});
  });
  

  //star rating
  const stars = document.querySelectorAll('.stars');

  stars.forEach(starContainer => {
    const itemId = starContainer.getAttribute('data-item');
    const ratingValueElement = document.getElementById(`rating-${itemId}`);

    starContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('star')) {
        const rating = event.target.getAttribute('data-rating');
        localStorage.setItem(`rating-${itemId}`, rating);
        ratingValueElement.textContent = `Rating: ${rating}`;
        updateStars(starContainer, rating);
      }
    });

    // Load the saved rating from local storage
    const savedRating = localStorage.getItem(`rating-${itemId}`);
    if (savedRating) {
      ratingValueElement.textContent = `Rating: ${savedRating}`;
      updateStars(starContainer, savedRating);
    }else {
      ratingValueElement.textContent = 'Rating: 0'; // Remove the text if no rating is saved
    }
  });

  function updateStars(starContainer, rating) {
    const stars = starContainer.querySelectorAll('.star');
    stars.forEach(star => {
      if (star.getAttribute('data-rating') <= rating) {
        star.style.color = 'gold'; // Highlight the star
      } else {
        star.style.color = 'black'; // Reset the star color
      }
    });
  }
  

//contact us
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Fetch form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
  }

  // Log form values (or send to server)
  console.log("Form Submitted:", { name, email, message });

  // Show toast notification
  const successToast = new bootstrap.Toast(document.getElementById("successToast"));
  successToast.show();

  // Clear form fields
  document.getElementById("contactForm").reset();
});



function showRecipeDetails(title, imageSrc, ingredients, instructions) {
  document.getElementById('recipeTitle').innerText = title;
  document.getElementById('recipeImage').src = imageSrc;
  

  const ingredientsList = document.getElementById('recipeIngredients');
  ingredientsList.innerHTML = '';
  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.innerText = ingredient;
    ingredientsList.appendChild(li);
  });

  const instructionsList = document.getElementById('recipeInstructions'); // Changed from 'recipe-instructions' to 'recipeInstructions'
  instructionsList.innerHTML = '';
  instructions.forEach(instruction => {
    const li = document.createElement('li');
    li.innerText = instruction;
    instructionsList.appendChild(li);
  });
}


  });
  