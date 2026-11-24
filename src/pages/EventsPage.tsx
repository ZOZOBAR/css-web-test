/* ==========================================================
 * Page · 活动总览（/events）
 *
 * 从上到下：
 *   01 Hero            波士顿横幅 + 「活动 / 近期活动与精彩回顾」
 *   02 Filter          筛选标签（控制下面三块显示哪些）
 *   03 Current Events  近期活动（5 张海报）
 *   04 WeChat Events   公众号活动列表
 *   05 Past Events     精彩回顾
 *   06 CTA             结尾「期待与你一起 / 创造更多精彩回忆」
 *
 * 设计：Figma「HI-FI · 子页面」A · 活动总览
 * ========================================================== */
import { useState } from "react";
import PageHero from "../components/common/PageHero";
import CtaPanel from "../components/common/CtaPanel";
import EventFilterTabs from "../components/events/EventFilterTabs";
import CurrentEvents from "../components/events/CurrentEvents";
import WechatEvents from "../components/events/WechatEvents";
import PastEvents from "../components/events/PastEvents";
import { EVENTS_CTA, EVENTS_HERO, type EventFilterId } from "../data/eventsOverview";

export default function EventsPage() {
  // 当前选中的筛选标签，默认「全部」
  const [filter, setFilter] = useState<EventFilterId>("all");
  const shows = (id: EventFilterId) => filter === "all" || filter === id;

  return (
    <>
      <PageHero
        image="/assets/shared/boston.webp"
        eyebrow={EVENTS_HERO.eyebrow}
        title={EVENTS_HERO.title}
        subtitle={EVENTS_HERO.subtitle}
      />
      <EventFilterTabs active={filter} onChange={setFilter} />
      {shows("current") && <CurrentEvents />}
      {shows("wechat") && <WechatEvents isFirst={filter === "wechat"} />}
      {shows("past") && <PastEvents isFirst={filter === "past"} />}
      <CtaPanel title={EVENTS_CTA.title} description={EVENTS_CTA.description} />
    </>
  );
}
