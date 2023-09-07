import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from "components/common/Container";
import Button from "components/common/Button";
import Tag from "components/common/Tag";
import SkillIllustration from "components/illustrations/SkillIllustration";
//import {Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent} from '@mui/lab/Timeline';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Resume from '../../../content/resume.pdf';
import purdue_logo from "./images/purdue_logo.png";
import renaissance_logo from "./images/renaissance_logo.jpg";
import 'react-vertical-timeline-component/style.min.css';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export default () => {
  const {
    content: {
      frontmatter: { title, description, action }
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "about" } }) {
        frontmatter {
          title
          description
          action
        }
      }
    }
  `);
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <SkillIllustration />
        </Thumbnail>
        <Details>
          <h1>{title}</h1>
          <Tag>Artiucate Storyline</Tag>
          <Tag>Instructional Design</Tag>
          <Tag>E-Learning Development</Tag>
          <Tag>Action Mapping</Tag>
          <Tag>Adult Learning Theories</Tag>
          <p>{description}</p>
          <a href={Resume} target = "_blank" rel="noopener noreferrer">
          <Button href={Resume} target = "_blank">
            {action}
          </Button></a>
        </Details>
        </SkillsWrapper>

        <VerticalTimeline>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(144, 200, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    // should have one block for teaching, and one for purdue
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Sales Development Representative | Illuminate Instructor</h3>
    <h4 className="vertical-timeline-element-subtitle">Renaissance Learning - Remote</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<img  src={renaissance_logo} alt="fireSpot"/>}
  >
    <h3 className="vertical-timeline-element-title">Sales Development Representative | Illuminate Instructor</h3>
    <h4 className="vertical-timeline-element-subtitle">Renaissance Learning - Remote (Seattle, WA)</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Fifth Grade Teacher</h3>
    <h4 className="vertical-timeline-element-subtitle">Osseo Area School District - Brooklyn Park, MN</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Fifth Grade Teacher</h3>
    <h4 className="vertical-timeline-element-subtitle">Sun Prairie School District - Sun Prairie, WI</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Third Grade Teacher</h3>
    <h4 className="vertical-timeline-element-subtitle">Delphi Community Schools - Delphi, IN</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2014-2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<img  src={purdue_logo} alt="fireSpot"/>}
  >
    <h3 className="vertical-timeline-element-title">B.A. Elementary Education</h3>
    <h4 className="vertical-timeline-element-subtitle">Purdue University - West Lafayette, IN</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
    </Wrapper>
  );
};
