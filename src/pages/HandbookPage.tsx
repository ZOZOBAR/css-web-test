/* ==========================================================
 * Page · 新生手册（/handbook）
 *
 * 现状：原网站的手册 PDF 已失效（403），Figma G 的目录 + 阅读区
 *       要等技术部提供 PDF 原件后按原文做。
 * 现在先上：Hero + 一块「内容整理中」的提示面板。
 *
 * 拿到 PDF 后：按 Figma G 加「左侧目录 + 右侧章节」，章节文字放进 data/handbook.ts。
 * 副标题沿用首页「学生资源」卡片说明。
 * ========================================================== */
import PageHero from "../components/common/PageHero";
import CtaPanel from "../components/common/CtaPanel";

export default function HandbookPage() {
  return (
    <>
      <PageHero
        image="/assets/shared/boston.webp"
        eyebrow="Resources"
        title="新生手册"
        subtitle="从入学准备到校园生活，帮助你更快适应波士顿"
      />
      <CtaPanel
        isFirst
        title={["新生手册", "内容整理中"]}
        description="手册内容正在更新，敬请期待"
        button={{ label: "返回首页", href: "/" }}
      />
    </>
  );
}
