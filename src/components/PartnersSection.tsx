import styled from "styled-components";

type Partner = {
  name: string;
  image: string;
  width: string;
  height: string;
  scale?: number;
};

const PARTNERS: Partner[] = [
  { name: "Alipay", image: "/assets/home/logo-alipay.png", width: "222px", height: "56px" },
  { name: "Visa", image: "/assets/home/logo-visa.png", width: "209px", height: "61px" },
  // These source PNGs include transparent margins, so their visible marks need
  // small independent optical adjustments while preserving image proportions.
  { name: "Fantuan", image: "/assets/home/logo-fantuan.png", width: "176px", height: "74px", scale: 1.7 },
  { name: "BOSS直聘", image: "/assets/home/logo-boss.png", width: "89px", height: "89px" },
  { name: "Weee!", image: "/assets/home/logo-weee.png", width: "200px", height: "61px" },
  // Alpha padding differs between supplied files, so these scales adjust only
  // the visible mark inside its fixed cell without changing its proportions.
  { name: "iQIYI", image: "/assets/home/logo-iqiyi.png", width: "273px", height: "61px", scale: 2.97 },
  { name: "OSSC 留学生网", image: "/assets/home/logo-ossc.png", width: "181px", height: "71px", scale: 3.16 },
  { name: "刘一手火锅", image: "/assets/home/logo-liuyishou.png", width: "115px", height: "112px", scale: 1.82 },
];

// Keep Figma's desktop sequence: four logos per row, then two rows.
function PartnersSection() {
  return (
    <SectionContainer id="partners" aria-labelledby="partners-title">
      <SectionTitle id="partners-title">一路同行，共创更多可能</SectionTitle>
      <SectionDescription>
        感谢合作伙伴的支持，与我们一起为 BU 中国学生学者社区创造更多精彩
      </SectionDescription>
      <LogoGrid>
        {PARTNERS.map((partner) => (
          <LogoCell key={partner.name}>
            <PartnerLogo
              src={partner.image}
              alt={partner.name}
              $width={partner.width}
              $height={partner.height}
              $scale={partner.scale ?? 1}
            />
          </LogoCell>
        ))}
      </LogoGrid>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: 94px clamp(24px, 5.6vw, 95px) 205px;
  background-color: #f5f2ed;
  color: #1f1f1f;

  @media (max-width: 740px) {
    padding: 68px 24px 100px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 15px;
  font-size: clamp(32px, 3.2vw, 52px);
`;

const SectionDescription = styled.p`
  margin: 0 0 73px;
  color: #616161;
  font-size: clamp(17px, 1.5vw, 24px);
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 55px 78px;
  padding: 41px 60px;
  background-color: rgba(232, 225, 215, 0.3);

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 35px 28px;
    padding: 32px 22px;
  }
`;

const LogoCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 112px;
  overflow: hidden;

  @media (max-width: 740px) {
    height: 72px;
  }
`;

// Some supplied PNGs contain large transparent margins. Scale only those files
// inside their own clipped cell so the visible marks match Figma's optical size.
const PartnerLogo = styled.img<{ $width: string; $height: string; $scale: number }>`
  display: block;
  width: min(100%, ${({ $width }) => $width});
  height: auto;
  max-height: ${({ $height }) => $height};
  object-fit: contain;
  transform: scale(${({ $scale }) => $scale});

  @media (max-width: 740px) {
    max-height: 72px;
  }
`;

export default PartnersSection;
