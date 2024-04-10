var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let quotes = [
    [
      `How can a three-pound mass of jelly that you can hold in your palm imagine angels, contemplate the meaning of infinity, and even question its own place in the cosmos? 
      Especially awe inspiring is the fact that any single brain, including yours, is made up of atoms that were forged in the hearts of countless, far-flung stars billions of years ago. 
      These particles drifted for eons and light-years until gravity and change brought them together here, now. 
      These atoms now form a conglomerate- your brain- that can not only ponder the very stars that gave it birth but can also think about its own ability to think and wonder about its own ability to wonder. 
      With the arrival of humans, it has been said, the universe has suddenly become conscious of itself. This, truly, it the greatest mystery of all.”
      ― V.S. Ramachandran, The Tell-Tale Brain: A Neuroscientist's Quest for What Makes Us Human`,
    ],
    [
      `Bessel van der Kolk
      “Beneath the surface of the protective parts of trauma survivors there exists an undamaged essence, a Self that is confident, curious, and calm, a Self that has been sheltered from destruction by the various protectors that have emerged in their efforts to ensure survival. 
      Once those protectors trust that it is safe to separate, the Self will spontaneously emerge, and the parts can be enlisted in the healing process”
      ― Bessel A. van der Kolk, The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma`,
    ],
    [
      `Santiago Ramón y Cajal
      “Any man could, if he were so inclined, be the sculptor of his own brain.”
      ― Santiago Ramon y Cajal, Advice for a Young Investigator`,
    ],
    [
      `Oliver Sacks
      “Music, uniquely among the arts, is both completely abstract and profoundly emotional. 
      It has no power to represent anything particular or external, but it has a unique power to express inner states or feelings. 
      Music can pierce the heart directly; it needs no mediation.”
      ― Oliver Sacks, Musicophilia: Tales of Music and the Brain`,
    ],
    [
      `David Eagleman
      “Imagine for a moment that we are nothing but the product of billions of years of molecules coming together and ratcheting up through natural selection, that we are composed only of highways of fluids and chemicals sliding along roadways within billions of dancing cells, that trillions of synaptic conversations hum in parallel, that this vast egglike fabric of micron-thin circuitry runs algorithms undreamt of in modern science, and that these neural programs give rise to our decision making, loves, desires, fears, and aspirations. 
      To me, that understanding would be a numinous experience, better than anything ever proposed in anyone's holy text.”
      ― David Eagleman, Incognito: The Secret Lives of the Brain`,
    ],
    [
      `Dan Brown
      “Oftentimes, those special brains, the ones that are capable of focusing more intently than others, do so at the expense of emotional maturity”
      ― Dan Brown, Inferno`,
    ],
    [
      `“Life is a useless passion, an exciting journey of a mammal in survival mode. 
      Each day is a miracle, a blessing unexplored and the more you immerse yourself in light, the less you will feel the darkness. 
      There is more to life than nothingness. And cynicism. And nihilism. And selfishness. And glorious isolation. Be selfish with yourself, but live your life through your immortal acts, acts that engrain your legacy onto humanity. 
      Transcend your fears and follow yourself into the void instead of letting yourself get eaten up by entropy and decay. 
      Freedom is being yourself without permission. Be soft and leave a lasting impression on everybody you meet”
      ― Mohadesa Najumi`,
    ],
    [
      `Oliver Sacks
      “There are, of course, inherent tendencies to repetition in music itself. 
      Our poetry, our ballads, our songs are full of repetition; nursery rhymes and the little chants and songs we use to teach young children have choruses and refrains. 
      We are attracted to repetition, even as adults; we want the stimulus and the reward again and again, and in music we get it. 
      Perhaps, therefore, we should not be surprised, should not complain if the balance sometimes shifts too far and our musical sensitivity becomes a vulnerability.”
      ― Oliver Sacks, Musicophilia: Tales of Music and the Brain`,
    ],
    [
      `Sam Harris
      “If our well-being depends upon the interaction between events in our brains and events in the world, and there are better and worse ways to secure it, then some cultures will tend to produce lives that are more worth living than others; some political persuasions will be more enlightened than others; and some world views will be mistaken in ways that cause needless human misery.”
      ― Sam Harris, The Moral Landscape: How Science Can Determine Human Values`,
    ],
    [
      `“Vulnerability is the least celebrated emotion in our society”
      ― Mohadesa Najumi`,
    ],
    [
      `Rodolfo R. Llinás
      “The neural processes underlying that which we call creativity have nothing to do with rationality. 
      That is to say, if we look at how the brain generates creativity, we will see that it is not a rational process at all; creativity is not born out of reasoning.”
      ― Rodolfo R. Llinás, I of the Vortex: From Neurons to Self`,
    ],
    [
      `Oliver Sacks
      “There is certainly a universal and unconscious propensity to impose a rhythm even when one hears a series of identical sounds at constant intervals... 
      We tend to hear the sound of a digital clock, for example, as "tick-tock, tick-tock" - even though it is actually "tick tick, tick tick.”
      ― Oliver W. Sacks, Musicophilia: Tales of Music and the Brain`,
    ],
    [
      `Michio Kaku
      “Recent brain scans have shed light on how the brain simulates the future. 
      These simulation are done mainly in the dorsolateral prefrontal cortex, the CEO of the brain, using memories of the past. 
      On one hand, simulations of the future may produce outcomes that are desirable and pleasurable, in which case the pleasure centers of the brain light up (in the nucleus accumbens and the hypothalamus). 
      On the other hand, these outcomes may also have a downside to them, so the orbitofrontal cortex kicks in to warn us of possible dancers. 
      There is a struggle, then, between different parts of the brain concerning the future, which may have desirable and undesirable outcomes. 
      Ultimately it is the dorsolateral prefrontal cortex that mediates between these and makes the final decisions. 
      (Some neurologists have pointed out that this struggle resembles, in a crude way, the dynamics between Freud's ego, id, and superego.)”
      ― Michio Kaku, The Future of the Mind: The Scientific Quest to Understand, Enhance, and Empower the Mind`,
    ],
    [
      `Oliver Sacks
      “Given her deafness, the auditory part of the brain, deprived of its usual input, had started to generate a spontaneous activity of its own, and this took the form of musical hallucinations, mostly musical memories from her earlier life. 
      The brain needed to stay incessantly active, and if it was not getting its usual stimulation..., it would create its own stimulation in the form of hallucinations.”
      ― Oliver Sacks, Musicophilia: Tales of Music and the Brain`,
    ],
    [
      `“Those who are nurtured best, survive best.”
      ― Louis Cozolino, The Neuroscience of Human Relationships: Attachment And the Developing Social Brain`,
    ],
    [
      `“Maybe the human brain is an object beyond the reach of metaphor, for the simple reason that it is the only object capable of creating metaphors to describe itself. 
      There really is nothing else like it. The human brain creates the human mind, and then the human mind tries to underhand the human brain, however long it takes and whatever the cost.”
      ― Luke Dittrich, Patient H.M.: A Story of Memory, Madness, and Family Secrets`,
    ],
    [
      `“Understanding the physiological and neurological features of spiritual experiences should not be interpreted as an attempt to discredit their reality or explain them away. 
      Rather, it demonstrates their physical existence as a fundamental, shared part of human nature. 
      Spiritual experiences cannot be considered irrational, since we have seen that, given their physiological basis, experiencers' descriptions of them are perfectly rational... 
      All human perceptions of material reality can ultimately be documented as chemical reactions in our neurobiology; all our sensations, thoughts, and memories are ultimately reducible to chemistry, yet we feel no need to deny the existence of the material world; it is not less real because our perceptions of it are biologically based... 
      It is not rational to assume that the spiritual reality of core experiences is any less real than the more scientifically documentable material reality.”
      ― Sabina Magliocco, Witching Culture: Folklore and Neo-Paganism in America`,
    ],
    [
      `Abhijit Naskar
      “It is not about whether you have free will, rather it is about whether you have enough experience to make the best possible wilful decision in the current moment of life.”
      ― Abhijit Naskar, What is Mind?`,
    ],
    [
      `Rick Hanson
      “Taking in the good is not about putting a happy shiny face on everything, nor is it about turning away from the hard things in life. 
      It's about nourishing well-being, contentment, and peace inside that are refuges you can always come from and return to.”
      ― Rick Hanson, Buddha's Brain: The Practical Neuroscience of Happiness, Love, and Wisdom`,
    ],
    [
      `Rick Hanson
      “[I]f you can be with the pleasant without chasing after it, with the unpleasant without resisting it, and with the neutral without ignoring it - [...] that is an incredible [...] freedom.”
      ― Rick Hanson, Buddha's Brain: The Practical Neuroscience of Happiness, Love, and Wisdom`,
    ],
    [
      `“Our metaphors for the operation of the brain are frequently drawn from the production line. 
      We think of the brain as a glorified sausage machine, taking in information from the senses, processing it and regurgitating it in a different form, as thoughts or actions. 
      The digital computer reinforces this idea because it is quite explicitly a machine that does to information what a sausage machine does to pork. 
      Indeed, the brain was the original inspiration and metaphor for the development of the digital computer, and early computers were often described as 'giant brains'. 
      Unfortunately, neuroscientists have sometimes turned this analogy on its head, and based their models of brain function on the workings of the digital computer (for example by assuming that memory is separate and distinct from processing, as it is in a computer). 
      This makes the whole metaphor dangerously self-reinforcing.”
      ― Steve Grand, Creation: Life and How to Make It`,
    ],
    [
      `Abhijit Naskar
      “Fairytales are healthy for the children. As they grow up, the magical thinking wears off, but the fairytale-induced creative brain circuits stay forever.”
      ― Abhijit Naskar`,
    ],
    [
      `Abhijit Naskar
      “It is okay to own a technology, what is not okay is to be owned by technology.”
      ― Abhijit Naskar, Mucize Insan: When The World is Family`,
    ],
    [
      `James Henry Breasted
      “Speechlessness, however, affirmed in the diagnosis, is carefully based on the facts of the examination, as we see by rendering the statements concerned, just as they stand in examination and diagnosis: 
      "If thou examinest a man having a wound in the temple, ...; if thou ask of him concerning his malady and he speak not to thee; ...; thou shouldst say concerning him, 'One having a wound in his temple, ... (and) he is speechless'.”
      ― James Henry Breasted, The Edwin Smith Surgical Papyrus, Vol 1: Hieroglyphic Transliteration, Translation and Commentary`,
    ],
    [
      `Abhijit Naskar
      “Some gender norms are healthy, some are unhealthy - you must wake up from the patriarchal sleep to recognize which is which.”
      ― Abhijit Naskar, See No Gender`,
    ],
    [
      `Abhijit Naskar
      “Call it order, call it chaos, it’s all in the brain.”
      ― Abhijit Naskar, Mission Reality`,
    ],
    [
      `Amit Ray
      “The scientific knowledge derived from genetics, epigenetics, and neuroscience, should be used to enhance the power of meditation and to eliminate the sufferings of humanity.”
      ― Amit Ray, Yoga The Science of Well-Being`,
    ],
    [
      `James Henry Breasted
      “The attention given to the side of the head which has received the injury, in connection with a specific reference to the side of the body nervously affected, is in itself evidence that in this case the ancient surgeon was already beginning observations on the localization of functions in the brain.”
      ― James Henry Breasted, The Edwin Smith Surgical Papyrus, Vol 1: Hieroglyphic Transliteration, Translation and Commentary`,
    ],
    [
      `Abhijit Naskar
      “In poetry I am sufi,
      In philosophy I am advaitin.
      In duty I am scientist,
      In existence I am human.”,
      ― Abhijit Naskar, Visvavatan: 100 Demilitarization Sonnets`,
    ],
    [
      `“The human brain, for all its sophistication, would be useless without its link to the outside world. Consider one experiment that illustrates this point. 
      Volunteers hallucinated when they were deprived of sensory input by being blindfolded and suspended and warm water in a sensory deprivation tank. 
      One saw charging pink and purple elephants. 
      Another heard a chorus, still others had taste hallucinations. 
      Our very sanity depends on a continuous flow of information from the outside.”
      ― Marieb Elaine N. Hoehn Katja `,
    ],
  ];

  selectedQuote = "";

  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  

  res.render("index", { quote:  quotes[randomNumber]});
});

module.exports = router;
