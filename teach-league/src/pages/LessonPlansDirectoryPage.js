import { Container, Row, Col /*Button*/ } from "reactstrap";
import LessonPlanDetail from "../features/LessonPlanDetail";
import LessonPlansList from "../features/lessonplans/LessonPlansList";
import React, { useState, useEffect } from "react";
// import { selectLessonPlanById } from '../features/lessonplans/LessonPlansList';
import { selectLessonPlanById } from "../features/lessonplans/premiumContentSlice";
// import { useSpring, animated } from 'react-spring';

// import { selectRandomLessonPlan } from "./premiumContentSlice";
// t-league/src/pages/premiumContentSlice.js

const LessonPlansDirectoryPage = () => {
  const [lessonPlanId, setLessonPlanId] = useState(0);
  const selectedLessonPlan = selectLessonPlanById(lessonPlanId);
  // const [toggle, setToggle] = useState(false)
    
  // const animatedStyle = useSpring({
  //     opacity: toggle ? 1 : 0,
  //     transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
  //     config: { duration: 500 }
  // });

  // useEffect(() => {
  //     setToggle(true);
  // }, []);

  return (
    // <animated.div style={animatedStyle}>
    <Container>
      <Row>
        <Col className="col col-xs-6">
          <LessonPlanDetail
            className="LessonPlanDetail"
            lessonplan={selectedLessonPlan}
          />
        </Col>
        <Col className="col col-6">
          <LessonPlansList setLessonPlanId={setLessonPlanId} />
        </Col>
      </Row>
    </Container>
    // </animated.div>
  );
};

export default LessonPlansDirectoryPage;
