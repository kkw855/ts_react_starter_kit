import React from 'react';
import './Tweet.css';

const Tweet: React.FC = () => {
  return (
    <article className="tweet">
      <img className="avatar" src="http://www.gravatar.com/avatar" alt="Name" />
      <div className="content">
        <div className="author-meta">
          <span>@Handle</span>
          <span>Name</span>
          <span>3h ago</span>
        </div>
        <p>Some insightful message.</p>
        <ul className="actions">
          <li>
            <button>Reply</button>
          </li>
          <li>
            <button>Retweet</button>
          </li>
          <li>
            <button>Link</button>
          </li>
          <li>
            <button>...</button>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Tweet;
