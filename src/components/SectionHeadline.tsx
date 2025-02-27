import styled from 'styled-components';

//** Återanvändbar Rubrik till stora sektioner. Skicka med titel och färg.*/

interface SectionHeadlineProps {
  title: string;
  $color: string;
}

export function SectionHeadline(props: SectionHeadlineProps) {
  return <StyledHeadline color={props.$color}>{props.title}</StyledHeadline>;
}

const StyledHeadline = styled.h2`
  font-size: 2rem;
  margin: 64px 0rem;
  margin-left: 0.5rem;
  color: ${props => props.color};
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;
