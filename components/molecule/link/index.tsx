import React, { FC } from 'react';
import { Links } from '@components/atoms/link';
import { TopicsListType } from '@public/types';

const TopicListInline: FC<TopicsListType> = ({
  topicsList,
}: TopicsListType) => {
  return (
    <>
      {topicsList ? (
        topicsList.map(({ title, id }) => {
          return (
            <li key={id} className="list-inline-item">
              <Links href={`/topics/${title}`}>
                <a>{title}</a>
              </Links>
            </li>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default TopicListInline;
