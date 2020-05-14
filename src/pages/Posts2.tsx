import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostList } from "../store/posts/posts.actions";
// connect -> HOC High Order Component -> recibe componente -> retorna comp mejorado
// useSelector, useDispatch -> hooks
// useSelector -> mapStateToProps
// useDispatch -> mapDispatchToProps

// Component<tipadoProps, tipadoState>
export class Posts2 extends Component {
  componentDidMount() {
    // useEffect
    // @ts-ignore
    this.props.fetchPostList();
  }

  render() {
    return (
      <div>
        {
          // @ts-ignore
          this.props.postList.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = ({
  // state
  // @ts-ignore
  posts: { postList, fetchingPostList },
}: any) => ({
  postList,
  fetchingPostList,
});

const mapDispatchToProps = {
  fetchPostList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts2);
