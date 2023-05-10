import {
  MainContainer,
  StyledTitleNote,
  StyledNote,
  NoteContainer,
} from "./style";
const COLOURS = ["#8deba6", "#a7d2e6", "#f2e058", "#e68cb4"];

function StickyNote({ title, text, link }) {
  const colour = COLOURS[Math.floor(Math.random() * COLOURS.length)];
  return (
    <StyledNote style={{ background: colour }}>
      <h4>{title}</h4>
      <p>{text}</p>
      <a href={link}>Link</a>
    </StyledNote>
  );
}

function TitleNote({ title }) {
  const colour = COLOURS[Math.floor(Math.random() * COLOURS.length)];
  return (
    <StyledTitleNote style={{ background: colour }}>
      <h2>{title}</h2>
    </StyledTitleNote>
  );
}

export default function Resources() {
  return (
    <MainContainer>
      <NoteContainer>
        <TitleNote title="Autism" />
        <StickyNote
          title="National Autistic Society"
          text="Explains possible causes of eating issues and gives practical strategies to help."
          link="https://www.autism.org.uk/advice-and-guidance/topics/behaviour/eating/all-audiences"
        />
        <StickyNote
          title="Beyond Autism"
          text="Tips for healthy eating and modifications to help introduce new foods"
          link="https://www.beyondautism.org.uk/about-autism/understanding-autism/autism-and-eating/"
        />
        <StickyNote
          title="Otsimo"
          text="Strategies for expanding food range and overcoming aversions"
          link="https://otsimo.com/en/how-to-get-child-to-eat/"
        />
        <TitleNote title="Anorexia / Bulimia" />
        <StickyNote
          title="NHS"
          text="NHS treatment options"
          link="https://www.nhs.uk/mental-health/conditions/anorexia/treatment/"
        />
        <StickyNote
          title="Beat Eating Disorders"
          text="Information and support. Also includes useful resources for family and supporters."
          link="https://www.beateatingdisorders.org.uk/"
        />
        <StickyNote
          title="Mind"
          text="Types of eating disorder, treatment, and support."
          link="https://www.mind.org.uk/information-support/types-of-mental-health-problems/eating-problems/types-of-eating-disorders/"
        />
        <TitleNote title="ARFID" />
        <StickyNote
          title="Beat Eating Disorders"
          text="What is ARFID?"
          link="https://www.beateatingdisorders.org.uk/get-information-and-support/about-eating-disorders/types/arfid/"
        />
        <StickyNote
          title="Arfid Awareness"
          text="Treatment options"
          link="https://www.arfidawarenessuk.org/treatment"
        />
      </NoteContainer>
    </MainContainer>
  );
}
