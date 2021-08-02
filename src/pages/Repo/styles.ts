import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 16px;
  width: 100%;
  height: 75vh;

  > p {
    font-size: 16px;
  }

  > div {
    width: 35vw;
    margin-bottom: 16px;
    padding: 16px;
    border: 2px solid var(--border);
    border-radius: 10px;

    @media (max-width: 768px) {
      width: unset;
    }
  }
`;

export const Breadcrumb = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: var(--link);
    text-decoration: none;

    &:hover, &:focus {
      text-decoration: underline;
    }

    &.username {
      margin-left: 8px;
    }

    &.reponame {
      font-weight: 600;
    }
  }

  > span {
    padding: 0 5px;
  }
`;

const iconsCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`${iconsCSS}`;

export const Stats = styled.ul`
  margin-top: 16px;
  display: flex;
  align-items: center;

  > li {
    display: flex;
    align-items: center;
    margin-right: 9px;
  }

  > * {
    margin-right: 7px;
    color: var(--gray);
  }
`;

export const StarIcon = styled(RiStarLine)`${iconsCSS}`;

export const ForkIcon = styled(AiOutlineFork)`${iconsCSS}`;

export const LinkButton = styled.a`
  text-decoration: none;

  margin-top: 24px;
  background: var(--gray-dark);
  padding: 12px 17px;
  border-radius: 24px;
  width: max-content;

  display: flex;
  align-items: center;

  > span {
    color: var(--primary);
  }

  > svg {
    fill: var(--primary);
    margin-right: 10px;
  }
`;

export const GithubIcon = styled(FaGithub)`${iconsCSS}`;

export const BackIcon = styled(MdArrowBack)`${iconsCSS}`;

export const ButtonsField = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`