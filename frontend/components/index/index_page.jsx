import React from "react";
import dateHelper from "../../utils/date_helper";
import { Link } from "react-router-dom";

class IndexPage extends React.Component {
  componentDidMount() {
    // debugger
    this.props.requestAllJournals();
  }

  componentDidUpdate(prevProps) {
    // debugger;
    // if (
    //   this.props.location.pathname !== prevProps.location.pathname
    // ) {
    //   this.props.requestAllJournals();
    // }
  }

  render() {
    const { journals, categories } = this.props;

    //todo this may need to change
    const topStory = journals[30];

    const journal1 = journals[Math.floor(Math.random() * 30)];
    const journal2 = journals[Math.floor(Math.random() * 30)];
    const journal3 = journals[Math.floor(Math.random() * 30)];
    const journal4 = journals[Math.floor(Math.random() * 30)];
    const journal5 = journals[Math.floor(Math.random() * 30)];
    const journal6 = journals[Math.floor(Math.random() * 30)];
    const journal7 = journals[Math.floor(Math.random() * 30)];
    const journal8 = journals[Math.floor(Math.random() * 30)];
    const journal9 = journals[Math.floor(Math.random() * 30)];
    // debugger
    if (!topStory) return null;

    return (
      <div className="index">
        <div className="index-top">
          <ul className="index-top-left">
            <li>
              <Link to={`/journals/${topStory.id}`}>
                <img src={topStory.photo} />
              </Link>
            </li>
            <div className="index-j-info">
              <li className="title">
                <Link to={`/journals/${topStory.id}`}>{topStory.title}</Link>
              </li>
              <li className="subtitle">{topStory.subtitle}</li>
              <li className="btm">
                <p>{topStory.author}</p>
                <ul className="date">
                  <li>{dateHelper(topStory.updated_at)}</li>
                  <li>
                    <i className="fas fa-circle"></i>
                  </li>
                  <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                </ul>
              </li>
            </div>
          </ul>

          <div className="index-top-mid">
            <div>
              <div className="mid-img">
                <Link to={`/journals/${journal1.id}`}>
                  <img src={journal1.photo} />
                </Link>
              </div>

              <ul className="mid-info">
                <h3>
                  <Link to={`/journals/${journal1.id}`}>{journal1.title}</Link>
                </h3>
                <ul className="btm">
                  <li>{journal1.author} in category</li>
                  <ul className="date">
                    <li>{dateHelper(topStory.updated_at)}</li>
                    <li>
                      <i className="fas fa-circle"></i>
                    </li>
                    <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </ul>
              </ul>
            </div>

            <div>
              <div className="mid-img">
                <Link to={`/journals/${journal2.id}`}>
                  <img src={journal2.photo} />
                </Link>
              </div>

              <ul className="mid-info">
                <h3>
                  <Link to={`/journals/${journal2.id}`}>{journal2.title}</Link>
                </h3>
                <ul className="btm">
                  <li>{journal2.author} in category</li>
                  <ul className="date">
                    <li>{dateHelper(topStory.updated_at)}</li>
                    <li>
                      <i className="fas fa-circle"></i>
                    </li>
                    <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </ul>
              </ul>
            </div>

            <div>
              <div className="mid-img">
                <Link to={`/journals/${journal3.id}`}>
                  <img src={journal3.photo} />
                </Link>
              </div>

              <ul className="mid-info">
                <h3>
                  <Link to={`/journals/${journal3.id}`}>{journal3.title}</Link>
                </h3>
                <ul className="btm">
                  <li>{journal3.author} in category</li>
                  <ul className="date">
                    <li>{dateHelper(topStory.updated_at)}</li>
                    <li>
                      <i className="fas fa-circle"></i>
                    </li>
                    <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </ul>
              </ul>
            </div>
          </div>

          <div className="index-top-right">
            <ul>
              <li className="right-img">
                <Link to={`/journals/${journal4.id}`}>
                  <img src={journal4.photo} />
                </Link>
              </li>
              <h3>
                <Link to={`/journals/${journal4.id}`}>{journal4.title}</Link>
              </h3>
              <li className="subtitle">{journal4.subtitle}</li>

              <ul className="btm">
                <li>{journal4.author} in category</li>
                <ul className="date">
                  <li>{dateHelper(topStory.updated_at)}</li>
                  <li>
                    <i className="fas fa-circle"></i>
                  </li>
                  <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
        <div className="index-mid">SEE EDITOR'S PICKS</div>



        <div>
          <div>BASED ON YOUR READING HISTORY</div>

          <div>
            <h3>Popular on Midgreen</h3>

            <div>
              01..
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;