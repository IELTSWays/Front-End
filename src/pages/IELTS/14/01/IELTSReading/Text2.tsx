// mtu
import Typography from '@mui/material/Typography';
// mtu

const Paragraphs = [
  {
    alphabet: 'A',
    paragraph: 'The original idea for an urban bike-sharing scheme dates back to a summer’s day in Amsterdam in 1965. Provo, the organization that came up with the idea, was a group of Dutch activists who wanted to change society. They believed the scheme, which was known as the Witte Fietsenplan, was an answer to the perceived threats of air pollution and consumerism. In the centre of Amsterdam, they painted a small number of used bikes white. They also distributed leaflets describing the dangers of cars and inviting people to use the white bikes. The bikes were then left unlocked at various locations around the city, to be used by anyone in need of transport.'
  },
  {
    alphabet: 'B',
    paragraph: 'Luud Schimmelpennink, a Dutch industrial engineer who still lives and cycles in Amsterdam, was heavily involved in the original scheme. He recalls how the scheme succeeded in attracting a great deal of attention – particularly when it came to publicising Provo’s aims – but struggled to get off the ground. The police were opposed to Provo’s initiatives and almost as soon as the white bikes were distributed around the city, they removed them. However, for Schimmelpennink and for bike-sharing schemes in general, this was just the beginning. ‘The first Witte Fietsenplan was just a symbolic thing,’ he says. ‘We painted a few bikes white, that was all. Things got more serious when I became a member of the Amsterdam city council two years later.’'
  },
  {
    alphabet: 'C',
    paragraph: 'Schimmelpennink seized this opportunity to present a more elaborate Witte Fietsenplan to the city council. ‘My idea was that the municipality of Amsterdam would distribute 10,000 white bikes over the city, for everyone to use,’ he explains. ‘I made serious calculations. It turned out that a white bicycle – per person, per kilometer – would cost the municipality only 10% of what it contributed to public transport per person per kilometer.’ Nevertheless, the council unanimously rejected the plan. ‘They said that the bicycle belongs to the past. They saw a glorious future for the car,’ says Schimmelpennink. But he was not in the least discouraged.'
  },
  {
    alphabet: 'D',
    paragraph: 'Schimmelpennink never stopped believing in bike-sharing, and in the mid-90s, two Danes asked for his help to set up a system in Copenhagen. The result was the world’s first large-scale bike-share programme. It worked on a deposit: ‘You dropped a coin in the bike and when you returned it, you got your money back.’ After setting up the Danish system, Schimmelpennink decided to try his luck again in the Netherlands – and this time he succeeded in arousing the interest of the Dutch Ministry of Transport. ‘Times had changed,’ he recalls. ‘People had become more environmentally conscious, and the Danish experiment had proved that bike-sharing was a real possibility.’ A new Witte Fietsenplan was launched in 1999 in Amsterdam. However, riding a white bike was no longer free; it cost one guilder per trip and payment was made with a chip card developed by the Dutch bank Postbank. Schimmelpennink designed conspicuous, sturdy white bikes locked in special racks which could be opened with the chip card – the plan started with 250 bikes, distributed over five stations.'
  },
  {
    alphabet: 'E',
    paragraph: 'Theo Molenaar, who was a system designer for the project, worked alongside Schimmelpennink. ‘I remember when we were testing the bike racks, he announced that he had already designed better ones. But of course, we had to go through with the ones we had.’ The system, however, was prone to vandalism and theft. ‘After every weekend there would always be a couple of bikes missing,’ Molenaar says. ‘I really have no idea what people did with them, because they could instantly be recognised as white bikes.’ But the biggest blow came when Postbank decided to abolish the chip card, because it wasn’t profitable. ‘That chip card was pivotal to the system,’ Molenaar says. ‘To continue the project we would have needed to set up another system, but the business partner had lost interest.'
  },
  {
    alphabet: 'F',
    paragraph: 'Schimmelpennink was disappointed, but – characteristically – not for long. In 2002 he got a call from the French advertising corporation JC Decaux, who wanted to set up his bike-sharing scheme in Vienna. ‘That went really well. After Vienna, they set up a system in Lyon. Then in 2007, Paris followed. That was a decisive moment in the history of bike-sharing.’ The huge and unexpected success of the Parisian bike-sharing programme, which now boasts more than 20,000 bicycles, inspired cities all over the world to set up their own schemes, all modelled on Schimmelpennink’s. ‘It’s wonderful that this happened,’ he says. ‘But financially I didn’t really benefit from it, because I never filed for a patent.’'
  },
  {
    alphabet: 'G',
    paragraph: 'n Amsterdam today, 38% of all trips are made by bike and, along with Copenhagen, it is regarded as one of the two most cycle-friendly capitals in the world – but the city never got another Witte Fietsenplan. Molenaar believes this may be because everybody in Amsterdam already has a bike. Schimmelpennink, however, cannot see that this changes Amsterdam’s need for a bike-sharing scheme. ‘People who travel on the underground don’t carry their bikes around. But often they need additional transport to reach their final destination.’ Although he thinks it is strange that a city like Amsterdam does not have a successful bike-sharing scheme, he is optimistic about the future. ‘In the ‘60s we didn’t stand a chance because people were prepared to give their lives to keep cars in the city. But that mentality has totally changed. Today everybody longs for cities that are not dominated by cars.’'
  },
]

const Text2 = () => {
  return (
    <>
      <Typography sx={{ mb: 2.5 }}>
        <h3>
          <strong>
            The growth of bike-sharing schemes around the world
          </strong>
        </h3>
      </Typography>
      <Typography sx={{ mb: 2.5 }}>
        How Dutch engineer Luud Schimmelpennink helped to devise urban bike-sharing schemes
      </Typography>

      {Paragraphs.map((i, index) => {
        return (
          <Typography key={index} sx={{ mb: 1.5, display: 'flex' }}>
            <Typography variant="h6" sx={{ px: 2 }}>
              {i.alphabet}
            </Typography>
            <Typography>
              {i.paragraph}
            </Typography>
          </Typography>
        )
      })}
    </>
  );
};

export default Text2;