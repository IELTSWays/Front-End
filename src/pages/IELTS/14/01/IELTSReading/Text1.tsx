// mtu
import Typography from '@mui/material/Typography';
// mtu

const Paragraphs = [
  {
    paragraph: 'Brick by brick, six-year-old Alice is building a magical kingdom. Imagining fairy-tale turrets and fire-breathing dragons, wicked witches and gallant heroes, she’s creating an enchanting world. Although she isn’t aware of it, this fantasy is helping her take her first steps towards her capacity for creativity and so it will have important repercussions in her adult life.'
  },
  {
    paragraph: 'Minutes later, Alice has abandoned the kingdom in favour of playing schools with her younger brother. When she bosses him around as his ‘teacher’, she’s practising how to regulate her emotions through pretence. Later on, when they tire of this and settle down with a board game, she’s learning about the need to follow rules and take turns with a partner.'
  },
  {
    paragraph: '‘Play in all its rich variety is one of the highest achievements of the human species,’ says Dr David Whitebread from the Faculty of Education at the University of Cambridge, UK. ‘It underpins how we develop as intellectual, problem-solving adults and is crucial to our success as a highly adaptable species.’'
  },
  {
    paragraph: 'Recognizing the importance of play is not new: over two millennia ago, the Greek philosopher Plato extolled its virtues as a means of developing skills for adult life, and ideas about play-based learning have been developing since the 19th century.'
  },
  {
    paragraph: 'But we live in changing times, and Whitebread is mindful of a worldwide decline in play, pointing out that over half the people in the world now live in cities. ‘The opportunities for free play, which I experienced almost every day of my childhood, are becoming increasingly scarce,’ he says. Outdoor play is curtailed by perceptions of risk to do with traffic, as well as parents’ increased wish to protect their children from being the victims of crime, and by the emphasis on ‘earlier is better’ which is leading to greater competition in academic learning and schools.'
  },
  {
    paragraph: 'International bodies like the United Nations and the European Union have begun to develop policies concerned with children’s right to play, and to consider implications for leisure facilities and educational programmes. But what they often lack is the evidence to base policies on.'
  },
  {
    paragraph: '‘The type of play we are interested in is child-initiated, spontaneous and unpredictable – but, as soon as you ask a five-year-old “to play”, then you as the researcher have intervened,’ explains Dr Sara Baker. ‘And we want to know what the long-term impact of play is. It’s a real challenge.’'
  },
  {
    paragraph: 'Dr Jenny Gibson agrees, pointing out that although some of the steps in the puzzle of how and why play is important have been looked at, there is very little data on the impact it has on the child’s later life.'
  },
  {
    paragraph: 'Now, thanks to the university’s new Centre for Research on Play in Education, Development and Learning (PEDAL), Whitebread, Baker, Gibson and a team of researchers hope to provide evidence on the role played by play in how a child develops.'
  },
  {
    paragraph: '‘A strong possibility is that play supports the early development of children’s self-control,’ explains Baker. ‘This is our ability to develop awareness of our own thinking progresses – it influences how effectively we go about undertaking challenging activities.’'
  },
  {
    paragraph: 'In a study carried out by Baker with toddlers and young pre-schoolers, she found that children with greater self-control solved problems more quickly when exploring an unfamiliar set-up requiring scientific reasoning. ‘This sort of evidence makes up think that giving children the chance to play will make them more successful problem-solvers in the long run.’'
  },
  {
    paragraph: 'If playful experiences do facilitate this aspect of development, say the researchers, it could be extremely significant for educational practices, because the ability to self-regulate has been shown to be a key predictor of academic performance.'
  },
  {
    paragraph: 'Gibson adds: ‘Playful behavior is also an important indicator of healthy social and emotional development. In my previous research, I investigated how observing children at play can give us important clues about their well-being and can even be useful in the diagnosis of neurodevelopmental disorders like autism.’'
  },
  {
    paragraph: 'Whitebread’s recent research has involved developing a play-based approach to supporting children’s writing. ‘Many primary school children find writing difficult, but we showed in a previous study that a playful stimulus was far more effective than an instructional one.’ Children wrote longer and better-structured stories when they first played with dolls representing characters in the story. In the latest study, children first created their story with Lego*, with similar results. ‘Many teachers commented that they had always previously had children saying they didn’t know what to write about. With the Lego building, however, not a single child said this through the whole year of the project.’'
  },
  {
    paragraph: 'Whitebread, who directs PEDAL, trained as a primary school teacher in the early 1970s, when, as he describes, ‘the teaching of young children was largely a quiet backwater, untroubled by any serious intellectual debate or controversy.’ Now, the landscape is very different, with hotly debated topics such as school starting age.'
  },
  {
    paragraph: '‘Somehow the importance of play has been lost in recent decades. It’s regarded as something trivial, or even as something negative that contrasts with “work”. Let’s not lose sight of its benefits, and the fundamental contributions it makes to human achievements in the arts, sciences and technology. Let’s make sure children have a rich diet of play experiences.’'
  },

]

const Text1 = () => {

  return (
    <>
      <Typography sx={{ mb: 2.5 }}>
        <h3>
          <strong>
            THE IMPORTANCE OF CHILDREN’S PLAY
          </strong>
        </h3>
      </Typography>
      {Paragraphs.map((i, index) => {
        return (
          <Typography key={index} sx={{ mb: 1.5 }}>
            {i.paragraph}
          </Typography>
        )
      })}
      <Typography sx={{ mb: 1.5 }} className="ielts-paragraph">
        * Lego: coloured plastic building blocks and other pieces that can be joined together
      </Typography>
    </>
  );
};

export default Text1;
