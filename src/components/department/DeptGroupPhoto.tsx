/* ==========================================================
 * Department Section 07 · Group Photo 部门合影
 *
 * 位置：部门详情页第 7 块（负责人之后）
 * 结构：左边「XX部合影」+ 英文部门名（大字，贴底）；右边合影
 * 布局：桌面左 40% / 右 49%；≤740px 上下排列
 * 数据：src/data/departments.ts 的 groupPhoto、english
 *
 * 待定：技术部合影原图分辨率低（1080×1619、63KB），需向技术部要原图
 * ========================================================== */
import styled from "styled-components";
import { PageSection, Eyebrow } from "../common/Section";
import { MEDIA } from "../../styles/breakpoints";

type DeptGroupPhotoProps = {
  name: string;
  english: string;
  image: string;
};

/* ---------- 组件 ---------- */
export default function DeptGroupPhoto({ name, english, image }: DeptGroupPhotoProps) {
  return (
    <PageSection $flush="top" aria-labelledby="dept-group-title">
      <Layout>
        {/* 左：标题贴底 */}
        <Copy>
          <Eyebrow>{name}合影</Eyebrow>
          <English id="dept-group-title">{english}</English>
        </Copy>

        {/* 右：合影 */}
        <Photo src={image} alt={`${name}合影`} loading="lazy" />
      </Layout>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 两栏，底部对齐
const Layout = styled.div`
  display: grid;
  grid-template-columns: 40% 49%;
  justify-content: space-between;
  align-items: end;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

// 左侧文字
const Copy = styled.div`
  padding-bottom: 8px;

  @media ${MEDIA.mobile} {
    order: 2;
  }
`;

// 英文部门名
const English = styled.h2`
  font-family: var(--font-latin);
  font-size: clamp(32px, 3.6vw, 52px);
  font-weight: 600;
  line-height: 1.1;
`;

// 合影
const Photo = styled.img`
  width: 100%;
  max-height: 760px;
  border-radius: var(--radius-image);
  object-fit: cover;
`;
