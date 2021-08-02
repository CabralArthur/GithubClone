import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, ButtonsField, GithubIcon, BackIcon  } from './styles';

import { APIRepo } from '../../@types';

interface Data {
  repos?: APIRepo[];
  error?: string;
}

const Repo: React.FC = () => {
  const { username = 'CabralArthur', reponame } = useParams();
  const [ data, setData ] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/repos/${username}/${reponame}`),
    ]).then(async responses => {
      const [ reposResponse ] = responses;

      let repos = await reposResponse.json();

      const repository = [ repos ]

      repos = repository

      setData({
        repos
      })
    })
  }, [ username, reponame ])

  if (data?.error) {
    return <h1>{data.error}</h1>
  }
  
  return (
    <Container>
      {data?.repos?.map((item) => (
        <div>
          <Breadcrumb>
            <RepoIcon />

            <Link className={'username'} to={'/' + username}>
              {username}
            </Link>

            <span>/</span>

            <Link className={'reponame'} to={'/' + username + '/' + reponame}>
              {reponame}
            </Link>
          </Breadcrumb>

          <p>{item.description}</p>

          <Stats>
            <li>
              <StarIcon />
              <b>{item.stargazers_count !== 0 ? item.stargazers_count : '0'}</b>
              <span>stars</span>
            </li>
            <li>
              <ForkIcon />
              <b>{item.forks_count}</b>
              <span>forks</span>
            </li>
          </Stats>
          
          <ButtonsField>
            <LinkButton href={'http://github.com/' + username + '/' + reponame} target='_blank'>
                <GithubIcon />
                <span>View on Github</span>
              </LinkButton>

              <LinkButton href={'/'}>
                <BackIcon />
                <span>Back to initial page</span>
              </LinkButton>
          </ButtonsField>
        </div>
      ))}
    </Container>
  );
}

export default Repo;