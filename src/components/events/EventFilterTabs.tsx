/* ==========================================================
 * Events Section 02 · Filter 筛选标签
 *
 * 位置：活动总览页第 2 块（Hero 之后）
 * 结构：一排胶囊按钮：全部 / 近期活动 / 公众号活动 / 精彩回顾
 * 交互：点一个按钮，页面只显示对应的那一块；「全部」显示三块
 *       当前选中的按钮是深色实心，其余是描边
 * 数据：src/data/eventsOverview.ts 的 EVENT_FILTERS
 *
 * Figma：已批准的新增「顶部筛选标签」
 * ========================================================== */
import styled from "styled-components";
import { SectionContainer } from "../common/Section";
import { EVENT_FILTERS, type EventFilterId } from "../../data/eventsOverview";

type EventFilterTabsProps = {
  active: EventFilterId;
  onChange: (id: EventFilterId) => void;
};

/* ---------- 组件 ---------- */
export default function EventFilterTabs({ active, onChange }: EventFilterTabsProps) {
  return (
    <Container aria-label="筛选活动">
      <Tabs role="group">
        {EVENT_FILTERS.map((filter) => (
          <Tab
            key={filter.id}
            type="button"
            aria-pressed={filter.id === active}
            onClick={() => onChange(filter.id)}
          >
            {filter.label}
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 外框：标签离 Hero 40px
const Container = styled(SectionContainer)`
  padding-top: 40px;
`;

// 一排标签，放不下时换行
const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// 单个标签：选中时（aria-pressed="true"）深色实心
const Tab = styled.button`
  height: 40px;
  padding: 0 20px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-text-dark);
  font-size: 15px;
  font-weight: 500;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: var(--color-text-dark);
  }

  &[aria-pressed="true"] {
    border-color: var(--color-text-dark);
    background: var(--color-text-dark);
    color: var(--color-text-inverse);
  }

  &:focus-visible {
    outline: 3px solid var(--color-brand);
    outline-offset: 2px;
  }
`;
