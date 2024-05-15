import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";




function Tweet(props) {
  return (
    <div className="tweet">
   
      <ProfileImage image={props.tweet.user.image} />
     

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span>

          <Timestamp time={props.tweet.timestamp} />

          <span className="timestamp">{props.Timestamp}</span>
        </div>
        <Message message={props.Timestamp} />

        <p className="message">{props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>

      <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
    </div>
  );
}

export default Tweet;
