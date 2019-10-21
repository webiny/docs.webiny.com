/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require ('react');

class Footer extends React.Component {
  docUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render () {
    return (
      <React.Fragment>
        <div className="feedback-box">
          <div className="message">
            <h3>
              <strong>👋 Hey there!</strong> - What did you think of this page?
            </h3>
            <p>
              If you have any suggestions or comments on how to improve this page you, for yourself and your peers, please let us know.
            </p>
          </div>
          <div>
            <div className="button">
              <a href="https://www.webiny.com/contact-us" target="_blank">
                Send Feedback{' '}
              </a>
            </div>
          </div>
        </div>
        {/* 
        <div className="sub-footer-box">
          <div className="inner-box">
            <img
              src={'/img/webiny-cloud-hosted.svg'}
              alt={this.props.config.title}
              width="120"
            />
            <a href="https://www.webiny.com/" target="_blank">
              <h3>Get your serverless environment</h3>
              <p>
                The quickest and easiest way to get started with Webiny is to register for an account on Webiny.com, where you can create one or more websites.
              </p>
            </a>
          </div>
          <div className="inner-box">
            <img
              src={'/img/webiny-community.svg'}
              alt={this.props.config.title}
              width="120"
            />
            <a href="https://community.webiny.com/" target="_blank">
              <h3>Have questions, or in need of some help?</h3>
              <p>
                Our community forum is a great place to post any questions, showcase your work, or just ask for feedback. Everyone is welcome!
              </p>
            </a>
          </div>

        </div>
        */}

        <footer className="nav-footer" id="footer">
          <section className="sitemap">
            <div>
              <h5>Docs</h5>
              <a href={this.docUrl ('get-started')}>
                Get Started
              </a>
              <a href={this.docUrl ('cms-guides')}>
                CMS Guides
              </a>
              <a href={this.docUrl ('developer-tutorials')}>
                Developer Tutorials
              </a>
            </div>
            <div>
              <h5>More</h5>
              <a
                href="https://blog.webiny.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Blog
              </a>
              <a
                href="https://community.webiny.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Community Forum
              </a>
              <a
                href="https://twitter.com/WebinyPlatform"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <a
                href="https://github.com/webiny/webiny-js"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
              <a
                className="github-button"
                href={this.props.config.repoUrl}
                data-icon="octicon-star"
                data-count-href="/webiny/webiny-js/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub"
              >
                Star
              </a>
            </div>
            <div style={{textAlign: 'right'}}>
              <a
                href="https://www.webiny.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="fbOpenSource"
              >
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                  width="120"
                />
              </a>
              <section className="copyright">
                {this.props.config.copyright}
              </section>
            </div>
          </section>
        </footer>
      </React.Fragment>
    );
  }
}

module.exports = Footer;
