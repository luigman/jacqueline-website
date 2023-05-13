import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from "components/common/Container";
import Button from "components/common/Button";
import Tag from "components/common/Tag";
import SkillIllustration from "components/illustrations/SkillIllustration";
//import {Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent} from '@mui/lab/Timeline';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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
          <Tag>Articulate Storyline</Tag>
          <Tag>Design</Tag>
          <p>{description}</p>
          <Button as={AnchorLink} href="#contact">
            {action}
          </Button>
        </Details>
        </SkillsWrapper>

        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(144, 200, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    // should have one block for teaching, and one for purdue
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
  />
</VerticalTimeline>
    </Wrapper>
  );
};
