/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <React.Fragment>
        <div className="feedback-box">
          <h3><strong>👋 Hey there!</strong> - What did you think of this page?</h3>
          <p>If you have any suggestions or comments on how to improve this page you, for yourself and your peers, please let us know.</p>
          <a href="https://www.webiny.com/contact-us" target="_blank">Send Feedback </a>
        </div>
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("doc1.html", this.props.language)}>
              Getting Started (or other categories)
            </a>
            <a href={this.docUrl("doc2.html", this.props.language)}>
              Guides (or other categories)
            </a>
            <a href={this.docUrl("doc3.html", this.props.language)}>
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Community</h5>
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
        </section>

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
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
      </React.Fragment>
    );
  }
}

module.exports = Footer;
