/* ==========================================================
 * Section 05 · Resources 学生资源 & 加入我们
 *
 * 位置：首页第 5 块（Community 之后，Partners 之前）
 * 结构：标题 + 副标题 → 左侧白色资源卡 + 右侧红色"加入我们"卡
 * 布局：桌面左宽右窄两栏；手机单列
 * 数据：src/data/resources.ts
 *
 * 箭头 ↗ 使用 Paperlogy 字体。Safari 下字形略有不同，已确认不处理。
 * ========================================================== */
import styled from "styled-components";
import SmartLink from "../common/SmartLink";
import { SectionContainer, SectionSubtitle, SectionTitle } from "../common/Section";
import { JOIN_CARD, RESOURCES } from "../../data/resources";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function ResourcesSection() {
  return (
    <Container id="resources" aria-labelledby="resources-title">
      {/* 标题 + 副标题 */}
      <Title id="resources-title">在 BU，找到属于你的精彩</Title>
      <Subtitle>探索校园资源、认识志同道合的伙伴，让你的波士顿留学生活拥有更多可能</Subtitle>

      <Cards>
        {/* 左：学生资源卡 */}
        <ResourceCard>
          <CardLabel>学生资源</CardLabel>

          <ResourceList>
            {RESOURCES.map((resource) => (
              <ResourceItem key={resource.title}>
                <div>
                  <ResourceTitle>{resource.title}</ResourceTitle>
                  <ResourceDescription>{resource.description}</ResourceDescription>
                </div>
                <ResourceLink href={resource.href} aria-label={`查看${resource.title}`}>
                  <ResourceArrow>↗</ResourceArrow>
                </ResourceLink>
              </ResourceItem>
            ))}
          </ResourceList>
        </ResourceCard>

        {/* 右：加入我们卡 */}
        <JoinCard>
          <JoinLabel>{JOIN_CARD.label}</JoinLabel>

          <JoinTitle>
            {JOIN_CARD.title[0]}
            <br />
            {JOIN_CARD.title[1]}
          </JoinTitle>

          <JoinDescription>
            {JOIN_CARD.description[0]}
            <br />
            {JOIN_CARD.description[1]}
          </JoinDescription>

          <JoinButton href={JOIN_CARD.href}>
            {JOIN_CARD.buttonLabel} <JoinArrow>↗</JoinArrow>
          </JoinButton>
        </JoinCard>
      </Cards>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 外框
const Container = styled(SectionContainer)`
  padding-top: 90px;
  padding-bottom: 126px;
  color: var(--color-text-strong);

  @media ${MEDIA.mobile} {
    padding-top: 68px;
    padding-bottom: 68px;
  }
`;

// 标题：下方紧跟副标题，所以间距很小
const Title = styled(SectionTitle)`
  margin-bottom: 13px;
`;

// 副标题
const Subtitle = styled(SectionSubtitle)`
  margin-bottom: 48px;
  line-height: 1.55;
`;

// 两张卡片的网格：左 1.55 份，右 1 份
const Cards = styled.div`
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: 25px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
  }
`;

// 卡片通用外观
const Card = styled.article`
  min-height: 351px;
  padding: 28px 36px;
  border-radius: 12px;

  @media ${MEDIA.mobile} {
    min-height: unset;
    padding: 27px 25px;
  }
`;

// 卡片左上角的小标签（"学生资源" / "加入我们"）
const CardLabel = styled.span`
  display: block;
  color: var(--color-brand-label);
  font-size: 16px;
  font-weight: 700;
`;

// 卡片大标题的字号（资源标题和"加入我们"标题共用）
const CARD_TITLE_SIZE = "32px";
const CARD_TITLE_SIZE_MOBILE = "27px";

/* -- 左：学生资源卡 -- */

// 白色卡片
const ResourceCard = styled(Card)`
  background: var(--color-bg-card);
`;

// 资源列表
const ResourceList = styled.ul``;

// 单条资源：左边文字，右边箭头；最后一条没有分割线
const ResourceItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 39px 0 22px;
  border-bottom: 1px solid var(--color-divider);

  &:last-child {
    padding-bottom: 0;
    border: 0;
  }
`;

// 资源名称
const ResourceTitle = styled.h3`
  font-size: ${CARD_TITLE_SIZE};

  @media ${MEDIA.mobile} {
    font-size: ${CARD_TITLE_SIZE_MOBILE};
  }
`;

// 资源说明
const ResourceDescription = styled.p`
  margin-top: 12px;
  color: var(--color-text-muted);
  font-size: 18px;

  @media ${MEDIA.mobile} {
    font-size: 16px;
  }
`;

// 箭头链接：垂直居中
const ResourceLink = styled(SmartLink)`
  align-self: center;
  color: var(--color-brand-dark);
`;

// 大号箭头 ↗
const ResourceArrow = styled.span`
  display: block;
  font-family: var(--font-arrow);
  font-size: clamp(38px, 3.35vw, 57px);
  font-weight: 600;
  line-height: 1;

  @media ${MEDIA.mobile} {
    font-size: 42px;
  }
`;

/* -- 右：加入我们卡 -- */

// 红色卡片：内容上下排列，按钮固定在底部
const JoinCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--color-brand-card);
  color: var(--color-text-inverse);
`;

// 红底上的浅粉标签
const JoinLabel = styled(CardLabel)`
  color: var(--color-brand-tint);
`;

// "不止是参与 / 更是一起创造"
const JoinTitle = styled.h3`
  margin: 38px 0 24px;
  font-size: ${CARD_TITLE_SIZE};
  line-height: 1.42;

  @media ${MEDIA.mobile} {
    margin: 30px 0 18px;
    font-size: ${CARD_TITLE_SIZE_MOBILE};
  }
`;

// 说明文字
const JoinDescription = styled.p`
  color: var(--color-brand-tint-light);
  font-size: 16px;
  line-height: 1.6;
`;

// 白色胶囊按钮："了解如何加入 ↗"
const JoinButton = styled(SmartLink)`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: auto;
  padding: 9px 24px 10px;
  border-radius: 24px;
  background: var(--color-bg-card);
  color: var(--color-brand-text);
  font-weight: 600;

  @media ${MEDIA.mobile} {
    margin-top: 28px;
  }
`;

// 按钮里的小箭头
const JoinArrow = styled.span`
  color: var(--color-brand-dark);
  font-family: var(--font-arrow);
  font-size: clamp(20px, 1.65vw, 27px);
  font-weight: 600;
  line-height: 1;
`;
