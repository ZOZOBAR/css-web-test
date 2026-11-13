import styled from "styled-components";
const Section = styled.section`padding:100px clamp(24px,6vw,103px)
118px;background:#f5f2ed;color:#26292b;h2{margin:0 0 45px;
font-size:clamp(32px,3.2vw,52px);letter-spacing:.02em}.
layout{display:grid;grid-template-columns:minmax(320px,.78fr)
 minmax(420px,1fr);gap:clamp(48px,11vw,190px);align-items:start}
 .photos{display:grid;gap:24px}
 img{display:block;width:100%;border-radius:13px;object-fit:cover}
 .wide{height:282px}.portrait{height:684px;object-position:center 36%}
 .copy{font-size:clamp(17px,1.55vw,25px);line-height:1.62;letter-spacing:
 .035em}.copy p{margin:0 0 28px}
 .cta{display:inline-block;margin-top:18px;padding:16px 29px;border-radius:22px;background:#b24d4d;color:white;font-size:18px;font-weight:600}
 .cta:focus-visible{outline:3px solid #252525;outline-offset:3px}
 @media(max-width:800px){padding:68px 24px 76px;.layout{grid-template-columns:1fr;gap:34px}
 .wide{height:230px}.portrait{height:420px}.copy{font-size:17px}}`;

export default function AboutSection() { return <Section id="about" aria-labelledby="about-title"><h2 id="about-title">波士顿大学中国学生学者联合会</h2><div className="layout"><div className="photos"><img className="wide" src="/assets/home/about-group.webp" alt="BUCSSA 成员合影" /><img className="portrait" src="/assets/home/about-portrait.webp" alt="BUCSSA 活动合影" /></div><div className="copy"><p>BUCSSA（波士顿大学中国学生学者协会）成立于1994年，至今已发展成为一个蓬勃发展的非盈利组织。由波士顿大学的中国学生和学者自发组织，BUCSSA的核心使命是为该大学的中国学生社群提供全面的支持和服务。这种支持包括学术追求、日常生活、文化探索和娱乐活动等各个方面。多年来，BUCSSA已经发展成为波士顿大学社区的重要组成部分，不仅满足了其中国学生成员的需求，还积极为更大范围的波士顿大学和波士顿地区的华人社群做出了积极的贡献。作为唯一一家获得中国驻纽约总领馆正式注册认证的波士顿大学华人组织，BUCSSA拥有独特的地位。</p><p>BUCSSA致力于促进文化交流和培养社群意识的承诺是坚定不移的。通过各种各样的活动，包括文化节庆、学术论坛、社交聚会和慈善倡议，BUCSSA丰富了大学和波士顿地区的文化格局。这种对文化丰富的承诺不仅使其成员受益，还作为国际学生和当地社区之间的桥梁，促进了跨文化的理解与合作。此外，作为波士顿大学最大的学生组织之一，BUCSSA继续在促进其成员之间的归属感和友情方面发挥着至关重要的作用。它为个人成长、领导力发展和共同兴趣的探索提供了一个平台。BUCSSA不仅仅是一个学生组织；它是一个重视多样性、包容性和知识追求的社群。</p><a className="cta" href="#footer">关于我们 · 了解各部门</a></div></div></Section> }
