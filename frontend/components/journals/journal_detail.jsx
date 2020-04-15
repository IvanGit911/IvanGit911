import React from "react";
import Img from "react-image";
import dateHelper from "../../utils/date_helper";
import { Link } from "react-router-dom";
import Comment from './comment'

class JournalDetail extends React.Component {
  componentDidMount() {
    this.props.requestJournal(this.props.match.params.journalId);
  }

  render() {
    const { journal } = this.props;

    if (!journal) return null;

    const showComments = !journal.all_comments ? null : (journal.all_comments[""].map((comment) => {  //toplevel.map
      return <Comment key={comment.id} comment={comment} allComments={journal.all_comments} />;
    }));

    // debugger;
    return (
      <>

      <div className="journal-content">
        <ul className="journal-detail">
          <li className="journal-title">{journal.title}</li>
          <li className="journal-subtitle">{journal.subtitle}</li>
          <li className="journal-authinfo">
              <div>{journal.author[0]}</div>
            <div>
              <div className="journal-authinfo-1">
                <div>
                  <Link to="">{journal.author}</Link>
                </div>
                <button className="journal-flw-btn">Follow</button>
              </div>
              <div className="journal-authinfo-2">
                <div>{dateHelper(journal.updated_at)}</div>
                <div>{`${Math.floor(Math.random() * 10 + 2)} min read`}</div>
              </div>
            </div>
          </li>
          <li>
            <img src={journal.photo} />
          </li>
          <li className="journal-body">
            <p>{journal.body[0].toUpperCase()}</p>
            <div>{journal.body.slice(1)}</div>
          </li>
        </ul>

      </div>
        <div className='comments'>
          <h1>Comments</h1>
          {/* <form action="">
            <textarea cols="30" rows="10"></textarea>
            <input type="submit" value="Publish"/>
          </form> */}
          {showComments}
            {/* {journal.all_comments[""].map((comment) => {  //toplevel.map
              return <Comment key={comment.id} comment={comment} allComments={journal.all_comments}/>;
            })} */}
          

        </div>
      </>
    );
  }
}

export default JournalDetail;
