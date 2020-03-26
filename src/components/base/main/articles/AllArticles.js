export const article_1 = {
    id:1,
    name:"Beauty as a Vehicle for Expression & Creativity",
    shortDesc:"After kicking off our Women’s History Month series with UMA Founder Shrankhla Holecek, we’re excited to share our candid conversation with Jodie Perks, founder of our favorite glitter brand.......",
    description:desc1()
}
export const  article_2 = {
    id:2,
    name:"Why do women wear makeup?",
    shortDesc:"An estimated 44 percent of American women do not like to leave their homes without makeup on. Research shows there are two primary reasons why women wear makeup.......",
    description:desc2()
}
export const  article_3 = {
    id:3,
    name:"To Wear Makeup or Not to Wear Makeup?",
    shortDesc:"The question is surprisingly fraught, but the answer is simple.......",
    description:desc3()
}
export const articles = [article_1,article_2,article_3]
export const articles2 = new Map();
articles2.set(1,article_1);
articles2.set(2,article_2);
articles2.set(3,article_3);

export default function  getArticle(i) {
    if(i===1)
        return article_1;
    if(i===2)
        return article_2;
    if(i===3)
        return article_3;
}

function desc1 (){
    return ["After kicking off our Women’s History Month series with UMA Founder Shrankhla Holecek, we’re excited to share our candid conversation with Jodie Perks, founder of our favorite glitter brand, Lit Cosmetics. She’s the perfect person to talk about how makeup provides an incredible opportunity to express ourselves and share our creativity with the world. Here’s her take on expression, the state of the beauty industry, and more.\n" +
    "Why do you think consumers are finally more expressive in their makeup looks?\n" +
    "It’s a combination of access as well as acceptance. We now have greater access to inspiration, like YouTube videos and IG looks, as well as in brands and trends. And, there’s less judgement from others.\n"
    ,
    "I truly think the “Drag Queen” look has seeped into our everyday looks (think: glitter, over pronounced brows, lips and cheek bones). Not to take this lightly—this type of makeup application, including blending, creasing, contouring and shadowing, does take “know-how” and some knowledge and talent.\n" +
    "\n" +
    "Personal style is a wonderful thing; otherwise, what a boring place this would be.\n"+
    "Are consumers ready to stand out rather than blend in and follow the status quo?\n",
    "Well, once again maybe the Queens helped in this movement as well—I angle and sharpen up my brows with a Queen look in mind.\n" +
    "I feel that personal preference is more accepted now, especially in bigger cities. Population and saturation plays a role as well—it’s harder than ever to be different or get noticed. GO BIG OR GO HOME, GO BLING OR GO HOME.\n",
    "When I was growing up, glitter makeup wasn’t even a thing, and having unique, colorful hair like blue, pink or purple, was a bold move. Now, it’s the norm. Even grannies are getting in on the action, haha!\n" ,
    "How do you best express yourself?\n" +
    "I have no filter on the things I say. In my opinion, the truth needs to be told even if it hurts at times!\n" +
    "\n" +
    "Of course, I do wear glitter. What you drive and design is always an expression—fashion, sports (snowboarding, skiing, tennis, golf, horse riding, running, yoga), etc.",
    "How do you get out of a creative rut?\n" +
    "I have to clear up my to-do list to clear my mind. I won’t lie, I’m a big-time procrastinator and sometimes leave things to the last minute, so I’m forced to get them done.\n" +
    "\n" +
    "Also, taking a girls’ vacation (wine and good food mandatory) is always good for the soul and helps clear my mind.\n" +
    "\n" +
    "Why glitter?\n" +
    "I truly feel that glitter is an extension of personality, and with that in mind, it is part of my personality. People that like glitter are usually crazy about sparkle and want to smother shine all over—the more, the better. Sometimes, it makes me giggle when I see our customers' reorders and watch their glitter collections grow—the glitter addiction is real!\n" ,
    "Have you always been a fan?\n" +
    "Believe it or not, I’m actually a beauty school dropout, so owning a cosmetics company is far from what I thought were my future plans. I didn’t really get into glitter until my late 20’s while bartending. At the time, I couldn’t find a good product, so I took things into my own hands. A couple of years later, Lit was born.\n" +
    "\n" +
    "How would you describe your personal beauty style?\n" +
    "Well I’m a child of the 80’s and 90’s, so anything disco is good with me. I also love Western (a mix of classic Ralph Lauren and Sylverster Stallone in \"Rhinestone Cowboy”), classic Marilyn Monroe beauty, rock-inspired looks and casual comfort. I’m a mixed salad.\n" +
    "\n" +
    "I really love all fashion styles and dressing up in different outfits for different events—it’s always fun. When going out at night, I think of every possible outfit in my mind throughout the day, then execute the winning combo at the end of the day.\n" +
    "\n" +
    "What are your go-to products/looks?\n" +
    "Well, other than wearing my glitter products, I love Sugarpill lipsticks and glosses and Benefit Cosmetics Bad Gal mascara and brow liners.\n" +
    "\n" +
    "\n" +
    "\n" +
    "Who has been the most significant female inspiration in your life?\n" +
    "If you’re lucky, your mom would be one of your biggest inspirations. In my case, she has been. She grew up in a different time with different struggles but remained fearless, funny and hardworking with the biggest heart.\n" +
    "\n" +
    "Also, anyone that can go on stage and sing or speak with heart and truth, like Oprah, Ellen, Cher and Dolly Parton. Everybody who has fame has been told “no” a million times. So, people “making it” intrigues and fascinates me—the fight is real. I myself stand on a mountain of “nos” for just a hint of acceptance.\n" +
    "\n" +
    "Biggest beauty prediction for 2020?\n" +
    "Well, the 70’s & 80’s are making a major comeback this year so more glitter, baby!\n" +
    "\n" +
    "I also predict that smaller companies are going to receive greater support for their realness, authenticity and well-thought-out products. Over-buying will be replaced by smart buying. Ultimately, people want to support good people.\n" +
    "\n" +
    "Any advice to other female founders and entrepreneurs that are just starting out?\n" +
    "If someone would have told me how hard it was to grow an indie brand when I first started my company, I think I still would have done it—I’m a glutton for punishment! To be an entrepreneur, you have to have tough skin and push ahead anyway you can, fighting and screaming for air—not in a mean or money hungry way, but in a way with spirit and good intention.\n" +
    "\n" +
    "To learn about your company, you have to go through the good times and bad times. “Strive to excel” was my sports team motto in high school, and it really does come to light in my life. The bad times can be tough, but making it out of them provides character and perseverance. The owners of failing companies that make it through bad times grow stronger and receive the reward of knowledge, heart, and a new passion for what they do. It makes your path more clear and streamlined, and it’s worth fighting for.\n" +
    "\n" +
    "And remember, friends and family will always support you, because it’"]
}
function desc2(){
    return "Why do women wear makeup?\n" +
        "\n" +
        "An estimated 44 percent of American women do not like to leave their homes without makeup on. Research shows there are two primary reasons why women wear makeup:\n" +
        "\n" +
        "Camouflage – Women who are anxious and insecure tend to use makeup to appear less noticeable.\n" +
        "Seduction – Women who want to be noticeably more attractive tend to use makeup to be more confident, sociable and assertive.\n" +
        "Those 44 percent of women believe that if they show their natural, untouched face, they won’t be able to accomplish either of those things, and they will be treated differently. It turns out there is some science to back up the fears driving them to wear makeup every day.\n" +
        "\n" +
        "Women have it drilled into them from a young age that to be successful in everything, from dating to job interviews to forming friendships with other popular girls, they need to be pretty, and the basis for that isn’t entirely cultural. It may not be fair, but according to the Association for Psychological Science, attractive people are treated more favorably in every area of life, from dating to jobs to criminal trials.\n" +
        "\n" +
        "How Can Women Use Makeup to Be More Attractive?\n" +
        "Before we continue, I want to note that this article doesn’t take into account the beautiful diversity of who uses makeup and why. The current research on this subject focuses on straight men and women and is based on the assumption that only women wear it. This is not to say that these tips do not apply if you don’t fit within this specific group, but the currently available research for multi-groups is limited.\n" +
        "\n" +
        "Bonus Read: Woman’s Photoshop Experiment Shows There Are Many Ways to Be Beautiful \n" +
        "\n" +
        "What Biology Says About Attractive Female Faces\n" +
        "Researchers have discovered two universal characteristics that contribute to the attractiveness of a woman’s face.\n" +
        "\n" +
        "\n" +
        "#1: The amount of color contrast around the eyes and lips\n" +
        "Women naturally tend to have darker lips and skin around the eyes. So, our brains subconsciously note that as a sign of femininity. The more color contrast between a woman’s eyes and lips and her skin tone, the more feminine, and thus evolutionary attractive, she is seen. Lipstick and eye shadow are makeup staples because they enhance those features.\n" +
        "\n" +
        "Note: The effect of enhanced outer eye and lip color is greatest on straight men, since they biologically are wired to be drawn to feminine-looking, fertile women.\n" +
        "\n" +
        "#2: How symmetrical and even her face is\n" +
        "The Association for Psychological Science explains that we also like symmetrical faces, even when we can’t perceive the symmetry. You may not realize it, but the majority of faces are slightly asymmetrical–either one side will be wider than another, eye shapes will have minor differences, one cheekbone may be a bit less pronounced, etc. And the fewer of these variations a face has, the more attractive it is perceived. Makeup evens skin tone and contouring, eyeliner and lipliner also can make those features appear more symmetrical.\n" +
        "\n" +
        "Makeup is an effective tool to appear more biologically attractive. The question is how do you make the most of it?\n" +
        "\n" +
        "Research Shows This is the Most Important Makeup Tip\n" +
        "If makeup isn’t your thing at all, or there are some mornings when you wake up and don’t feel like you have the time or energy to put your face on, follow this one tip if you are going somewhere where other people’s impression of you matters:\n" +
        "\n" +
        "Wear concealer/foundation\n" +
        "Research shows that foundation is the cosmetic that has the biggest impact on how women are perceived. This is especially important at work because research shows that women who wear makeup have higher earnings and promotion potential. Skin tone discolorations, tired eye bags and blemishes can make you look tired or sickly.\n" +
        "\n" +
        "If you have acne scars or other blemishes, you probably already realize that foundation masks may, but not fully, cover them. This means that even with foundation your skin tone is not completely even and you won’t yield the full benefits of wearing makeup. To avoid this, prior to applying foundation, put on enough concealer to make your blemishes disappear.\n" +
        "\n" +
        "Similarly, oily skin also can lessen the evenness of your skin. Remove the distracting shine by applying powder on top of your foundation. Keep a compact in your bag so you can reapply as needed throughout the day.\n" +
        "\n" +
        "Use These Science-Backed Makeup Enhancements\n" +
        "If you have the time, energy and inclination to do so, you can further capitalize on the power of makeup with these four enhancements:\n" +
        "\n" +
        "Blush: Studies show that having a pink tint to your cheeks makes you look younger and, to the subconscious mind, slightly aroused, because for many, it resembles their natural color in sensual states.\n" +
        "Mascara, eye shadow and eyeliner: Cosmetic surgeon Adam J. Scheiner, M.D. says that because women naturally have more color variation around their eyes, eye makeup enhances that and makes them look more attractive. You also can use these cosmetics to increase the perceived size of your eyes so you look younger.  \n" +
        "Lipstick: Again, this increases the color contrast of the mouth. It also probably is no surprise that women who wear red lipstick are perceived as more attractive to straight men than those who opt for a more muted color of lipstick or none at all.\n" +
        "Contour: As we previously discussed, our brains love symmetrical faces. Contouring your face can make it more symmetrical in addition to sharpening your angles.\n" +
        "For tips on how to do these types of makeup, seek the wonderful advice of beauty bloggers who can walk you through every type of makeup look step-by-step.\n" +
        "\n" +
        "\n" +
        "How the Social Psychology of Makeup Affects Your Relationships\n" +
        "Makeup does more than alter a woman’s attractiveness, it also plays a role in her ability to form new relationships. While straight men look at a woman’s makeup or lack thereof to help determine her attractiveness, straight women use makeup to help judge other women’s personalities.  \n" +
        "\n" +
        "Research has discovered three key findings about how straight women perceive each other’s makeup:\n" +
        "\n" +
        "Women rate other women who wear makeup as more dominant. This perception that women who wear makeup are more powerful plays a role in why makeup is important to help women have successful careers.\n" +
        "Women are more jealous of other women wearing makeup and perceive them as more promiscuous. This is particularly the case when women wear bold, sexy makeup, such as eye shadow and dark/bright lipstick.\n" +
        "Women bond faster with other women who wear makeup that is similar to what they themselves wear. We’re naturally drawn to people who are like us. So, it’s no surprise that makeup is one of the characteristics women look for in determining who to form friendships with. If you think about it, makeup says a lot about women, such as how much they value beauty, how much attention they desire, etc.\n" +
        "Men, on the other hand, tend to have varied opinions of women based on how much makeup she wears and how attractive that makes her appear. One woman discovered this when she did a social experiment to find out how men react differently toward her depending on her makeup levels. To test this, she created three Tinder profiles with three levels of makeup, ranging from natural to glamorous."
}
function desc3(){
    return "The question is surprisingly fraught, but the answer is simple.\n" +
        "\n" +
        "Recently, Buzzfeed compiled examples of men on Reddit and Twitter who had shared photos of women they found beautiful, seemingly amazed by their own enlightened taste: The women, celebrities like Rihanna, Jennifer Lawrence and Emma Stone, were, they believed, not wearing makeup. “Kylie Jenner looks so much better without makeup to me idk why. Im prob just weird,” one man bravely tweeted.\n" +
        "\n" +
        "In fact, these women were wearing makeup; in one particularly egregious instance, a photo had been taken from a magazine editorial featuring a natural makeup look, with products listed. The men had confused makeup that does not announce itself with makeup that does not exist. And who can blame them? “Natural beauty” has become less about lack of effort than about successfully hiding effort altogether. After a punishing night, when I use a fine-pointed brush to apply Clé de Peau Beauté concealer to my red-rimmed lower lashline, I am trying to fake wakefulness; I cannot fault a man who would, taking my illusion at face value, rush to celebrate his own wokefulness.\n" +
        "\n" +
        "Nine Famous Women. No Makeup. Selfies.\n" +
        "8 PhotosView Slide Show›\n" +
        "\n" +
        "In light of this, it’s not surprising that it became news earlier this year when the singer Alicia Keys declared she would abstain from makeup, declining to wear it even at public events or on television. In an essay about her decision for the online magazine Lenny, she wrote of realizing that she had written “a lot of songs about masks filled with metaphors about hiding.” After years of feeling like she needed to wear makeup to perform, both as a singer and as a woman in the world, it struck her that this preparing for the public eye was only magnifying the effect of its scrutiny. The #nomakeup movement soon took off, with other celebrities and women’s magazines jumping on the bandwagon. (“Mila Without Makeup” boasted Glamour’s August cover.)\n" +
        "\n" +
        "ADVERTISEMENT\n" +
        "\n" +
        "Continue reading the main story\n" +
        "\n" +
        "At first glance, Alicia Keys, Mila Kunis or Gwyneth Paltrow — women whose visages we’ve come to know intimately in their makeup-wearing form — look a bit naked and exposed without it, as though a veil has been lifted, revealing something private and raw. But to examine them more closely is simply to get reacquainted with the features of the human face: its shapes and curvatures; gradations of light and color; freckles; eyelashes. It would be easy to deem a makeup-less Alicia Keys “honest,” or “real,” or even radical, but that would be missing the point: More than anything, she looks exceptionally relaxed and open, completely at ease in her own skin. She is radiant with serenity, like a person on vacation who really knows how to let go. The message she broadcasts is that comfort is the root of confidence, and not the other way around. This is true whether a person is wearing makeup or not.\n" +
        "\n" +
        "Of course, Keys’s kind of comfort requires its own sort of discipline. On the beauty website Into the Gloss, her makeup artist described the many rituals and products that go into her new look: acupuncture, exercise, a healthy diet. Facials, lip treatments, sprays and oils. I began to wear a full face of makeup in middle school, as a gesture of defeat, attempting to obscure hormonal breakouts, asymmetrical features, eyebrows that were too bushy and lips that were too big. As I got older, I spent less time searching for pigmented powders to cover my face, and more time searching for concoctions to strengthen or improve it. I didn’t so much want to look better as I wanted to be better. I bought serums with the consistency of liquefied amber, thick white creams expelled from pump bottles with such force that they seemed impatient to get to work, masks made from insect secretions. The irony, naturally, is that clean, clear skin is the ideal base for makeup."
}
