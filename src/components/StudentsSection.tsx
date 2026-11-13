import styled from "styled-components";

type Resource = { title: string; description: string };

const RESOURCES: Resource[] = [
  { title: "新生手册", description: "从入学准备到校园生活，帮助你更快适应波士顿" },
  { title: "职发百宝箱", description: "探索实习求职、职业发展与经验分享" },
];

function StudentsSection() {
  return <Section id="resources" aria-labelledby="students-title"><h2 id="students-title">在 BU，找到属于你的精彩</h2><p>探索校园资源、认识志同道合的伙伴，让你的波士顿留学生活拥有更多可能</p><div className="cards"><div className="resources"><span className="label">学生资源</span>{RESOURCES.map((resource) => <div className="resource" key={resource.title}><div><h3>{resource.title}</h3><p>{resource.description}</p></div><a href="#resources" aria-label={`查看${resource.title}`}><span className="resource-arrow">↗</span></a></div>)}</div><div className="join"><span className="label">加入我们</span><h3>不止是参与<br/>更是一起创造</h3><p>加入 BUCSSA，认识志同道合的伙伴<br/>一起创造属于我们的校园记忆</p><a href="#footer">了解如何加入 <span className="join-arrow">↗</span></a></div></div></Section>;
}

const Section=styled.section`
  padding:90px clamp(24px,6vw,103px) 126px;
  background:#f5f2ed;
  color:#1f1f1f;
  h2{margin:0 0 13px;font-size:clamp(32px,3.2vw,52px)} >p{margin:0 0 48px;font-size:clamp(17px,1.5vw,24px);line-height:1.55;color:#616161}.cards{display:grid;grid-template-columns:1.55fr 1fr;gap:25px}.resources,.join{border-radius:12px;padding:28px 36px;min-height:351px}.resources{background:white}.label{display:block;color:#9a4849;font-weight:700;font-size:16px}.resource{display:flex;justify-content:space-between;gap:20px;padding:39px 0 22px;border-bottom:1px solid #e8e4df}.resource:last-child{border:0;padding-bottom:0}.resource h3{margin:0;font-size:32px}.resource p{margin:12px 0 0;color:#696a6b;font-size:18px}.resource a{align-self:center;color:#772525}.resource-arrow{display:block;font-family:"Paperlogy 6 SemiBold",Paperlogy,sans-serif;font-size:clamp(38px,3.35vw,57px);font-weight:600;line-height:1}.join{display:flex;flex-direction:column;align-items:flex-start;background:#a94447;color:white}.join .label{color:#f4dcdd}.join h3{margin:38px 0 24px;font-size:32px;line-height:1.42}.join p{margin:0;color:#fbecec;font-size:16px;line-height:1.6}.join a{margin-top:auto;padding:9px 24px 10px;border-radius:24px;background:white;color:#8b3034;font-weight:600;display:inline-flex;align-items:center;gap:7px}.join-arrow{font-family:"Paperlogy 6 SemiBold",Paperlogy,sans-serif;font-size:clamp(20px,1.65vw,27px);font-weight:600;line-height:1;color:#772525}@media(max-width:740px){padding:68px 24px;.cards{grid-template-columns:1fr}.resources,.join{min-height:unset;padding:27px 25px}.resource h3,.join h3{font-size:27px}.resource p{font-size:16px}.resource-arrow{font-size:42px}.join h3{margin:30px 0 18px}.join a{margin-top:28px}}
`;

export default StudentsSection;
