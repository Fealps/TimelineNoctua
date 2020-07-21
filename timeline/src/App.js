import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import React from 'react';
import './App.css';
import { Card, CardContent, Typography } from "@material-ui/core";


function App() {
  const array = [{
    title: "Lorem Ipsum",
    desc: "Dolor sit amet",
    date: "11-03-1996",
    color: "purple",
  },
  {
    title: "Lorem Ipsum",
    desc: "Dolor sit amet",
    date: "12-03-1996",
    color: "Orange",
  },
  {
    title: "Lorem Ipsum",
    desc: "Dolor sit amet",
    date: "13-03-1996",
    color: "Yellow"
  },
  {
    title: "Lorem Ipsum",
    desc: "Dolor sit amet",
    date: "14-03-1996",
    color: "red",
  },
  ]
  const itens = array.map((element) =>
    <TimelineItem
      style={{
        color: element.color,
      }}
      dateInnerStyle={{
        background: element.color
      }}
      dateText={element.date}>
      <Card>
        <CardContent style={{ backgroundColor: element.color}}>
          <Typography className="Title"
            gutterBottom variant="h5"
            variant='h5'
            style={{ color: '#FFFFFF'}}
          >
            {element.title}
          </Typography>
        </CardContent>
        <CardContent>

          <Typography className="Desc">
            {element.desc}
          </Typography>
        </CardContent>
        <button className="button" style={{
          color: element.color,
          borderColor: element.color,
        }} >Button</button>
      </Card>
    </TimelineItem>
  );

  return (
    <Timeline lineColor={'#ddd'}>
      {itens}
    </Timeline>
  );
}

export default App;
