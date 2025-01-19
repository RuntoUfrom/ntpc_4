import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Button from './Button';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
`;

const CalendarContainer = styled.div`
  margin-right: 20px;
`;

const FormContainer = styled.div`
  padding: 10px;
  width: 300px;
`;

const EventDetails = styled.div`
  font-size : 20px;
  font-weight : bold;
  margin-top: 20px;
`;

const InputEventDetails = styled.div`
  font-weight : 600;
  font-size : 24px;
`

function MyApp() {
  const [date, setDate] = useState(new Date());
  const [plan, setPlan] = useState('');
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
  });

  const [events, setEvents] = useState({
    '2024-01-01': 'New Year Celebration',
    '2024-01-15': 'Team Meeting',
    '2024-02-14': 'Valentine’s Day',
  });

  const handleDateClick = (selectedDate) => {
    const formattedDate = selectedDate.toLocaleDateString('en-CA'); // 로컬 시간 기준으로 'YYYY-MM-DD'
    setDate(selectedDate);
    setPlan(events[formattedDate] || 'No events on this date');
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { eventName, eventDate } = formData;

    if (!eventName || !eventDate) {
      alert('Please fill in all fields.');
      return;
    }

    // 새로운 이벤트 추가
    setEvents((prevEvents) => ({
      ...prevEvents,
      [eventDate]: eventName,
    }));

    // 폼 초기화
    setFormData({
      eventName: '',
      eventDate: '',
    });

    // 알림 표시
    alert('Event added successfully!');
  };

  return (
    <AppContainer>
      <CalendarContainer>
        <h2>Calendar</h2>
        <Calendar onChange={setDate} onClickDay={handleDateClick} value={date} />
        <EventDetails>
          <h3>Selected Date: {date.toDateString()}</h3>
          <p>Detail Plan : {plan}</p>
        </EventDetails>
      </CalendarContainer>
      <FormContainer>
        <h2>Add New Event</h2>
        <form onSubmit={handleFormSubmit}>
          <InputEventDetails>
            <label htmlFor="eventname">
              Event Name:
              <input style = {{width : "300px", heigiht : "300px"}}
                id="eventname"
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                placeholder="Enter event name"
                required
              />
            </label>
          </InputEventDetails>
          <InputEventDetails>
            <label htmlFor="eventdate">
              Event Date : 
              <input style = {{margin : "20px"}}
                id="eventdate"
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                required
              />
            </label>
          </InputEventDetails>
          <Button
            title="Add Event"
            onClick={handleFormSubmit}
          />
        </form>
      </FormContainer>
    </AppContainer>
  );
}

export default MyApp;
