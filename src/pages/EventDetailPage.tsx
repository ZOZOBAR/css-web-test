/* ==========================================================
 * Page · 活动详情（/events/:slug）
 *
 * 5 个大活动共用这一个模板，内容来自 src/data/eventDetails.ts。
 * 从上到下：
 *   01 Hero         大图 + 活动名 + 信息栏
 *   02 Highlights   活动亮点（图文交替）
 *   03 Quote        理念引言（红底）
 *   04 Steps        参与流程（三张卡片）
 *   05 Moments      回忆瞬间（照片墙）
 *   06 CTA          结尾号召 +「了解更多」
 *   07 More Events  更多活动
 *
 * 设计：Figma「HI-FI · 子页面」B · 活动详情模板
 * ========================================================== */
import { useParams } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import CtaPanel from "../components/common/CtaPanel";
import EventHighlights from "../components/events/EventHighlights";
import EventQuote from "../components/events/EventQuote";
import EventSteps from "../components/events/EventSteps";
import EventMoments from "../components/events/EventMoments";
import MoreEvents from "../components/events/MoreEvents";
import NotFoundPage from "./NotFoundPage";
import { EVENT_CTA_BUTTON, findEvent } from "../data/eventDetails";

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = findEvent(slug);

  // 网址里的活动不存在
  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHero
        size="event"
        image={event.hero.image}
        imagePosition={event.hero.position}
        eyebrow="活动 · EVENTS"
        title={event.name}
        meta={event.hero.meta}
      />
      <EventHighlights title={event.highlights.title} items={event.highlights.items} />
      <EventQuote text={event.quote.text} source={event.quote.source} />
      <EventSteps steps={event.steps} />
      <EventMoments
        title={event.moments.title}
        subtitle={event.moments.subtitle}
        images={event.moments.images}
        eventName={event.name}
      />
      <CtaPanel
        title={event.cta.title}
        description={event.cta.description}
        button={EVENT_CTA_BUTTON}
      />
      <MoreEvents currentSlug={event.slug} />
    </>
  );
}
