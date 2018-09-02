const breedData = [
  {
    "id": 1,
    "name": "Affenpinscher",
    "life_span": "10 - 12 years",
    "bred_for": "Small rodent hunting, lapdog",
    "group_id": "4",
    "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "weight": {
      "imperial": "6 - 13 lbs",
      "metric": "3 - 6 kgs"
    },
    "height": {
      "imperial": "9 - 11.5 inches at the withers",
      "metric": "23 - 29 cm at the withers"
    }
  },
  {
    "id": 2,
    "name": "Afghan Hound",
    "life_span": "10 - 13 years",
    "bred_for": "Coursing and hunting",
    "group_id": "1",
    "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
    "weight": {
      "imperial": "50 - 60 lbs",
      "metric": "23 - 27 kgs"
    },
    "height": {
      "imperial": "25 - 27 inches at the withers",
      "metric": "64 - 69 cm at the withers"
    }
  },
  {
    "id": 3,
    "name": "African Hunting Dog",
    "life_span": "11 years",
    "bred_for": "A wild pack animal",
    "group_id": "3",
    "temperament": "Wild, Hardworking, Dutiful",
    "weight": {
      "imperial": "44 - 66 lbs",
      "metric": "20 - 30 kgs"
    },
    "height": {
      "imperial": "30 inches at the withers",
      "metric": "76 cm at the withers"
    }
  },
  {
    "id": 4,
    "name": "Alaskan Husky",
    "life_span": "10 - 13 years",
    "bred_for": "Sled pulling",
    "group_id": "3",
    "temperament": "Friendly, Energetic, Loyal, Gentle, Confident",
    "weight": {
      "imperial": "38 - 50 lbs",
      "metric": "17 - 23 kgs"
    },
    "height": {
      "imperial": "23 - 26 inches at the withers",
      "metric": "58 - 66 cm at the withers"
    }
  },
  {
    "id": 5,
    "name": "American Bulldog",
    "life_span": "10 - 12 years",
    "group_id": "3",
    "temperament": "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
    "weight": {
      "imperial": "60 - 120 lbs",
      "metric": "27 - 54 kgs"
    },
    "height": {
      "imperial": "22 - 27 inches at the withers",
      "metric": "56 - 69 cm at the withers"
    }
  },
  {
    "id": 6,
    "name": "American Foxhound",
    "life_span": "8 - 15 years",
    "bred_for": "Fox hunting, scent hound",
    "group_id": "1",
    "temperament": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
    "weight": {
      "imperial": "65 - 75 lbs",
      "metric": "29 - 34 kgs"
    },
    "height": {
      "imperial": "21 - 28 inches at the withers",
      "metric": "53 - 71 cm at the withers"
    }
  },
  {
    "id": 6,
    "name": "American Pit Bull Terrier",
    "life_span": "10 - 15 years",
    "bred_for": "Fighting",
    "group_id": "2",
    "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
    "weight": {
      "imperial": "30 - 60 lbs",
      "metric": "14 - 27 kgs"
    },
    "height": {
      "imperial": "17 - 21 inches at the withers",
      "metric": "43 - 53 cm at the withers"
    }
  },
  {
    "id": 7,
    "name": "Australian Cattle Dog",
    "life_span": "12 - 14 years",
    "bred_for": "Cattle herding, herding trials",
    "group_id": "7",
    "temperament": "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
    "weight": {
      "imperial": "44 - 62 lbs",
      "metric": "20 - 28 kgs"
    },
    "height": {
      "imperial": "17 - 20 inches at the withers",
      "metric": "43 - 51 cm at the withers"
    }
  },
  {
    "id": 8,
    "name": "Australian Shepherd",
    "life_span": "12 - 16 years",
    "bred_for": "Sheep herding",
    "group_id": "7",
    "temperament": "Good-natured, Affectionate, Intelligent, Active, Protective",
    "weight": {
      "imperial": "35 - 65 lbs",
      "metric": "16 - 29 kgs"
    },
    "height": {
      "imperial": "18 - 23 inches at the withers",
      "metric": "46 - 58 cm at the withers"
    }
  },
  {
    "id": 9,
    "name": "Basenji",
    "life_span": "10 - 12 years",
    "bred_for": "Hunting",
    "group_id": "1",
    "temperament": "Affectionate, Energetic, Alert, Curious, Playful, Intelligent",
    "weight": {
      "imperial": "22 - 24 lbs",
      "metric": "10 - 11 kgs"
    },
    "height": {
      "imperial": "16 - 17 inches at the withers",
      "metric": "41 - 43 cm at the withers"
    }
  },
  {
    "id": 10,
    "name": "Basset Hound",
    "life_span": "12 - 15 years",
    "bred_for": "Hunting by scent",
    "group_id": "1",
    "temperament": "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle",
    "weight": {
      "imperial": "50 - 65 lbs",
      "metric": "23 - 29 kgs"
    },
    "height": {
      "imperial": "14 inches at the withers",
      "metric": "36 cm at the withers"
    }
  },
  {
    "id": 11,
    "name": "Beagle",
    "life_span": "13 - 16 years",
    "bred_for": "Rabbit, hare hunting",
    "group_id": "1",
    "temperament": "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
    "weight": {
      "imperial": "20 - 35 lbs",
      "metric": "9 - 16 kgs"
    },
    "height": {
      "imperial": "13 - 15 inches at the withers",
      "metric": "33 - 38 cm at the withers"
    }
  },
  {
    "id": 12,
    "name": "Belgian Malinois",
    "life_span": "12 - 14 years",
    "bred_for": "Stock herding",
    "group_id": "7",
    "temperament": "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective",
    "weight": {
      "imperial": "40 - 80 lbs",
      "metric": "18 - 36 kgs"
    },
    "height": {
      "imperial": "22 - 26 inches at the withers",
      "metric": "56 - 66 cm at the withers"
    }
  },
  {
    "id": 13,
    "name": "Bernese Mountain Dog",
    "life_span": "7 - 10 years",
    "bred_for": "Draft work",
    "group_id": "3",
    "temperament": "Affectionate, Loyal, Intelligent, Faithful",
    "weight": {
      "imperial": "65 - 120 lbs",
      "metric": "29 - 54 kgs"
    },
    "height": {
      "imperial": "23 - 27.5 inches at the withers",
      "metric": "58 - 70 cm at the withers"
    }
  },
  {
    "id": 14,
    "name": "Bichon Frise",
    "life_span": "15 years",
    "bred_for": "Companion",
    "group_id": "5",
    "temperament": "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive",
    "weight": {
      "imperial": "10 - 18 lbs",
      "metric": "5 - 8 kgs"
    },
    "height": {
      "imperial": "9.5 - 11.5 inches at the withers",
      "metric": "24 - 29 cm at the withers"
    }
  },
  {
    "id": 15,
    "name": "Black and Tan Coonhound",
    "life_span": "10 - 12 years",
    "bred_for": "Hunting raccoons, night hunting",
    "group_id": "1",
    "temperament": "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
    "weight": {
      "imperial": "65 - 100 lbs",
      "metric": "29 - 45 kgs"
    },
    "height": {
      "imperial": "23 - 27 inches at the withers",
      "metric": "58 - 69 cm at the withers"
    }
  },
  {
    "id": 16,
    "name": "Bloodhound",
    "life_span": "8 - 10 years",
    "bred_for": "Trailing",
    "group_id": "1",
    "temperament": "Stubborn, Affectionate, Gentle, Even Tempered",
    "weight": {
      "imperial": "80 - 110 lbs",
      "metric": "36 - 50 kgs"
    },
    "height": {
      "imperial": "23 - 27 inches at the withers",
      "metric": "58 - 69 cm at the withers"
    }
  },
  {
    "id": 17,
    "name": "Bluetick Coonhound",
    "life_span": "12 - 14 years",
    "bred_for": "Hunting with a superior sense of smell.",
    "group_id": "1",
    "temperament": "Friendly, Intelligent, Active",
    "weight": {
      "imperial": "45 - 80 lbs",
      "metric": "20 - 36 kgs"
    },
    "height": {
      "imperial": "21 - 27 inches at the withers",
      "metric": "53 - 69 cm at the withers"
    }
  },
  {
    "id": 18,
    "name": "Chesapeake Bay Retriever",
    "life_span": "10 - 13 years",
    "bred_for": "Water Retriever",
    "group_id": "6",
    "temperament": "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
    "weight": {
      "imperial": "55 - 80 lbs",
      "metric": "25 - 36 kgs"
    },
    "height": {
      "imperial": "21 - 26 inches at the withers",
      "metric": "53 - 66 cm at the withers"
    }
  },
  {
    "id": 19,
    "name": "French Bulldog",
    "life_span": "9 - 11 years",
    "bred_for": "Lapdog",
    "group_id": "5",
    "temperament": "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
    "weight": {
      "imperial": "28 lbs",
      "metric": "13 kgs"
    },
    "height": {
      "imperial": "11 - 12 inches at the withers",
      "metric": "28 - 30 cm at the withers"
    }
  },
  {
    "id": 20,
    "name": "Golden Retriever",
    "life_span": "10 - 12 years",
    "bred_for": "Retrieving",
    "group_id": "6",
    "temperament": "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
    "weight": {
      "imperial": "55 - 75 lbs",
      "metric": "25 - 34 kgs"
    },
    "height": {
      "imperial": "21.5 - 24 inches at the withers",
      "metric": "55 - 61 cm at the withers"
    }
  },
  {
    "id": 21,
    "name": "Labrador Retriever",
    "life_span": "10 - 13 years",
    "bred_for": "Water retrieving",
    "group_id": "6",
    "temperament": "Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered",
    "weight": {
      "imperial": "55 - 80 lbs",
      "metric": "25 - 36 kgs"
    },
    "height": {
      "imperial": "21.5 - 24.5 inches at the withers",
      "metric": "55 - 62 cm at the withers"
    }
  },
  {
    "id": 22,
    "name": "Pug",
    "life_span": "12 - 14 years",
    "bred_for": "Lapdog",
    "group_id": "4",
    "temperament": "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
    "weight": {
      "imperial": "14 - 18 lbs",
      "metric": "6 - 8 kgs"
    },
    "height": {
      "imperial": "10 - 12 inches at the withers",
      "metric": "25 - 30 cm at the withers"
    }
  },
  {
    "id": 23,
    "name": "Redbone Coonhound",
    "life_span": "10 - 12 years",
    "bred_for": "Hunting raccoon, deer, bear, and cougar.",
    "group_id": "1",
    "temperament": "Affectionate, Energetic, Independent, Companionable, Familial, Unflappable",
    "weight": {
      "imperial": "45 - 80 lbs",
      "metric": "20 - 36 kgs"
    },
    "height": {
      "imperial": "21 - 27 inches at the withers",
      "metric": "53 - 69 cm at the withers"
    }
  },
  {
    "id": 24,
    "name": "Rhodesian Ridgeback",
    "life_span": "10 - 12 years",
    "bred_for": "Big game hunting, guarding",
    "group_id": "1",
    "temperament": "Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent",
    "weight": {
      "imperial": "75 - 80 lbs",
      "metric": "34 - 36 kgs"
    },
    "height": {
      "imperial": "24 - 27 inches at the withers",
      "metric": "61 - 69 cm at the withers"
    }
  },
  {
    "id": 25,
    "name": "Treeing Walker Coonhound",
    "life_span": "10 - 13 years",
    "group_id": "1",
    "temperament": "Clever, Affectionate, Confident, Intelligent, Loving, Trainable",
    "weight": {
      "imperial": "45 - 80 lbs",
      "metric": "20 - 36 kgs"
    },
    "height": {
      "imperial": "20 - 27 inches at the withers",
      "metric": "51 - 69 cm at the withers"
    }
  },
  {
    "id": 26,
    "name": "Vizsla",
    "life_span": "10 - 14 years",
    "bred_for": "Pointing and trailing",
    "group_id": "6",
    "temperament": "Affectionate, Energetic, Loyal, Gentle, Quiet",
    "weight": {
      "imperial": "50 - 65 lbs",
      "metric": "23 - 29 kgs"
    },
    "height": {
      "imperial": "21 - 24 inches at the withers",
      "metric": "53 - 61 cm at the withers"
    }
  },
  {
    "id": 27,
    "name": "Weimaraner",
    "life_span": "12 - 15 years",
    "bred_for": "Large game trailing and versatile gundog",
    "group_id": "6",
    "temperament": "Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast",
    "weight": {
      "imperial": "55 - 90 lbs",
      "metric": "25 - 41 kgs"
    },
    "height": {
      "imperial": "23 - 27 inches at the withers",
      "metric": "58 - 69 cm at the withers"
    }
  },
  {
    "id": 28,
    "name": "Welsh Springer Spaniel",
    "life_span": "12 - 15 years",
    "bred_for": "Flushing and retrieving birds",
    "group_id": "6",
    "temperament": "Stubborn, Friendly, Affectionate, Loyal, Playful, Active",
    "weight": {
      "imperial": "35 - 55 lbs",
      "metric": "16 - 25 kgs"
    },
    "height": {
      "imperial": "17 - 19 inches at the withers",
      "metric": "43 - 48 cm at the withers"
    }
  },
  {
    "id": 29,
    "name": "Welsh Terrier",
    "life_span": "10 - 14 years",
    "group_id": "2",
    "temperament": "Friendly, Spirited, Alert, Intelligent",
    "weight": {
      "imperial": "20 - 22 lbs",
      "metric": "9 - 10 kgs"
    },
    "height": {
      "imperial": "15 - 15.5 inches at the withers",
      "metric": "38 - 39 cm at the withers"
    }
  },
  {
    "id": 30,
    "name": "Whippet",
    "life_span": "12 - 15 years",
    "bred_for": "Coursing, racing",
    "group_id": "1",
    "temperament": "Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet",
    "weight": {
      "imperial": "25 - 35 lbs",
      "metric": "11 - 16 kgs"
    },
    "height": {
      "imperial": "18 - 22 inches at the withers",
      "metric": "46 - 56 cm at the withers"
    }
  }
];

const groupData = [
  {
    "name": "Hound",
    "description": "developed to hunt",
    "breed_description": "Originally classified as sporting dogs because of their function as hunters, breeds in the Hound Group are of a great variety of size, shape and coat. Most of these breeds were developed to hunt somewhat independently for their humans, who usually followed on foot or on horseback as the hounds chased down the prey. This group informally consists of scent hounds, dogs that hunt by tracking a scent, and sight hounds, who spot their game and run it down.",
    "breedCount": 51
  },
  {
    "name": "Terrier",
    "description": "rocky terrain",
    "breed_description": "All but two of the terriers evolved in the British Isles. The geography of the specific area (water, rocky terrain) helped to determine the exact duties of each breed, but it usually involved hunting vermin and varmints ranging from rats to badgers to otters and more. These are dogs of great determination, courage and self-confidence, with a great willingness to go to ground in search of its quarry.",
    "breedCount": 30
  },
  {
    "name": "Working",
    "description": "service dogs and hunters",
    "breed_description": "While the uses and appearances of the dogs in the Working Group vary, most are powerfully built and intelligent, performing various tasks for their people. These dogs are working farm and draft animals. They guard homes and livestock, serve heroically as police and military dogs, security dogs, guide and service dogs and hunters.",
    "breedCount": 30
  },
  {
    "name": "Toy",
    "description": "companions",
    "breed_description": "Toy dogs have been around for centuries, and are bred for one purpose: to be companions for their humans. Many have been bred down from and still resemble their larger cousins.Their small size and portability make them ideal for city dwellers and those with limited space.",
    "breedCount": 21
  },
  {
    "name": "Non-sporting",
    "Description": "literally every breed that is left",
    "breed_description": "The AKC originally registered dogs as either Sporting or Non-Sporting. Eventually, hounds and terriers were split from the Sporting Group, and the Toys and Working dogs were split off from Non-Sporting, with the Herding Group eventually splitting from Working. Today, the Non-Sporting Group is literally every breed that is left, resulting in a wide variety of sizes, shapes, hair, function and history.",
    "breedCount": 19
  },
  {
    "name": "Sporting",
    "Description": "The invention of the gun",
    "breed_description": "The invention of the gun led to the development of the sporting, or gun dogs, to aid in hunting upland game birds or waterfowl, performing at the direction of the hunter.While a number of these breeds perform more than one task, it is generally the duty of pointers and setters to point and mark game; for spaniels to flush game; and for retrievers to recover dead and wounded game.",
    "breedCount": 43
  },
  {
    "name": "Herding",
    "Description": "Herding",
    "breed_description": "Herding is a natural instinct in dogs that is seen in the wild. Humans have used that instinct to their advantage on farms and ranches with herding dogs who have the sole purpose of gathering and moving livestock from one place to another.",
    "breedCount": 55
  }
];

module.exports.breedData = breedData;
module.exports.groupData = groupData;