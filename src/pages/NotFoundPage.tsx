/* ==========================================================
 * Page · 404（网址不存在时显示）
 *
 * 用和其他子页面一样的 Hero，加一个回首页的按钮。
 * ========================================================== */
import styled from "styled-components";
import PageHero from "../components/common/PageHero";
import { PageSection } from "../components/common/Section";
import { PrimaryButton } from "../components/common/Buttons";

export default function NotFoundPage() {
  return (
    <>
      <PageHero image="/assets/shared/boston.webp" eyebrow="404" title="页面不存在" />
      <PageSection aria-label="返回首页">
        <Center>
          <PrimaryButton href="/">返回首页</PrimaryButton>
        </Center>
      </PageSection>
    </>
  );
}

/* ---------- 样式 ---------- */

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
