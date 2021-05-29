const catFacts = document.getElementById("cat-facts");
const reloadFacts = document.getElementById("reload-facts");
const catFactsArr = [
    {
        "fact": "It has been scientifically proven that owning cats is good for our health and can decrease the occurrence of high blood pressure and other illnesses.",
        "length": 149
    },
    {
        "fact": "A cat's whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to walk through.",
        "length": 113
    },
    {
        "fact": "A cats field of vision is about 185 degrees.",
        "length": 44
    },
    {
        "fact": "Ailurophile is the word cat lovers are officially called.",
        "length": 57
    },
    {
        "fact": "A group of cats is called a clowder.",
        "length": 36
    },
    {
        "fact": "Cats lived with soldiers in trenches, where they killed mice during World War I.",
        "length": 80
    },
    {
        "fact": "A cat's hearing is much more sensitive than humans and dogs.",
        "length": 60
    },
    {
        "fact": "Many cats cannot properly digest cow's milk. Milk and milk products give them diarrhea.",
        "length": 87
    },
    {
        "fact": "The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens.",
        "length": 136
    },
    {
        "fact": "A queen (female cat) can begin mating when she is between 5 and 9 months old.",
        "length": 77
    },
    {
        "fact": "Cats bury their feces to cover their trails from predators.",
        "length": 59
    },
    {
        "fact": "Researchers believe the word “tabby” comes from Attabiyah, a neighborhood in Baghdad, Iraq. Tabbies got their name because their striped coats resembled the famous wavy patterns in the silk produced in this city.",
        "length": 212
    },
    {
        "fact": "Cat bites are more likely to become infected than dog bites.",
        "length": 60
    },
    {
        "fact": "The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!",
        "length": 165
    },
    {
        "fact": "Cats make about 100 different sounds. Dogs make only about 10.",
        "length": 62
    },
    {
        "fact": "A cat can sprint at about thirty-one miles per hour.",
        "length": 52
    },
    {
        "fact": "A group of cats is called a “clowder.”",
        "length": 38
    },
    {
        "fact": "It is estimated that cats can make over 60 different sounds.",
        "length": 60
    },
    {
        "fact": "All cats have claws, and all except the cheetah sheath them when at rest.",
        "length": 73
    },
    {
        "fact": "Cats are the world's most popular pets, outnumbering dogs by as many as three to one",
        "length": 84
    },
    {
        "fact": "The world’s rarest coffee, Kopi Luwak, comes from Indonesia where a wildcat known as the luwak lives. The cat eats coffee berries and the coffee beans inside pass through the stomach. The beans are harvested from the cat’s dung heaps and then cleaned and roasted. Kopi Luwak sells for about $500 for a 450 g (1 lb) bag.",
        "length": 319
    },
    {
        "fact": "The Maine Coon cat is America's only natural breed of domestic feline. It is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
        "length": 143
    },
    {
        "fact": "The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km).",
        "length": 217
    },
    {
        "fact": "The richest cat is Blackie who was left £15 million by his owner, Ben Rea.",
        "length": 74
    },
    {
        "fact": "Cats have 32 muscles that control the outer ear (humans have only 6). A cat can independently rotate its ears 180 degrees.",
        "length": 122
    },
    {
        "fact": "The oldest cat on record was Crème Puff from Austin, Texas, who lived from 1967 to August 6, 2005, three days after her 38th birthday. A cat typically can live up to 20 years, which is equivalent to about 96 human years.",
        "length": 220
    },
    {
        "fact": "Cats eat grass to aid their digestion and to help them get rid of any fur in their stomachs.",
        "length": 92
    },
    {
        "fact": "70% of your cat's life is spent asleep.",
        "length": 39
    },
    {
        "fact": "A cat's appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet.",
        "length": 132
    },
    {
        "fact": "The cat appears to be the only domestic companion animal not mentioned in the Bible.",
        "length": 84
    },
    {
        "fact": "Two members of the cat family are distinct from all others: the clouded leopard and the cheetah. The clouded leopard does not roar like other big cats, nor does it groom or rest like small cats. The cheetah is unique because it is a running cat; all others are leaping cats. They are leaping cats because they slowly stalk their prey and then leap on it.",
        "length": 354
    },
    {
        "fact": "People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.",
        "length": 165
    },
    {
        "fact": "Cats control the outer ear using 32 muscles; humans use 6",
        "length": 57
    },
    {
        "fact": "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
        "length": 278
    },
    {
        "fact": "A cat has two vocal chords, and can make over 100 sounds.",
        "length": 57
    },
    {
        "fact": "Cats are extremely sensitive to vibrations. Cats are said to detect earthquake tremors 10 or 15 minutes before humans can.",
        "length": 122
    },
    {
        "fact": "Florence Nightingale owned more than 60 cats in her lifetime.",
        "length": 61
    },
    {
        "fact": "Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC.",
        "length": 105
    },
    {
        "fact": "The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 k) and was 6.1 inches (15.5 cm) high.",
        "length": 120
    },
    {
        "fact": "A cat's field of vision is about 200 degrees.",
        "length": 45
    },
    {
        "fact": "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
        "length": 134
    },
    {
        "fact": "Not every cat gets \\high\\\" from catnip. Whether or not a cat responds to it depends upon a recessive gene: no gene\"",
        "length": 115
    },
    {
        "fact": "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet.",
        "length": 239
    },
    {
        "fact": "A cat’s nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
        "length": 87
    },
    {
        "fact": "A cat has more bones than a human; humans have 206, and the cat - 230.",
        "length": 70
    },
    {
        "fact": "Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by “crossing” its eyes.",
        "length": 275
    },
    {
        "fact": "The first commercially cloned pet was a cat named \"Little Nicky.\" He cost his owner $50,000, making him one of the most expensive cats ever.",
        "length": 140
    },
    {
        "fact": "The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.",
        "length": 101
    },
    {
        "fact": "Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins. Though milk is not toxic, it can cause an upset stomach and gas. Tylenol and aspirin are extremely toxic to cats, as are many common houseplants. Feeding cats dog food or canned tuna that’s for human consumption can cause malnutrition.",
        "length": 360
    },
    {
        "fact": "Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs!",
        "length": 98
    },
    {
        "fact": "The average lifespan of an outdoor-only (feral and non-feral) is about 3 years; an indoor-only cat can live 16 years and longer. Some cats have been documented to have a longevity of 34 years.",
        "length": 192
    },
    {
        "fact": "Cats purr at the same frequency as an idling diesel engine, about 26 cycles per second.",
        "length": 87
    },
    {
        "fact": "A form of AIDS exists in cats.",
        "length": 30
    },
    {
        "fact": "Cats must have fat in their diet because they can't produce it on their own.",
        "length": 76
    },
    {
        "fact": "The name \"jaguar\" comes from a Native American word meaning \"he who kills with one leap\".",
        "length": 89
    },
    {
        "fact": "Cats and kittens should be acquired in pairs whenever possible as cat families interact best in pairs.",
        "length": 102
    },
    {
        "fact": "In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won’t darken and they will stay a creamy white.",
        "length": 315
    },
    {
        "fact": "Cats have 300 million neurons; dogs have about 160 million",
        "length": 58
    },
    {
        "fact": "Cats only sweat through their paws and nowhere else on their body",
        "length": 65
    },
    {
        "fact": "The first true cats came into existence about 12 million years ago and were the Proailurus.",
        "length": 91
    },
    {
        "fact": "The female cat reaches sexual maturity within 6 to 10 months; most veterinarians suggest spaying the female at 5 months, before her first heat period. The male cat usually reaches sexual maturity between 9 and 12 months.",
        "length": 220
    },
    {
        "fact": "Female felines are \\superfecund",
        "length": 31
    },
    {
        "fact": "Cats sleep 16 to 18 hours per day. When cats are asleep, they are still alert to incoming stimuli. If you poke the tail of a sleeping cat, it will respond accordingly.",
        "length": 167
    },
    {
        "fact": "Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby. Legend says that tabby cats have an “M” for Mohammed on top of their heads because Mohammad would often rest his hand on the cat’s head.",
        "length": 210
    },
    {
        "fact": "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.",
        "length": 95
    },
    {
        "fact": "A female cat can be referred to as a molly or a queen, and a male cat is often labeled as a tom.",
        "length": 96
    },
    {
        "fact": "Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs.",
        "length": 96
    },
    {
        "fact": "A healthy cat has a temperature between 38 and 39 degrees Celcius.",
        "length": 66
    },
    {
        "fact": "The first cartoon cat was Felix the Cat in 1919. In 1940, Tom and Jerry starred in the first theatrical cartoon “Puss Gets the Boot.” In 1981 Andrew Lloyd Weber created the musical Cats, based on T.S. Eliot’s Old Possum’s Book of Practical Cats.",
        "length": 245
    },
    {
        "fact": "In 1987, cats overtook dogs as the number one pet in America (about 50 million cats resided in 24 million homes in 1986). About 37% of American homes today have at least one cat.",
        "length": 178
    },
    {
        "fact": "A cat's smell is their strongest sense, and they rely on this leading sense to identify people and objects; a feline's sense of smell is 14x better than a human's.",
        "length": 163
    },
    {
        "fact": "A cat usually has about 12 whiskers on each side of its face.",
        "length": 61
    },
    {
        "fact": "The earliest ancestor of the modern cat lived about 30 million years ago. Scientists called it the Proailurus, which means “first cat” in Greek. The group of animals that pet cats belong to emerged around 12 million years ago.",
        "length": 226
    },
    {
        "fact": "Jaguars are the only big cats that don't roar.",
        "length": 46
    },
    {
        "fact": "Cats, just like people, are subject to asthma. Dust, smoke, and other forms of air pullution in your cat's environment can be troublesome sources of irritation.",
        "length": 160
    },
    {
        "fact": "Unlike other cats, lions have a tuft of hair at the end of their tails.",
        "length": 71
    },
    {
        "fact": "The first formal cat show was held in England in 1871; in America, in 1895.",
        "length": 75
    },
    {
        "fact": "Spanish-Jewish folklore recounts that Adam’s first wife, Lilith, became a black vampire cat, sucking the blood from sleeping babies. This may be the root of the superstition that a cat will smother a sleeping baby or suck out the child’s breath.",
        "length": 245
    },
    {
        "fact": "Cats see six times better in the dark and at night than humans.",
        "length": 63
    },
    {
        "fact": "Smuggling a cat out of ancient Egypt was punishable by death. Phoenician traders eventually succeeded in smuggling felines, which they sold to rich people in Athens and other important cities.",
        "length": 192
    },
    {
        "fact": "When a cats rubs up against you, the cat is marking you with it's scent claiming ownership.",
        "length": 91
    },
    {
        "fact": "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
        "length": 97
    },
    {
        "fact": "Isaac Newton invented the cat flap. Newton was experimenting in a pitch-black room. Spithead, one of his cats, kept opening the door and wrecking his experiment. The cat flap kept both Newton and Spithead happy.",
        "length": 211
    },
    {
        "fact": "Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding.",
        "length": 120
    },
    {
        "fact": "Milk can give some cats diarrhea.",
        "length": 33
    },
    {
        "fact": "Cats step with both left legs, then both right legs when they walk or run.",
        "length": 74
    },
    {
        "fact": "In multi-cat households, cats of the opposite sex usually get along better.",
        "length": 75
    },
    {
        "fact": "According to a Gallup poll, most American pet owners obtain their cats by adopting strays.",
        "length": 90
    },
    {
        "fact": "A cat sees about 6 times better than a human at night, and needs 1/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light.",
        "length": 172
    },
    {
        "fact": "A cat will tremble or shiver when it is extreme pain.",
        "length": 53
    },
    {
        "fact": "In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mourning.",
        "length": 110
    },
    {
        "fact": "The average litter of kittens is between 2 - 6 kittens.",
        "length": 55
    },
    {
        "fact": "After humans, mountain lions have the largest range of any mammal in the Western Hemisphere.",
        "length": 92
    },
    {
        "fact": "The heaviest cat on record is Himmy, a Tabby from Queensland, Australia. He weighed nearly 47 pounds (21 kg). He died at the age of 10.",
        "length": 135
    },
    {
        "fact": "There are approximately 100 breeds of cat.",
        "length": 42
    },
    {
        "fact": "Cats have 32 muscles that control the outer ear (compared to human's 6 muscles each). A cat can rotate its ears independently 180 degrees, and can turn in the direction of sound 10 times faster than those of the best watchdog.",
        "length": 226
    },
    {
        "fact": "Cats that live together sometimes rub each others heads to show that they have no intention of fighting. Young cats do this more often, especially when they are excited.",
        "length": 169
    },
    {
        "fact": "A cat almost never meows at another cat, mostly just humans. Cats typically will spit, purr, and hiss at other cats.",
        "length": 116
    },
    {
        "fact": "Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
        "length": 103
    },
    {
        "fact": "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. I n the cat family, only cheetahs cannot retract their claws.",
        "length": 163
    }
];

catFacts.innerText = getRandomFacts();
reloadFacts.addEventListener('click',()=>{
    catFacts.innerText = getRandomFacts();
});

function getRandomFacts(){
    const index = Math.floor(Math.random() * 100);
    return catFactsArr[index].fact;
};