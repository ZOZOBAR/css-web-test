/* ==========================================================
 * Page · 部门详情（/about/:dept）
 *
 * 8 个部门共用这一个模板，内容来自 src/data/departments.ts。
 * 各部门原文结构不同，没有的部分自动不显示。从上到下：
 *   01 Hero         部门照片 + 英文名 + 中文名
 *   02 Intro        部门介绍
 *   03 Motto        座右铭 / 宣言（红色面板 + 照片）        ← 可选
 *   03b Photos      活动照片（没有宣言面板的部门）          ← 可选
 *   04 Features     特色卡片 / Tags 职责标签                ← 可选
 *   05 Projects     现有项目 + 计划中（技术部）             ← 可选
 *   06 Leaders      部门负责人
 *   07 Group Photo  部门合影
 *   08 Others       其他部门
 *
 * 设计：Figma「HI-FI · 子页面」D · 部门详情模板（技术部）
 * ========================================================== */
import { useParams } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import DeptIntro from "../components/department/DeptIntro";
import DeptMotto from "../components/department/DeptMotto";
import DeptPhotos from "../components/department/DeptPhotos";
import DeptFeatures from "../components/department/DeptFeatures";
import DeptTags from "../components/department/DeptTags";
import DeptProjects from "../components/department/DeptProjects";
import DeptLeaders from "../components/department/DeptLeaders";
import DeptGroupPhoto from "../components/department/DeptGroupPhoto";
import OtherDepartments from "../components/department/OtherDepartments";
import NotFoundPage from "./NotFoundPage";
import { findDepartment } from "../data/departments";

export default function DepartmentPage() {
  const { dept } = useParams();
  const department = findDepartment(dept);

  // 网址里的部门不存在
  if (!department) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHero
        size="dept"
        image={department.heroImage}
        imagePosition={department.heroPosition}
        eyebrow={department.english}
        title={department.name}
      />
      <DeptIntro intro={department.intro} />

      {department.motto && (
        <DeptMotto
          lines={department.motto.lines}
          label={department.motto.label}
          image={department.motto.image}
        />
      )}
      {department.photos && (
        <DeptPhotos photos={department.photos} departmentName={department.name} />
      )}
      {department.features && (
        <DeptFeatures
          eyebrow={department.features.eyebrow}
          title={department.features.title}
          items={department.features.items}
        />
      )}
      {department.tags && (
        <DeptTags
          title={department.tags.title}
          items={department.tags.items}
          note={department.tags.note}
        />
      )}
      {department.projects && (
        <DeptProjects projects={department.projects} planned={department.planned} />
      )}

      <DeptLeaders leaders={department.leaders} />
      <DeptGroupPhoto
        name={department.name}
        english={department.english}
        image={department.groupPhoto}
      />
      <OtherDepartments currentSlug={department.slug} />
    </>
  );
}
