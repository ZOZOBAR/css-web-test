import styled from "styled-components";

type EventImage = {
  image: string;
  alt: string;
  caption?: string;
};

const MAIN_EVENT: EventImage = {
  image: "/assets/home/event-group.jpg",
  alt: "BUCSSA 集体合照",
  caption: "精选活动 / FEATURED EVENT",
};

const SIDE_EVENTS: EventImage[] = [
  { image: "/assets/home/event-stage.jpg", alt: "BUCSSA 舞台表演" },
  { image: "/assets/home/event-dj.jpg", alt: "BUCSSA 活动现场的 DJ", caption: "LIVE EDGE / BOC" },
];

// One featured event with two supporting photos. Captions stay with their image groups.
function EventsSection() {
  return (
    <SectionContainer id="events" aria-labelledby="events-title">
      <SectionTitle id="events-title">在这里，发现更多精彩</SectionTitle>
      <EventsGrid>
        <EventFigure>
          <MainEventImage src={MAIN_EVENT.image} alt={MAIN_EVENT.alt} />
          <EventCaption>{MAIN_EVENT.caption}</EventCaption>
        </EventFigure>
        <SideEvents>
          {SIDE_EVENTS.map((event) => (
            <EventFigure key={event.image}>
              <SideEventImage src={event.image} alt={event.alt} />
              {event.caption && <EventCaption>{event.caption}</EventCaption>}
            </EventFigure>
          ))}
        </SideEvents>
      </EventsGrid>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: 94px clamp(24px, 6vw, 103px) 114px;
  background-color: #f5f2ed;
  color: #26292b;

  @media (max-width: 740px) {
    padding: 68px 24px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 48px;
  font-family: Inter, "PingFang HK", sans-serif;
  font-size: clamp(32px, 3.2vw, 52px);
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 31px;
  align-items: start;

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

const SideEvents = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 241px);
  gap: 28px;

  @media (max-width: 740px) {
    grid-template-rows: none;
    gap: 30px;
  }
`;

const EventFigure = styled.figure`
  margin: 0;
`;

const MainEventImage = styled.img`
  display: block;
  width: 100%;
  height: 510px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center 38%;

  @media (max-width: 740px) {
    height: 270px;
  }
`;

const SideEventImage = styled(MainEventImage)`
  height: 241px;

  @media (max-width: 740px) {
    height: 270px;
  }
`;

const EventCaption = styled.figcaption`
  padding-top: 21px;
  font-family: Inter, "PingFang HK", sans-serif;
  font-size: clamp(15px, 1.35vw, 22px);
  font-weight: 700;
  letter-spacing: 0.03em;
`;

export default EventsSection;
