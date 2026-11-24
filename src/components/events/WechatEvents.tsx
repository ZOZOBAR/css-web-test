/* ==========================================================
 * Events Section 04 · WeChat Events 公众号活动
 *
 * 位置：活动总览页第 4 块（近期活动之后）
 * 结构：标题 → 列表，每行：日期 | 活动名 | 部门标签 | 阅读推文 ↗
 * 布局：桌面一行四列；≤740px 日期和标签挤到标题上下
 * 数据：src/data/eventsOverview.ts 的 WECHAT_EVENTS
 *
 * Figma：已批准的新增「公众号活动」整区
 * 待定：推文链接还没有。某一行没有 href 时，不显示「阅读推文 ↗」
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import SmartLink from "../common/SmartLink";
import { WECHAT_EVENTS } from "../../data/eventsOverview";
import { MEDIA } from "../../styles/breakpoints";

type WechatEventsProps = {
  isFirst?: boolean; // 筛选后成为第一块时，补回上边距
};

/* ---------- 组件 ---------- */
export default function WechatEvents({ isFirst = false }: WechatEventsProps) {
  return (
    <PageSection id="wechat" $flush={isFirst ? undefined : "top"} aria-labelledby="wechat-title">
      {/* 标题 */}
      <SectionHeading eyebrow="WECHAT" title="公众号活动" titleId="wechat-title" />

      {/* 列表 */}
      <List>
        {WECHAT_EVENTS.map((event) => (
          <Row key={event.title}>
            <Date>{event.date}</Date>
            <Title>{event.title}</Title>
            <Tag>{event.department}</Tag>
            {event.href && <ReadLink href={event.href}>阅读推文 ↗</ReadLink>}
          </Row>
        ))}
      </List>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 列表：上下都有分隔线
const List = styled.ul`
  margin-top: 40px;
  border-bottom: 1px solid var(--color-line);
`;

// 一行：日期 180 | 标题自适应 | 标签 | 链接
const Row = styled.li`
  display: grid;
  grid-template-columns: 230px 1fr auto 96px;
  align-items: center;
  gap: 20px;
  min-height: 84px;
  border-top: 1px solid var(--color-line);

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr auto;
    gap: 6px 12px;
    padding: 18px 0;
  }
`;

// 日期
const Date = styled.span`
  color: var(--color-text-secondary);
  font-size: 15px;

  @media ${MEDIA.mobile} {
    grid-column: 1 / -1;
    font-size: 13px;
  }
`;

// 活动名
const Title = styled.h3`
  font-size: clamp(17px, 1.4vw, 20px);
  font-weight: 700;
`;

// 部门小标签
const Tag = styled.span`
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--color-bg-tag);
  color: var(--color-text-secondary);
  font-size: 13px;
`;

// 推文链接
const ReadLink = styled(SmartLink)`
  justify-self: end;
  color: var(--color-brand);
  font-size: 14px;
  font-weight: 700;

  &:hover {
    color: var(--color-brand-dark);
  }
`;
