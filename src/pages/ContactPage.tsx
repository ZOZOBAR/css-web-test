/* ==========================================================
 * Page · 联系与合作（/contact）
 *
 * 从上到下：
 *   01 Hero         波士顿横幅 + 「合作」+ 原网站说明
 *   02 Departments  市场部 / 宣传部 / 职发部的合作介绍和邮箱
 *   03 Form         联系表单（发到选中部门的邮箱）
 *   04 Partners     合作伙伴 Logo 墙
 *
 * 设计：Figma「HI-FI · 子页面」F · 联系与合作
 * ========================================================== */
import PageHero from "../components/common/PageHero";
import ContactDepartments from "../components/contact/ContactDepartments";
import ContactForm from "../components/contact/ContactForm";
import PartnerWall from "../components/contact/PartnerWall";
import { CONTACT_HERO } from "../data/contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/assets/shared/boston.webp"
        eyebrow={CONTACT_HERO.eyebrow}
        title={CONTACT_HERO.title}
        subtitle={CONTACT_HERO.subtitle}
      />
      <ContactDepartments />
      <ContactForm />
      <PartnerWall />
    </>
  );
}
