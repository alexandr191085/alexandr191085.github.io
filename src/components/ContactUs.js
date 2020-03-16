import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId
                  }
                </h4>
                <h4>Skype id :
                  {resumeData.skypeid}
                </h4>
                <h4>My CV :
                <a href="https://docs.google.com/document/d/13NAyfuNOPCHCHxDM0gaEICf2SJBgK8sk/edit#" download="" title="click here to download CV"> my short CV</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}