import React, { ReactElement, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';
import Categories from './Categories';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function NewsList({
  match,
}: RouteComponentProps<{ category: string }>): ReactElement {
  // 카테고리가 선택되지 않았으면 기본값 all 로 사용
  const category = match.params.category || 'all';

  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  // 기사
  const [articles, setArticles] = useState<
    | {
        title: string;
        description: string;
        url: string;
        urlToImage: string;
      }[]
    | null
  >(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1565e5ebdc3741c69b69299873f377d4`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return <></>;
  }

  // articles 값이 유효할 때
  return (
    <>
      <Categories />
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    </>
  );
}

export default NewsList;
