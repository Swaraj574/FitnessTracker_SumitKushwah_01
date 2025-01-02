// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { counts } from "../utils/data";
// import CountsCard from "../component/cards/CountCard";
// import WeeklyStatCard from "../component/cards/WeeklyStatCard";
// import CategoryChart from "../component/cards/CategoryChart";
// import AddWorkout from "../component/AddWorkout";
// import WorkoutCard from "../component/cards/WorkoutCard";
// import { addWorkout, getDashboardDetails, getWorkouts } from "../api";
// import StreakCard from "../component/cards/StreakCard"; // Import the StreakCard component

// const Container = styled.div`
//   flex: 1;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   padding: 22px 0px;
//   overflow-y: scroll;
// `;

// const Wrapper = styled.div`
//   flex: 1;
//   max-width: 1400px;
//   display: flex;
//   flex-direction: column;
//   gap: 22px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;

// const Title = styled.div`
//   padding: 0px 16px;
//   font-size: 22px;
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 500;
// `;

// const FlexWrap = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   gap: 22px;
//   padding: 0px 16px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;

// const Section = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0px 16px;
//   gap: 22px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;

// const CardWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
//   margin-bottom: 100px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;

// const Dashboard = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState();
//   const [streakData, setStreakData] = useState(null); // New state for streak data
//   const [buttonLoading, setButtonLoading] = useState(false);
//   const [todaysWorkouts, setTodaysWorkouts] = useState([]);
//   const [workout, setWorkout] = useState(`#Legs
// -Back Squat
// -5 setsX15 reps
// 30 kg
// -10 min`);

//   const dashboardData = async () => {
//     setLoading(true);
//     const token = localStorage.getItem("fittrack-app-token");
//     await getDashboardDetails(token).then((res) => {
//       setData(res.data);
//       setStreakData(res.data.streak); // Fetch and set streak data from the API response
//       console.log(res.data);
//       setLoading(false);
//     });
//   };

//   const getTodaysWorkout = async () => {
//     setLoading(true);
//     const token = localStorage.getItem("fittrack-app-token");
//     await getWorkouts(token, "").then((res) => {
//       setTodaysWorkouts(res?.data?.todaysWorkouts);
//       console.log(res.data);
//       setLoading(false);
//     });
//   };

//   const addNewWorkout = async () => {
//     setButtonLoading(true);
//     const token = localStorage.getItem("fittrack-app-token");
//     await addWorkout(token, { workoutString: workout })
//       .then((res) => {
//         dashboardData();
//         getTodaysWorkout();
//         setButtonLoading(false);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   useEffect(() => {
//     dashboardData();
//     getTodaysWorkout();
//   }, []);

//   return (
//     <Container>
//       <Wrapper>
//         <Title>Dashboard</Title>

//         {/* Add the StreakCard here */}
//         {streakData && (
//           <FlexWrap>
//             <StreakCard streak={streakData} />
//           </FlexWrap>
//         )}

//         <FlexWrap>
//           {counts.map((item) => (
//             <CountsCard key={item.id} item={item} data={data} />
//           ))}
//         </FlexWrap>

//         <FlexWrap>
//           <WeeklyStatCard data={data} />
//           <CategoryChart data={data} />
//           <AddWorkout
//             workout={workout}
//             setWorkout={setWorkout}
//             addNewWorkout={addNewWorkout}
//             buttonLoading={buttonLoading}
//           />
//         </FlexWrap>

//         <Section>
//           <Title>Today's Workouts</Title>
//           <CardWrapper>
//             {todaysWorkouts.map((workout) => (
//               <WorkoutCard key={workout._id} workout={workout} />
//             ))}
//           </CardWrapper>
//         </Section>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../component/cards/CountCard";
import WeeklyStatCard from "../component/cards/WeeklyStatCard";
import CategoryChart from "../component/cards/CategoryChart";
import AddWorkout from "../component/AddWorkout";
import WorkoutCard from "../component/cards/WorkoutCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";
import StreakCard from "../component/cards/StreakCard"; 
import Webcam from "react-webcam";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

 const Wrapper = styled.div`
   flex: 1;
  max-width: 1400px;
   display: flex;
  flex-direction: column;
  gap: 22px;
   @media (max-width: 600px) {
     gap: 12px;
  }
 `;

 const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [streakData, setStreakData] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Legs\n-Back Squat\n-5 setsX15 reps\n30 kg\n-10 min`);
  const [aiWorkoutData, setAIWorkoutData] = useState(null);
  const [isCameraActive, setCameraActive] = useState(false);

  const webcamRef = React.useRef(null);

  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      setStreakData(res.data.streak);
      setLoading(false);
    });
  };

  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      setLoading(false);
    });
  };

  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await addWorkout(token, { workoutString: workout })
      .then((res) => {
        dashboardData();
        getTodaysWorkout();
        setButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const startCamera = () => {
    setCameraActive(true);
  };

  const stopCamera = () => {
    setCameraActive(false);
  };

  const analyzeWorkout = async () => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();

    const token = localStorage.getItem("fittrack-app-token");
    const response = await fetch("/api/analyze-workout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ image: imageSrc }),
    });
    const result = await response.json();
    setAIWorkoutData(result);
  };

  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>

        {streakData && (
          <FlexWrap>
            <StreakCard streak={streakData} />
          </FlexWrap>
        )}

        <FlexWrap>
          {counts.map((item) => (
            <CountsCard key={item.id} item={item} data={data} />
          ))}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
        </FlexWrap>

        <Section>
          <Title>AI Workout Detection</Title>
          <CameraContainer>
            {isCameraActive ? (
              <>
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <button onClick={analyzeWorkout}>Analyze Workout</button>
                <button onClick={stopCamera}>Stop Camera</button>
              </>
            ) : (
              <button onClick={startCamera}>Start Camera</button>
            )}
            {aiWorkoutData && (
              <div>
                <h3>Detected Workout:</h3>
                <p>{aiWorkoutData.workoutName}</p>
                <p>{aiWorkoutData.category}</p>
                <p>{aiWorkoutData.sets} sets</p>
                <p>{aiWorkoutData.reps} reps</p>
                <p>{aiWorkoutData.errors}</p>
              </div>
            )}
          </CameraContainer>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
