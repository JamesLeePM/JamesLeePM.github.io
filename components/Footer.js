import React, { useState, useEffect } from "react";

const quotes = [
  { text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.", author: "Buddha" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.", author: "Buddha" },
  { text: "To a mind that is still, the entire universe surrenders.", author: "Chuang Tzu" },
  { text: "Just when the caterpillar thought the world was over, it became a butterfly.", author: "Chuang Tzu" },
  { text: "Wherever you go, go with all your heart.", author: "Confucius" },
  { text: "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.", author: "Confucius" },
  { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.", author: "Lao Tzu" },
  { text: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.", author: "Confucius" },
  { text: "Look within! The secret is inside you.", author: "Hui-Neng" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
  { text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.", author: "Rumi" },
  { text: "Stop acting so small. You are the universe in ecstatic motion.", author: "Rumi" },
  { text: "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.", author: "Rumi" },
  { text: "Walk as if you are kissing the Earth with your feet.", author: "Thich Nhat Hanh" },
  { text: "To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself.", author: "Thich Nhat Hanh" },
  { text: "Letting go gives us freedom, and freedom is the only condition for happiness. If, in our heart, we still cling to anything - anger, anxiety, or possessions - we cannot be free.", author: "Thich Nhat Hanh" },
  { text: "Flow with whatever may happen, and let your mind be free: Stay centered by accepting whatever you are doing. This is the ultimate.", author: "Zhuangzi" },
  { text: "The wise man knows that it is better to sit on the banks of a remote mountain stream than to be emperor of the whole world.", author: "Zhuangzi" },
  { text: "I begin to speak only when I'm certain what I'll say isn't better left unsaid.", author: "Cato" },
  { text: "How long are you going to wait before you demand the best for yourself?", author: "Epictetus" },
  { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
  { text: "Don't seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.", author: "Epictetus" },
  { text: "That's why the philosophers warn us not to be satisfied with mere learning, but to add practice and then training. For as time passes we forget what we learned and end up doing the opposite, and hold opinions the opposite of what we should.", author: "Epictetus" },
  { text: "When someone is properly grounded in life, they shouldn't have to look outside themselves for approval.", author: "Epictetus" },
  { text: "Think of the life you have lived until now as over and, as a dead man, see what's left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?", author: "Marcus Aurelius" },
  { text: "If it is not right, do not do it, if it is not true, do not say it.", author: "Marcus Aurelius" },
  { text: "In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.", author: "Marcus Aurelius" },
  { text: "No person has the power to have everything they want, but it is in their power not to want what they don't have, and to cheerfully put to good use what they do have.", author: "Seneca" },
  { text: "If a man knows not which port he sails, no wind is favourable.", author: "Seneca" },
  { text: "People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.", author: "Seneca" },
  { text: "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.", author: "Viktor Frankl" },
  { text: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl" },
  { text: "Man conquers the world by conquering himself.", author: "Zeno of Citium" },
  { text: "The source from which existing things derive their existence is also that to which they return at their destruction.", author: "Anaximander" },
  { text: "In all things of nature there is something of the marvelous.", author: "Aristotle" },
  { text: "The physician heals, Nature makes well.", author: "Aristotle" },
  { text: "If one way be better than another, that you may be sure is Nature's way.", author: "Aristotle" },
  { text: "The love for all living creatures is the most noble attribute of man.", author: "Charles Darwin" },
  { text: "It is not the strongest of the species that survives, not the most intelligent that survives. It is the one that is the most adaptable to change.", author: "Charles Darwin" },
  { text: "The sun, with all those planets revolving around it and dependent on it, can still ripen a bunch of grapes as if it had nothing else in the universe to do.", author: "Galileo Galilei" },
  { text: "I've loved the stars too fondly to be fearful of the night.", author: "Galileo Galilei" },
  { text: "In wilderness is the preservation of the world.", author: "Henry David Thoreau" },
  { text: "It's not what you look at that matters, it's what you see.", author: "Henry David Thoreau" },
  { text: "It is not enough to be busy. So are the ants. The question is: What are we busy about?", author: "Henry David Thoreau" },
  { text: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.", author: "Heraclitus" },
  { text: "The meaning of the river flowing is not that all things are changing so that we cannot encounter them twice but that some things stay the same only by changing.", author: "Heraclitus" },
  { text: "The only thing that is constant is change.", author: "Heraclitus" },
  { text: "The soul is dyed the color of its thoughts. Think only on those things that are in line with your principles and can bear the light of day. The content of your character is your choice. Day by day, what you do is who you become. Your integrity is your destiny - it is the light that guides your way.", author: "Heraclitus" },
  { text: "In every walk with nature one receives far more than he seeks.", author: "John Muir" },
  { text: "When one tugs at a single thing in nature, he finds it attached to the rest of the world.", author: "John Muir" },
  { text: "There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.", author: "Linda Hogan" },
  { text: "There is pleasure in the pathless woods, there is rapture in the lonely shore, there is society where none intrudes, by the deep sea, and music in its roar.", author: "Lord Byron" },
  { text: "My religion is nature. That's what arouses those feelings of wonder and mysticism and gratitude in me.", author: "Oliver Sacks" },
  { text: "Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts. There is something infinitely healing in the repeated refrains of nature—the assurance that dawn comes after night, and spring after winter.", author: "Rachel Carson" },
  { text: "Adopt the pace of nature: her secret is patience.", author: "Ralph Waldo Emerson" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
  { text: "The earth laughs in flowers.", author: "Ralph Waldo Emerson" },
  { text: "The world is wonderful because it is a creation of God.", author: "Thales of Miletus" },
  { text: "It is difficult to know yourself; it is easy to give advice to others.", author: "Thales of Miletus" },
  { text: "We do not see things as they are. We see them as we are.", author: "Anaïs Nin" },
  { text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", author: "Friedrich Nietzsche" },
  { text: "Art is the daughter of freedom.", author: "Friedrich Schiller" },
  { text: "Nothing great in the world has ever been accomplished without passion.", author: "Georg Wilhelm Friedrich Hegel" },
  { text: "Trust your heart rather than your head.", author: "Jean-Jacques Rousseau" },
  { text: "Why should we build our happiness on the opinions of others, when we can find it in our own hearts?", author: "Jean-Jacques Rousseau" },
  { text: "A thing of beauty is a joy forever.", author: "John Keats" },
  { text: "Beware; for I am fearless, and therefore powerful.", author: "Mary Shelley" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart.", author: "Percy Bysshe Shelley" },
  { text: "The happiness of life is made up of minute fractions—the little, soon-forgotten charities of a kiss or a smile, a kind look, a heartfelt compliment, and the countless infinitesimals of pleasurable and genial feeling.", author: "Samuel Taylor Coleridge" },
  { text: "Imagination is the living power and prime agent of all human perception.", author: "Samuel Taylor Coleridge" },
  { text: "The spiritual is the parent of the practical.", author: "Thomas Carlyle" },
  { text: "To see a world in a grain of sand and heaven in a wild flower, hold infinity in the palm of your hand and eternity in an hour.", author: "William Blake" },
  { text: "The best portion of a good man's life: his little, nameless unremembered acts of kindness and love.", author: "William Wordsworth" },
  { text: "Fill your paper with the breathings of your heart.", author: "William Wordsworth" },
  { text: "Rest and be thankful.", author: "William Wordsworth" }
];

function Footer() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    try {
      const cachedQuote = localStorage.getItem("quote");
      if (cachedQuote) {
        setQuote(JSON.parse(cachedQuote));
      } else {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const newQuote = quotes[randomIndex];
        setQuote(newQuote);
        localStorage.setItem("quote", JSON.stringify(newQuote));
      }
    } catch (error) {
      console.error("Error retrieving or setting quote from localStorage:", error);
    }
  }, []);

  return (
    <footer id="contact">
      <div className="footer-content row">
        <div className="quote">
          <p>"{quote.text}"</p>
          <p>- {quote.author}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
