import { Links } from '@components/atoms/link';
import { TopicType } from '@public/static/types/topics';
import { TopicsListType } from '@public/types';
import React, { FC } from 'react';

export const TopicsCloudList: FC<TopicsListType> = ({
  topicsList,
}: TopicsListType) => {
  return (
    <>
      <div className="tagcloud mt-50">
        {topicsList.map(({ id, title }: TopicType) => {
          return (
            <Links href="/topics" key={id}>
              <a className="tag-cloud-link">{title}</a>
            </Links>
          );
        })}
      </div>
    </>
  );
};
