import { useEffect, useState } from "react";
import LifeCyclePracChild from "./LifeCyclePracChild";
import "./LifeCyclePrac.css";
import axios from "axios";
// 임시 데이터 (backend 서버에서 받아왔다고 가정하는 데이터)

const LifeCyclePrac = () => {
  // TODO: 임시 데이터 (fakePosts)를 저장할 배열 posts state
  // 초기 값은 빈 배열
  const [posts, setPosts] = useState([]);

  // TODO: 해당 컴포넌트가 "mount" 되었을 때
  // posts state에 fakePosts 데이터를 설정하기
  // 단, setTimeout()을 이용해 2초 후 posts state에 저장한다.
  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(res.data);
    setPosts(res.data.slice(0, 10));
  };

  useEffect(() => {
    setTimeout(getPosts, 2000);
  }, []);

  const dataLoading = () => {
    return <h4>loading</h4>;
  };

  const dataLoaded = posts.map((post) => {
    return (
      // 키는 자식 컴포넌트를 호출할 때 지정.
      <LifeCyclePracChild
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    );
  });

  return (
    <div className="PostList">
      <header>📨 Post List</header>
      {/* posts state의 길이에 따라 보여주는 정보 달리하기 (힌트: 삼항 연산자) */}
      {/* posts state 길이가 0 이라면 데이터를 불러오는 중이므로 loading 메세지 */}
      {/* posts state 길이가 0 이 아니라면 데이터를 불러왔으므로 PostItem 컴포넌트 반복 */}
      {/* {(posts.length > 0) ? () : (<h4>loading</h4>)} */}
      {/* jsx에서는 배열이 나온다 ? 그럼 그 요소가 쏙쏙 렌더된다는 거임. 
          그래서 map함수는 return 값이 배열인데 jsx에 그대로 넣어준 것.  */}
      {/* {[
        <LifeCyclePracChild key="1" id="first" title="111" body="111" />,
        <LifeCyclePracChild key={2} id={22} title={22} body={222} />,
      ]} */}
      {posts.length > 0 ? dataLoaded : dataLoading()}
    </div>
  );
};

export default LifeCyclePrac;
