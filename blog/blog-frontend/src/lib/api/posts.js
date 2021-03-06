import client from './client';
import qs from 'qs';


// 포스트 작성
export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

// 포스트 조회
export const readPost = id => client.get(`/api/posts/${id}`);

// 포스트 목록 조회
export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

//포스트 업데이트
export const updatePost = ({ id, title, body, tags }) => 
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

// 포스트 삭제
export const removePost = id => client.delete(`/api/posts/${id}`);